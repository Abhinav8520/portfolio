import React from "react";
import "../styles/Experience.css";
import hackettLogo from "../assets/hackett-logo.png"; 

const Experience = () => {
  const internships = [
    {
      company: "The Hackett Group",
      role: "Intern",
      location: "Hyderabad, India",
      duration: "March 2023 - April 2023",
      logo: hackettLogo,
      description: `
      • Gained practical Machine Learning expertise through projects such as Sentiment Analysis using around 500 customer reviews to interpret sentiments and Market Mix Modeling to analyze around 10 key sales drivers.
      • Completed a project analyzing around 100 employee records to identify stress triggers, utilizing data analytic tools to highlight potential stress factors, contributing to ongoing research on workplace wellness.
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
