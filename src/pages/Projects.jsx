import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/projects.css";

import livingstoneStoreImg from "../assets/projects/livingstonestore.png";
import johnnetteImg from "../assets/projects/johnnette.png";
import livingstoneVehiclesImg from "../assets/projects/livingstonevehicles.png";
import FTSImg from "../assets/projects/FTS.png";

function Projects() {

    const projects = [
        {
            title: "Livingstone Store",
            image: livingstoneStoreImg,
            tech: "Shopify",
            desc: "Livingstone Store – Shopify-based eCommerce website developed with customized themes, responsive design, product catalog management, secure checkout, and SEO optimization.",
            live: "https://livingstonestore.com/",
        },

        {
            title: "Johnnette Technologies",
            image: johnnetteImg,
            tech: "HTML • CSS • JavaScript",
            desc: "Maintained and improved the company website with SEO optimization and UI enhancements.",
            live: "https://www.johnnette.com",
        },

        {
            title: "Livingstone Vehicles",
            image: livingstoneVehiclesImg,
            tech: "HTML • CSS • JavaScript • Wix",
            desc: "Developed and maintained a luxury automotive website with responsive design and customer enquiry features.",
            live: "https://www.livingstonevehicles.com",
        },

        {
            title: "Future technologies summit",
            image: FTSImg,
            tech: "HTML • CSS • JavaScript • Wix",
            desc: "Developed and maintained a futuretechnologiessummit website with responsive design and customer enquiry features.",
            live: "https://www.futuretechnologiessummit.com/",
        },




    ];

    return (

        <>

            <Navbar />

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
                        {projects.map((item, index) => (
                            <div
                                className="col-lg-6 mb-4"
                                key={index}
                            >
                                <div className="project-box">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="project-image"
                                    />

                                    <div className="project-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <h2>{item.title}</h2>

                                    <h5>{item.tech}</h5>

                                    <p>{item.desc}</p>

                                    <a
                                        href={item.live}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Visit Project
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

export default Projects;
