import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

import heroImg from "../assets/home-hero.jpg";
import regImg from "../assets/home-registration.jpg";
import contactImg from "../assets/home-contact.jpg";
import earthImg from "../assets/home-earth.jpg";

export default function Home() {
  return (
    <div className="page">
      <Navbar />

     
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <Link className="heroBox" to="/electric-cars">
          Models
        </Link>
      </section>

    
      <section className="tiles">
        <div className="tile" style={{ backgroundImage: `url(${regImg})` }}>
          <div className="tileOverlay">
            <h2>Registration</h2>
            <Link className="tileBtn" to="/registration">Explore more</Link>
          </div>
        </div>

        <div className="tile" style={{ backgroundImage: `url(${contactImg})` }}>
          <div className="tileOverlay">
            <h2>Contact</h2>
            <Link className="tileBtn" to="/contact">Explore more</Link>
          </div>
        </div>
      </section>

      
      <section className="earth" style={{ backgroundImage: `url(${earthImg})` }}>
        <h1 className="earthText">TECHNOLOGY GREEN FUTURE</h1>
      </section>

      <Footer />
    </div>
  );
}
