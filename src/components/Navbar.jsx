import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-initials">DB</span>
        <span className="brand-name">Dhrubajyoti</span>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
        <li><NavLink to="/education" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Education</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Skills</NavLink></li>
        <li><NavLink to="/weather" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Weather</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
