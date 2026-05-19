import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MovieRow from "./components/MovieRow.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <h2 className="section-title">Trending Now</h2>

      <MovieRow />

      <Footer />
    </div>
  );
}

export default App;