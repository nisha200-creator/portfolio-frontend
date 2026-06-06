import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer-section">

            <div className="container">

                <div className="row">

                    {/* Left */}

                    <div className="col-lg-4 mb-4">

                        <h2 className="footer-logo">
                            Nisha<span>.</span>
                        </h2>

                        <p>
                            Full Stack Developer specializing in
                            React, Django, Python, and modern
                            web technologies.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-4 mb-4">

                        <h4>Quick Links</h4>

                        <ul>

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

                    </div>

                    {/* Contact */}

                    <div className="col-lg-4">

                        <h4>Contact</h4>

                        <p>Email</p>
                        <a href="mailto:nisha70016@gmail.com">
                            nisha70016@gmail.com
                        </a>

                        <p className="mt-3">Phone</p>
                        <a href="tel:+917318818630">
                            +91 7318818630
                        </a>

                        <div className="social-links">
                            <a
                                href="https://github.com/nisha200-creator"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/nisha-das-227751389"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                    </div>

                </div>

                <hr />

                <div className="copyright">

                    © 2026 Nisha Das.
                    All Rights Reserved.

                </div>

            </div>
        </footer>
    );
}

export default Footer;