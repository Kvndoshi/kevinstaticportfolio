import React from 'react';
import Image from 'next/image';

const Hackathons = () => {
  const hackathons = [
    {
      name: 'SunHacks 2024',
      role: '🏆 1st Place Winner',
      year: '2024',
      desc: 'Built Clickless AI—an Agentic AI system that autonomously searches and applies for jobs using multi-agent orchestration. Impressed judges with intelligent task planning and autonomous web interactions.',
      image: '/hackathon-sunhacks.jpg',
    },
    {
      name: 'Smart India Hackathon',
      role: '🥇 1st Place (Intra-college)',
      year: '2023',
      desc: 'Developed an innovative AI solution at the national-level competition, showcasing practical problem-solving skills and technical expertise.',
      image: '/hackathon-sih.jpg',
    },
    {
      name: 'IDEATHON (National Level)',
      role: '🥇 1st Place',
      year: '2021',
      desc: 'Won first place at the national-level ideation competition, presenting a creative technology solution that stood out among competitors.',
      image: '/hackathon-ideathon.jpg',
    },
  ];

  const participations = [
    'DevHouse SF 2025 (7 Products in 7 Days)',
    'CVMU Hackathon 2024',
    'L\'Oréal Sustainability Challenge 2023',
    'Accenture Innovation Challenge 2023',
    'E-Yantra (IIT Bombay) 2022',
    'RASVERS Ideafind+ (VIT Vellore) 2022',
  ];

  return (
    <div className="content-section">
      <h3 className="section-heading">Hackathons & Competitions</h3>
      <div className="hack-grid">
        {hackathons.map((hack, idx) => (
          <div key={idx} className="hack-card">
            {hack.image && (
              <div className="hack-image-wrapper">
                <Image
                  src={hack.image}
                  alt={hack.name}
                  width={400}
                  height={200}
                  className="hack-image"
                />
              </div>
            )}
            <div className="hack-header">
              <div>
                <h4 className="hack-name">{hack.name}</h4>
                <p className="hack-role">{hack.role}</p>
              </div>
              <span className="hack-year">{hack.year}</span>
            </div>
            <p className="hack-desc">{hack.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="participations-section">
        <h4 className="participations-title">Also Participated In</h4>
        <div className="participations-list">
          {participations.map((event, idx) => (
            <span key={idx} className="participation-tag">{event}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
