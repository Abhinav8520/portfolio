import React from "react";
import "../styles/Home.css";
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
            I am a graduate student pursuing a <span className="highlight_1">Master’s in Computer and Information Science and Engineering</span> at the <span className="highlight_1">University of Florida</span>, with a solid foundation in <span className="highlight_1">Electronics and Communication Engineering.</span>
          </p>
          <p>
            My expertise spans <span className="highlight_1">full-stack development</span>, <span className="highlight_1">AI-powered systems</span>, and <span className="highlight_1">advanced algorithms</span>. Notable projects include a <span className="highlight_1">food delivery app with AI chatbot integration</span> and a <span className="highlight_1">personalized news categorization system</span> utilizing NLP models.
          </p>
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
