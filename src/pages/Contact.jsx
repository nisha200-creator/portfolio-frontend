import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData
      );

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {

      console.log(error);

      console.log(error.response);

      console.log(error.response?.data);

      alert(JSON.stringify(error.response?.data));

    }
  };

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="contact-heading">
            <span>GET IN TOUCH</span>

            <h1>Contact Me</h1>

            <p>
              Interested in working together?
              Let's discuss your project.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info">
                <div className="info-box">
                  <h3>Phone</h3>

                  <a href="tel:+917318818630">
                    +91 7318818630
                  </a>
                </div>

                <div className="info-box">
                  <h3>Email</h3>

                  <a href="mailto:nisha70016@gmail.com">
                    nisha70016@gmail.com
                  </a>
                </div>

                <div className="info-box">
                  <h3>Location</h3>

                  <p>New Delhi, India</p>
                </div>

                <div className="info-box">
                  <h3>LinkedIn</h3>

                  <a
                    href="https://linkedin.com/in/nisha-das-227751389"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Profile
                  </a>
                </div>

                <div className="info-box">
                  <h3>GitHub</h3>

                  <a
                    href="https://github.com/nisha200-creator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;