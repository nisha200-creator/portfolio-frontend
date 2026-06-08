import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar-section">

      <div className="container">

        <div className="navbar-main">

          <div className="logo">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="logo-img"
              />
              {/* Nisha<span>.</span> */}
            </Link>
          </div>

          <ul className="nav-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">
                Skills
              </Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

          <div className="nav-btn">

            <a
              href="/Nisha_CV.pdf"
              download
            >
              Resume
            </a>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
