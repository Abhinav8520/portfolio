import React from "react";
import "../styles/Experience.css";
import hackettLogo from "../assets/hackett-logo.png"; 

const Experience = () => {
  const internships = [
    {
      company: "The Hackett Group",
      role: "Intern",
      location: "Hyderabad, India",
      duration: "March 2023 - June 2023",
      logo: hackettLogo,
      description: `
      • Built end-to-end ML solutions incl. Sentiment Analysis on 500+ reviews and Market Mix Modeling with 10+ sales drivers.
      • Cleaned and processed complex business datasets using advanced feature engineering to improve model performance.
      • Implemented diverse NLP techniques to boost accuracy and interpretability in customer review analysis.
      • Installed end-to-end ML backend on AWS EC2 as RESTful APIs to enable scalable, production-grade access.
      • Analyzed cross-sectional employee data to uncover key stress-related factors impacting workplace dynamics.
      `,
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {internships.map((internship, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <img
                src={internship.logo}
                alt={`${internship.company} logo`}
                className="company-logo"
              />
              <div>
                <h3 className="company-name">{internship.company}</h3>
                <p className="role">{internship.role}</p>
                <p className="duration-location">
                  {internship.duration} • {internship.location}
                </p>
              </div>
            </div>
            <p className="description">{internship.description.trim()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
