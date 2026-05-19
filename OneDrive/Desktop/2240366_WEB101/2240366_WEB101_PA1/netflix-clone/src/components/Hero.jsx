import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <h1>Discover Beautiful Bhutan</h1>

        <p>Explore monasteries, dzongs and rich culture.</p>

        <button>Explore Now</button>
      </div>
    </div>
  );
}

export default Hero;