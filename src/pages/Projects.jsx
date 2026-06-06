import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Projects.css";

function Projects() {

    const projects = [

        // {
        //     title: "FT Magazine",
        //     tech: "Python • Django • JavaScript • SQL",
        //     desc: "Developed a full-stack news and magazine platform with authentication, admin panel, SEO features and dynamic content management.",
        //     live: "https://www.ft-magazine.com"
        // },

        {
            title: "Johnnette Technologies",
            tech: "HTML • CSS • JavaScript",
            desc: "Maintained and improved the company website with SEO optimization and UI enhancements.",
            live: "https://www.johnnette.com"
        },

        

        {
            title: "Livingstone Vehicles",
            tech: "HTML • CSS • JavaScript • Wix",
            desc: "Developed and maintained a luxury automotive website with responsive design and customer enquiry features.",
            live: "https://www.livingstonevehicles.com"
        },

        

    ];

    return (

        <>

        <Navbar/>

        <section className="project-page">

            <div className="container">

                <div className="project-heading">

                    <span>MY WORK</span>

                    <h1>Featured Projects</h1>

                    <p>
                        Some of the projects I have developed
                        using Django, React and modern web
                        technologies.
                    </p>

                </div>

                <div className="row">

                    {
                        projects.map((item,index)=>(

                            <div
                            className="col-lg-6 mb-4"
                            key={index}
                            >

                                <div className="project-box">

                                    <div className="project-number">

                                        0{index+1}

                                    </div>

                                    <h2>
                                        {item.title}
                                    </h2>

                                    <h5>
                                        {item.tech}
                                    </h5>

                                    <p>
                                        {item.desc}
                                    </p>

                                    <a
                                    href={item.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        Visit Project
                                    </a>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

        <Footer/>

        </>

    );

}

export default Projects;