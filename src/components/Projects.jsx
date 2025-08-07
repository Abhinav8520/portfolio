import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "AI Study Tutor Agent",
      tech: "Python, FastAPI, React, OpenAI, FAISS",
      date: "July 2025",
      description: `
      - Developed an AI tutor with FastAPI backend and React frontend for document-based Q&A and quiz generation across 3 file formats.
      - Spearheaded RAG using Sentence Transformers and FAISS, enabling sub-second semantic search over embedded text chunks.
      - Integrated GPT-3.5-turbo for contextual answers and auto-generated 50+ MCQs with adaptive feedback.
      - Tracked progress via Firebase Firestore to identify weak topics, boosting concept revision by 2x.
      - Deployed full-stack app on Render.com with scalable FastAPI and React services for real-time, cross-platform access.
      `,
      link: "https://github.com/Abhinav8520/AI-Tutor-Agent"
    },
    {
      title: "Research Paper Summarization and Query Answering System",
      tech: "Python, T5-small, FAISS, GPT-3.5, spaCy",
      date: "February 2025",
      description: `
      - Fine-tuned T5-small on 75k documents for abstracted summarization using step size 3e-4, batch size 4, for 3 epochs.
      - Achieved ROUGE-1: 16.68 and ROUGE-2: 5.84, indicating strong summary generation.
      - Designed RAG using FAISS and Sentence-Transformer embeddings for fast, context-aware summary retrieval.
      - Enhanced summary quality and contextual relevance by integrating retriever-generated context with OpenAI GPT-3.5.
      - Launched an interactive QA system with spaCy-powered pre-processing and a lightweight Streamlit interface.
      `,
      link: "https://github.com/Abhinav8520/Reseach-paper-project"
    },
    {
      title: "Food Delivery Web Application",
      tech: "React, HTML, CSS, Node.js, Express, MongoDB",
      date: "October 2024",
      description: `
      - Designed a responsive UI in React, HTML, and CSS with menu filtering, checkout flow, and an engaging homepage.
      - Developed backend services using Node.js, Express, and MongoDB Atlas with scalable RESTful APIs.
      - Implemented secure JWT-based authentication and role-based authorization for protected user operations.
      - Deployed the frontend on Vercel and backend on Railway for seamless, cloud-based accessibility.
      - Integrated an AI chatbot using GPT-3.5 Turbo to deliver personalized food suggestions and real-time support.
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
      - Processed 73,000 protein interaction pairs for bias-free model training.
      - Engineered key features using Biopython, including sequence length & molecular weight.
      - Evaluated SVM, Random Forest, and XGBoost, achieving 97.77% accuracy with XGBoost.
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
