import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="profile-card">
      {/* Top Row: Photo and Name side by side */}
      <div className="profile-header">
        <div className="profile-img-wrapper">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile.jpg`}
            alt="Kevin Doshi"
            width={120}
            height={120}
            className="profile-img"
            priority
          />
          <div className="status-dot" title="Online"></div>
        </div>
        
        <div className="profile-identity">
          <h1 className="hero-name">Kevin Doshi</h1>
          <h2 className="hero-role">AI/ML Engineer</h2>
        </div>
      </div>

      {/* Update Note */}
      <div className="update-note">
        <div className="update-header">
          <Sparkles size={16} className="update-icon" />
          <span className="update-label">Update</span>
        </div>
        <p className="update-text">
          The context-aware bots I built at <strong>DevHouse SF in December</strong> (WhatsApp Trip Planner, Slack Auto-Fixer) 
          share the same core concept as <strong>MoldBot/ClawdBot</strong> — now viral and trending! 
          I built these autonomous, context-monitoring agents before I even knew similar projects existed. 
          Great minds think alike 🚀
        </p>
      </div>

      {/* Bottom Section: About Me + Bio + Socials */}
      <div className="profile-about">
        <h3 className="section-heading">About Me</h3>
        
        <p className="profile-bio">
          I build <strong>data-to-model pipelines</strong> and intuitive ML apps that solve real problems.
          <br /><br />
          <em>A one-page resume can't fit my projects — and it certainly can't fit my potential.</em>
          <br /><br />
          Currently pursuing <strong>M.S. in CS @ ASU</strong> (4.00 GPA), working on 
          3D reconstruction pipelines for scientific visualization. Also a <strong>SunHacks 1st Place Winner</strong> 🏆
        </p>

        <div className="hero-socials">
          <a href="https://github.com/Kvndoshi" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
            <Github size={20} />
          </a>
          <span className="separator">/</span>
          <a href="https://linkedin.com/in/kvndoshi" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <span className="separator">/</span>
          <a href="mailto:kevindoshi17@gmail.com" className="social-link" title="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
