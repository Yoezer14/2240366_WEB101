const WEATHER_API_KEY = "65ef05defd2be6613dce6f53b1409482"

let savedLocations = []

function openTab(tab){

document.querySelectorAll(".tab-content").forEach(el=>el.classList.remove("active"))

document.querySelectorAll(".tab").forEach(el=>el.classList.remove("active"))

document.getElementById(tab).classList.add("active")

event.target.classList.add("active")

}


async function getWeather(){

const city = document.getElementById("cityInput").value

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`

try{

const res = await fetch(url)

const data = await res.json()

document.getElementById("weatherResult").innerHTML = `
<h4>${data.name}</h4>
<p>Temperature: ${data.main.temp} °C</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind: ${data.wind.speed} m/s</p>
<p>${data.weather[0].description}</p>
`

}catch(err){

console.error(err)

}

}



async function saveLocation(){

const name = document.getElementById("locName").value
const city = document.getElementById("locCity").value
const country = document.getElementById("locCountry").value
const notes = document.getElementById("locNotes").value


const locationData = {name,city,country,notes}


const res = await fetch(
"https://jsonplaceholder.typicode.com/posts",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(locationData)
})

const data = await res.json()

locationData.id = data.id

savedLocations.push(locationData)

renderLocations()

openTab("saved")

}



function renderLocations(){

const container = document.getElementById("locationsList")

container.innerHTML=""

savedLocations.forEach(loc=>{

container.innerHTML+=`

<div class="location-card">

<h4>${loc.name}</h4>

<p>${loc.city}, ${loc.country}</p>

<p>${loc.notes}</p>

<button class="edit-btn" onclick="editLocation(${loc.id})">Edit</button>

<button class="delete-btn" onclick="deleteLocation(${loc.id})">Delete</button>

</div>

`

})

}



function editLocation(id){

const loc = savedLocations.find(l=>l.id===id)

const newName = prompt("Edit Location Name", loc.name)

if(newName){

loc.name = newName

updateLocation(loc)

}

}



async function updateLocation(loc){

await fetch(

`https://jsonplaceholder.typicode.com/posts/${loc.id}`,

{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(loc)
})

renderLocations()

}



async function deleteLocation(id){

if(!confirm("Delete this location?")) return

await fetch(

`https://jsonplaceholder.typicode.com/posts/${id}`,

{
method:"DELETE"
})

savedLocations = savedLocations.filter(l=>l.id!==id)

renderLocations()

}