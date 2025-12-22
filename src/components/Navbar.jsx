import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">EV CARS</Link>

      <ul className="nav-links">
        <li><Link to="/electric-cars">Models</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      
      <div className="nav-spacer" />
    </nav>
  );
}
