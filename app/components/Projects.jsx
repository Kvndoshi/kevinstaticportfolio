'use client';
import React, { useState } from 'react';
import { Github, X, AlertTriangle } from 'lucide-react';

const Projects = () => {
  const [errorModal, setErrorModal] = useState({ show: false, projectName: '' });

  const projects = [
    {
      title: "Clickless AI",
      desc: "Won 1st place at SunHacks! An Agentic AI–driven web automation system using multi-agent orchestration to autonomously search, filter, and apply for jobs while handling everyday web tasks.",
      tech: "Agentic AI · Multi-Agent · Web Automation",
      github: "https://github.com/Kvndoshi/clickless-ai"
    },
    {
      title: "Automated ML Platform",
      desc: "A Streamlit-based web app that simplifies ML model training. Features automated preprocessing, tokenization, vectorization, model comparison, and hyperparameter optimization using PyCaret.",
      tech: "Streamlit · PyCaret · ML",
      github: "https://github.com/Kvndoshi/AutoML-model-builder"
    },
    {
      title: "Air Drums",
      desc: "A virtual drum simulator using IMU sensors for real-time motion tracking. Powered by deep learning algorithms that correct motion errors for precise and responsive drum interactions.",
      tech: "Deep Learning · IoT · IMU Sensors",
      github: "https://github.com/Kvndoshi/air-drums"
    },
    {
      title: "Composer (Browser Extension)",
      desc: "Smart drafting assistant that works in any browser text field. Features proprietary container extraction for privacy, cross-platform memory (remembers LinkedIn convos when chatting elsewhere), BYOK support, and GCP deployment.",
      tech: "Chrome Extension · LangChain · Flask · MongoDB · GCP",
      github: "https://github.com/Kvndoshi/composer"
    },
    {
      title: "chatfolio",
      desc: "Add AI-powered chat to your portfolio in 1 line of code. No more scrolling through resumes - recruiters get instant, accurate answers about you!",
      tech: "React · OpenAI · NPM Package",
      github: "https://github.com/Kvndoshi/chatfolio"
    },
    {
      title: "Smart CCTV",
      desc: "Real-time surveillance with anomaly detection using YOLO and custom computer vision models. Detects unauthorized access and unusual behavior in live feeds.",
      tech: "YOLO · Computer Vision · Python",
      github: "https://github.com/Kvndoshi/smart-cctv"
    }
  ];

  const handleGithubClick = async (e, project) => {
    e.preventDefault();
    
    try {
      const repoPath = project.github.replace('https://github.com/', '');
      const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
        method: 'HEAD'
      });
      
      if (response.ok) {
        window.open(project.github, '_blank', 'noopener,noreferrer');
      } else if (response.status === 404) {
        setErrorModal({ show: true, projectName: project.title });
      } else {
        window.open(project.github, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      setErrorModal({ show: true, projectName: project.title });
    }
  };

  const closeModal = () => {
    setErrorModal({ show: false, projectName: '' });
  };

  return (
    <div className="content-section">
      <h3 className="section-heading">Selected Projects</h3>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <h4 className="project-title">{proj.title}</h4>
              <button 
                onClick={(e) => handleGithubClick(e, proj)} 
                className="github-link"
                title="View on GitHub"
              >
                <Github size={18} />
              </button>
            </div>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-footer">
              <span className="project-tech">{proj.tech}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Error Modal */}
      {errorModal.show && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
            <div className="modal-icon">
              <AlertTriangle size={48} />
            </div>
            <h3 className="modal-title">Repository Unavailable</h3>
            <p className="modal-text">
              The repository for <strong>{errorModal.projectName}</strong> might be private or temporarily unavailable. 
              Feel free to reach out if you'd like to learn more about this project!
            </p>
            <button className="modal-btn" onClick={closeModal}>
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
