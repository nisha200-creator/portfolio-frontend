import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profileImg from "../assets/passportsize_photo.jpeg";
import "../css/About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <div className="about-image">

                <img
                  src={profileImg}
                  alt="Nisha Das"
                />

              </div>

            </div>

            <div className="col-lg-7">

              <span className="about-tag">
                ABOUT ME
              </span>

              <h1>
                Nisha Das
              </h1>

              <h2>
                Full Stack Web Developer
              </h2>

              <p>
                Junior Full Stack Web Developer with over
                1 year of experience in developing modern
                web applications using Python, Django,
                React.js and JavaScript.

                Experienced in REST API development,
                authentication systems, database
                management, third-party API integration,
                responsive web design and application
                deployment.
              </p>

              <div className="about-info">

                <div>
                  <h4>Experience</h4>
                  <span>1+ Years</span>
                </div>

                <div>
                  <h4>Projects</h4>
                  <span>10+</span>
                </div>

                <div>
                  <h4>Location</h4>
                  <span>New Delhi</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="experience-section">

        <div className="container">

          <h2>
            Experience
          </h2>

          <div className="timeline-card">

            <h3>
              Junior Web Developer
            </h3>

            <h4>
              Johnnette Technologies Pvt Ltd
            </h4>

            <p>
              Feb 2025 - May 2026
            </p>

            <ul>
              <li>Developed full-stack Django applications.</li>
              <li>Built REST APIs.</li>
              <li>Integrated payment gateways.</li>
              <li>Implemented authentication systems.</li>
              <li>Worked with AWS and PythonAnywhere.</li>
              <li>Managed Git and GitHub repositories.</li>
            </ul>

          </div>

          <div className="timeline-card">

            <h3>
              Web Developer Intern
            </h3>

            <h4>
              Johnnette Technologies Pvt Ltd
            </h4>

            <p>
              Feb 2025 - Mar 2025
            </p>

          </div>

        </div>

      </section>

      <section className="education-section">

        <div className="container">

          <h2>
            Education
          </h2>

          <div className="edu-card">

            <h3>MCA</h3>

            <p>
              Amity University Online
            </p>

            <span>
              Machine Learning & AI
            </span>

          </div>

          <div className="edu-card">

            <h3>BA</h3>

            <p>
              Siliguri College
            </p>

          </div>

        </div>

      </section>

      <section className="tech-section">

        <div className="container">

          <h2>
            Technologies
          </h2>

          <div className="tech-grid">

            {
              [
                "Python",
                "Django",
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "REST API",
                "SQLite",
                "SQL",
                "Git",
                "GitHub",
                "AWS",
                "PythonAnywhere"
              ].map((item)=>(
                <span key={item}>
                  {item}
                </span>
              ))
            }

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;