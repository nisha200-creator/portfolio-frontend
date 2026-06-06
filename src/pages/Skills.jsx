import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/skills.css";

function Skills() {

    const frontend = [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "Responsive Design"
    ];

    const backend = [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs"
    ];

    const database = [
        "SQLite",
        "SQL"
    ];

    const tools = [
        "Git",
        "GitHub",
        "AWS",
        "PythonAnywhere"
    ];

    return (

        <>

        <Navbar/>

        <section className="skills-page">

            <div className="container">

                <div className="skills-heading">

                    <span>MY SKILLS</span>

                    <h1>Technical Expertise</h1>

                    <p>
                        Technologies and tools I use to
                        build modern web applications.
                    </p>

                </div>

                <div className="row">

                    <div className="col-lg-6">

                        <div className="skill-box">

                            <h2>Frontend</h2>

                            {
                                frontend.map((item)=>(
                                    <span key={item}>
                                        {item}
                                    </span>
                                ))
                            }

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="skill-box">

                            <h2>Backend</h2>

                            {
                                backend.map((item)=>(
                                    <span key={item}>
                                        {item}
                                    </span>
                                ))
                            }

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="skill-box">

                            <h2>Database</h2>

                            {
                                database.map((item)=>(
                                    <span key={item}>
                                        {item}
                                    </span>
                                ))
                            }

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="skill-box">

                            <h2>Tools</h2>

                            {
                                tools.map((item)=>(
                                    <span key={item}>
                                        {item}
                                    </span>
                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <Footer/>

        </>

    );

}

export default Skills;