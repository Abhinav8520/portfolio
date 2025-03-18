import React from "react";
import "../styles/Home.css";
import { FiExternalLink } from "react-icons/fi"; // Import an external link icon
import profileImage from "../assets/profile.jpeg"; 

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Text Section */}
        <div className="home-text">
        <h1>
            Hi, I'm <span className="highlight">Abhinav Kapavarapu</span>
          </h1>
          <p>
            I am a passionate <span className="highlight_1">AI/ML Engineer</span> and <span className="highlight_1">Full-Stack Developer</span>, currently pursuing a <span className="highlight_1">Master’s in Computer and Information Science and Engineering</span> at the <span className="highlight_1">University of Florida</span>. My background in <span className="highlight_1">Electronics and Communication Engineering</span> provides a strong foundation for computational problem-solving.
          </p>
          <p>
            My expertise lies in building <span className="highlight_1">AI-driven applications</span>, developing <span className="highlight_1">scalable machine learning models</span>, and crafting <span className="highlight_1">intelligent systems</span> that integrate seamlessly into real-world applications. Notable projects include an <span className="highlight_1">AI-powered food delivery app with chatbot integration</span> and a <span className="highlight_1">personalized news categorization system</span> leveraging NLP and deep learning.
          </p>
          <div className="home-buttons">
            <a
              href="/Abhinav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <FiExternalLink style={{ marginRight: "0.5rem" }} /> {/* Icon */}
              View Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="home-image">
          <img src={profileImage} alt="Abhinav Kapavarapu" />
        </div>
      </div>
    </section>
  );
};

export default Home;
