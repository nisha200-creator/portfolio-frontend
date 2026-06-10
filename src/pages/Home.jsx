import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/home.css";


import profileImg from "../assets/passportsize_photo.jpeg";

function Home() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Python",
    "Django",
    "MySQL",
    "Git",
    "AWS",
  ];

  const projects = [
    {
      title: "Johnnette  Technologies",
      link: "https://www.johnnette.com",
    },
    {
      title: "livingstone store",
      link: "https://livingstonestore.com/",
    },
    {
      title: "Livingstone Vehicles",
      link: "https://www.livingstonevehicles.com",
    },
    {
      title: "FTS",
      link: "https://www.futuretechnologiessummit.com/",
    },

  ];

  return (
    <>
      <Navbar />

      <section className="hero-section">

        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7 hero-content">
              <span className="hero-subtitle">
                Hello, I'm
              </span>

              <h1>Nisha Das</h1>

              <h2>Junior Web Developer</h2>

              <p>
                I build modern, responsive and scalable
                web applications using React, Django
                and Python.
              </p>

              <div className="hero-btns">
                <a
                  href="/Nisha_CV.pdf"
                  download
                  className="resume-btn"
                >
                  Download Resume
                </a>

                <a
                  href="/projects"
                  className="project-btn"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="profile-circle">
                <img
                  src={profileImg}
                  alt="Nisha Das"
                  className="profile-img"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Signature */}
        <img
          src="/signature.png"
          alt="Signature"
          className="hero-signature"
        />

      </section>

      <section className="skills-section">
        <div className="container">

          <h2>Tech Stack</h2>

          <div className="skill-list">

            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>

      <section className="stats-section">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-4">
              <h1>15+</h1>
              <p>Projects</p>
            </div>

            <div className="col-md-4">
              <h1>1+</h1>
              <p>Years Experience</p>
            </div>

            <div className="col-md-4">
              <h1>100%</h1>
              <p>Satisfaction</p>
            </div>

          </div>

        </div>

      </section>

      <section className="project-section">

        <div className="container">

          <h2>Featured Projects</h2>

          <div className="row">
            {projects.map((item) => (
              <div
                className="col-lg-4 mb-4"
                key={item.title}
              >
                <div className="project-card">

                  <h4>{item.title}</h4>

                  <p>
                    Modern full-stack application
                    built with React and Django.
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    Explore
                  </a>

                </div>
              </div>
            ))}
          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default Home;
