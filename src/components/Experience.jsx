import React from "react";
import "../styles/Experience.css";
import hackettLogo from "../assets/hackett-logo.png"; 

const Experience = () => {
  const internships = [
    {
      company: "The Hackett Group",
      role: "Project Trainee",
      location: "Hyderabad, India",
      duration: "March 2023 - April 2023",
      logo: hackettLogo,
      description: `
      • Cultivated practical Machine Learning expertise through projects such as Sentiment Analysis to interpret customer sentiments and Market Mix Modeling to understand sales drivers, enhancing analytical problem-solving capabilities.
      • Completed a project on identifying employee stress triggers, utilizing data analytic tools to highlight potential stress factors, and laying the groundwork for ongoing research on workplace wellness.
      `,
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Internship</h2>
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
