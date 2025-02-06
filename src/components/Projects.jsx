import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Web Application",
      tech: "React, HTML, CSS, Node.js, Express, MongoDB",
      date: "October 2024",
      description: `
      - Built a responsive frontend with React and CSS for an engaging user experience.
      - Developed secure APIs using Node.js and Express for seamless backend functionality.
      - Integrated an AI chatbot with OpenAI GPT-3.5 Turbo for personalized food recommendations.
      `,
      link: "https://github.com/Abhinav8520/Food-delivery",
    },
    {
      title: "Personalized News Categorization",
      tech: "Python, NLP, Large Language Models",
      date: "April 2024",
      description: `
      - Created a personalized news delivery system using Retrieval-Augmented Generation (RAG).
      - Fine-tuned Flan-T5-base for improved accuracy in content categorization.
      - Enhanced retrieval efficiency with BM25 algorithm for user-specific preferences.
      `,
      link: "https://github.com/Abhinav8520/Personalized-News-Categorization",
    },
    {
      title: "Remote Sensing Image Captioning",
      tech: "Python, TensorFlow, RESNET 152",
      date: "March 2024",
      description: `
      - Designed a deep learning system to generate descriptions for remote sensing images.
      - Combined RESNET 152 and LSTM for high-accuracy feature extraction and captioning.
      - Achieved BLEU-1 score of 0.7 and CIDEr score of 2.38 for model evaluation.
      `,
      link: "https://github.com/Abhinav8520/Remote-sensing",
    },
    {
      title: "Protein-Protein Interaction Classification",
      tech: "Python, Biopython, Scikit-Learn, XGBoost",
      date: "February 2024",
      description: `
      - Preprocessed a balanced dataset of 73,000 protein interaction pairs, ensuring bias-free model training through data cleaning, labeling, shuffling, and standard scaling.
      - Engineered a feature extraction pipeline using Biopython, computing 7 key features such as sequence length, molecular weight, amino acid composition, and secondary structure fractions.
      - Designed and evaluated three classification models (SVM, Random Forest, XGBoost), achieving 97.77% test accuracy with XGBoost, outperforming other models.
      - Analyzed feature importance using Random Forest and XGBoost, identifying coil fractions, sheet fractions, molecular weight, and sequence lengths as the most significant factors in PPI classification.
      `,
      link: "https://github.com/Abhinav8520/PPI-prediction", 
    },
    {
      title: "Twitter Clone Development",
      tech: "Python, Django, HTML, CSS, Bootstrap",
      date: "November 2023",
      description: `
      - Built a Twitter clone with user profiles, tweet management, and multimedia support.
      - Designed a responsive interface using Bootstrap for a seamless user experience.
      - Integrated an advanced search feature for efficient tweet retrieval.
      `,
      link: "https://github.com/Abhinav8520/Twitter-Clone",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech"><strong>Technologies:</strong> {project.tech}</p>
              <p className="project-date"><strong>Date:</strong> {project.date}</p>
              <p className="project-description">{project.description.trim()}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
