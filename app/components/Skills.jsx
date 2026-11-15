'use client';

import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Dev",
      skills: ["Python", "Java", "C/C++", "JavaScript", "SQL", "Bash", "HTML/CSS"]
    },
    {
      title: "AI/ML & Data",
      skills: ["PyTorch", "TensorFlow", "Keras", "LangChain", "OpenAI", "HuggingFace", "RAG", "Agentic AI", "Computer Vision", "NLP", "Deep Learning", "Reinforcement Learning"]
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "GCP Cloud Run", "Docker", "Git", "GDAL", "QGIS", "Unity", "Jupyter", "VS Code", "MongoDB"]
    },
    {
      title: "Frameworks",
      skills: ["Flask", "Streamlit", "Next.js", "React", "PyCaret", "scikit-learn", "Pandas", "NumPy", "OpenCV"]
    },
    {
      title: "IoT & Embedded",
      skills: ["Arduino", "ESP32", "ESP8266", "TinyML", "IMU Sensors", "OMI Voice"]
    },
    {
      title: "3D & Photogrammetry",
      skills: ["Reality Capture", "Agisoft Metashape", "NeRF", "Photogrammetry", "VR Integration"]
    }
  ];

  const coreCompetencies = [
    {
      title: "Context Engineering",
      desc: "Designing AI systems that understand when to act based on situational context — not explicit triggers"
    },
    {
      title: "Critical Thinking",
      desc: "Breaking down ambiguous problems into actionable technical solutions under time constraints"
    },
    {
      title: "Rapid Prototyping",
      desc: "Shipping MVPs in 12-24 hours. Proven in hackathons and DevHouse SF (7 products in 7 days)"
    },
    {
      title: "Privacy-First Architecture",
      desc: "Building systems that minimize data exposure by design — not as an afterthought"
    },
    {
      title: "System Integration",
      desc: "Connecting disparate APIs, services, and platforms into cohesive automated workflows"
    },
    {
      title: "Production Mindset",
      desc: "Writing code that's deployable, maintainable, and ready for real users from day one"
    }
  ];

  return (
    <div className="content-section">
      <h3 className="section-heading">Skills & Technologies</h3>
      
      {/* Core Competencies - Soft Skills */}
      <div className="competencies-section">
        <h4 className="competencies-title">Core Competencies</h4>
        <div className="competencies-grid">
          {coreCompetencies.map((comp, idx) => (
            <div key={idx} className="competency-card">
              <h5 className="competency-name">{comp.title}</h5>
              <p className="competency-desc">{comp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="technical-skills-section">
        <h4 className="technical-skills-title">Technical Stack</h4>
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h4 className="skill-category-title">{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
