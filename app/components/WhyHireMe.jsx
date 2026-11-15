'use client';

import React, { useState } from 'react';
import { 
  Rocket, Zap, Brain, MessageSquare, GitBranch, Mic, Shield, 
  Clock, Trophy, ChevronDown, ChevronUp, Briefcase, Code2,
  Eye, Cpu, Globe, Lock, Sparkles, Target, Layers, FolderGit2,
  Bot, Camera, Drum, Github, Map, Users, X, Keyboard, BookOpen,
  Smile, Monitor, Home, Gamepad2
} from 'lucide-react';

const WhyHireMe = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (item) => {
    setSelectedCard(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'auto';
  };

  const stats = [
    { value: "40+", label: "Projects Built", sublabel: "" },
    { value: "7", label: "Products", sublabel: "in 7 Days" },
    { value: "3", label: "1st Place Wins", sublabel: "Hackathons" },
    { value: "4.0", label: "GPA", sublabel: "MS @ ASU" }
  ];

  const hackathons = [
    {
      name: "SunHacks 2024",
      role: "1st Place Winner",
      emoji: "🏆",
      project: "Clickless AI",
      desc: "Built an Agentic AI system that autonomously searches and applies for jobs using multi-agent orchestration.",
      tech: ["Agentic AI", "Multi-Agent", "Web Automation"]
    },
    {
      name: "Smart India Hackathon",
      role: "1st Place (Intra-college)",
      emoji: "🥇",
      project: "AI Solution",
      desc: "Developed an innovative AI solution at the national-level competition.",
      tech: ["AI/ML", "Python", "Computer Vision"]
    },
    {
      name: "IDEATHON National",
      role: "1st Place",
      emoji: "🥇",
      project: "Tech Innovation",
      desc: "Won first place at the national-level ideation competition in 2021.",
      tech: ["Innovation", "Product Design"]
    },
    {
      name: "DevHouse SF 2025",
      role: "7 Products in 7 Days",
      emoji: "🚀",
      project: "Multiple AI Bots",
      desc: "Intensive sprint in San Francisco. Built WhatsApp Trip Planner, Slack Auto-Fixer, Job Onboarding AI, and Personal Jarvis.",
      tech: ["WhatsApp", "Slack", "OMI Voice", "Claude API"]
    }
  ];

  // DevHouse SF Projects
  const devhouseProjects = [
    {
      name: "WhatsApp Trip Planner",
      tagline: "Context-Aware Group Travel Bot",
      icon: Map,
      desc: "A travel planning bot that lives in your WhatsApp group. Runs locally, no business API needed. No @mentions required — monitors context and speaks when relevant.",
      tech: ["WhatsApp Automation", "Local Hosting", "Context AI"],
      devhouse: true
    },
    {
      name: "Slack Auto-Fixer",
      tagline: "Autonomous Bug Resolution",
      icon: GitBranch,
      desc: "When someone assigns you a bug in Slack, it reads the issue, finds code, creates a fix, and opens a PR. No tagging required.",
      tech: ["Slack Bot", "Claude API", "GitHub API"],
      devhouse: true
    },
    {
      name: "Job Onboarding AI",
      tagline: "Clearance-Based Knowledge System",
      icon: Users,
      desc: "Enterprise knowledge chatbot with access control. Uses Supermemory — can reference conversations from years ago.",
      tech: ["Supermemory", "RAG", "Access Control"],
      devhouse: true
    },
    {
      name: "Personal Jarvis",
      tagline: "Voice-to-Code Pipeline",
      icon: Mic,
      desc: "Voice-activated AI using OMI device. Tell Jarvis your idea while walking, get a GitHub repo with MVP when you're home.",
      tech: ["OMI Voice AI", "Claude", "GitHub API"],
      devhouse: true
    }
  ];

  // Main projects from GitHub
  const projects = [
    // Featured
    {
      name: "Composer",
      tagline: "Privacy-First Browser AI",
      icon: Zap,
      desc: "Browser extension that drafts messages in any text field. Proprietary container extraction only reads what you're typing — never the full page.",
      tech: ["Chrome Extension", "Flask", "MongoDB", "GCP"],
      github: "https://github.com/Kvndoshi/composer",
      featured: true
    },
    {
      name: "Clickless AI",
      tagline: "Autonomous Job Application Agent",
      icon: Bot,
      desc: "Agentic AI that autonomously searches, filters, and applies for jobs. Won 1st place at SunHacks 2024.",
      tech: ["Agentic AI", "Multi-Agent", "Web Automation"],
      github: "https://github.com/Kvndoshi/clickless-ai",
      featured: true
    },
    // DevHouse projects
    ...devhouseProjects,
    // From GitHub profile
    {
      name: "AutoML Platform",
      tagline: "No-Code Model Training",
      icon: Cpu,
      desc: "Streamlit app to upload data, transform, and auto-train ML models, surfacing the best one with PyCaret.",
      tech: ["Streamlit", "PyCaret", "scikit-learn"],
      github: "https://github.com/Kvndoshi/AutoML-model-builder"
    },
    {
      name: "Air Drums",
      tagline: "Camera-Based Virtual Drumming",
      icon: Drum,
      desc: "Virtual drumming using motion cues and camera. Deep learning for motion error correction.",
      tech: ["Computer Vision", "Deep Learning", "OpenCV"],
      github: "https://github.com/Kvndoshi/air-drums"
    },
    {
      name: "Lip Reading",
      tagline: "Speech from Visual Cues",
      icon: Eye,
      desc: "Model to infer spoken words from lip movements using deep learning.",
      tech: ["Deep Learning", "Computer Vision", "TensorFlow"],
      github: "https://github.com/Kvndoshi/lip-reading"
    },
    {
      name: "Facial Emotion Detection",
      tagline: "Real-time Emotion Recognition",
      icon: Smile,
      desc: "Detects facial emotions in real-time using TensorFlow and OpenCV.",
      tech: ["TensorFlow", "OpenCV", "CNN"],
      github: "https://github.com/Kvndoshi/Facial-emotion-Detection"
    },
    {
      name: "Semantic Segmentation",
      tagline: "Pixel-wise Classification",
      icon: Layers,
      desc: "Deep learning pipelines for pixel-wise image classification and segmentation.",
      tech: ["PyTorch", "U-Net", "Computer Vision"],
      github: "https://github.com/Kvndoshi/semantic-segmentation"
    },
    {
      name: "Virtual Keyboard",
      tagline: "Camera-Based Typing",
      icon: Keyboard,
      desc: "OpenCV-based typing interface using a camera for touchless input.",
      tech: ["OpenCV", "Computer Vision", "Python"],
      github: "https://github.com/Kvndoshi/Virtual-Keyboard"
    },
    {
      name: "Image Captioning",
      tagline: "Auto-Generate Descriptions",
      icon: BookOpen,
      desc: "Model that generates captions for images end-to-end using encoder-decoder architecture.",
      tech: ["Deep Learning", "NLP", "CNN+LSTM"],
      github: "https://github.com/Kvndoshi/Image-Captioning"
    },
    {
      name: "Gesture Recognition",
      tagline: "Hand/Body Gesture Detection",
      icon: Monitor,
      desc: "Recognizes hand and body gestures from video for interactive applications.",
      tech: ["Computer Vision", "MediaPipe", "Python"],
      github: "https://github.com/Kvndoshi/Gesture-Recognition"
    },
    {
      name: "ESP-CAM Person Detection",
      tagline: "TinyML on Edge",
      icon: Camera,
      desc: "TinyML person detection on ESP32-CAM for embedded security applications.",
      tech: ["TinyML", "ESP32", "Arduino"],
      github: "https://github.com/Kvndoshi/ESP-cam-person-detection"
    },
    {
      name: "Home Automation",
      tagline: "IoT Smart Home",
      icon: Home,
      desc: "IoT system using ESP to control home devices remotely.",
      tech: ["ESP8266", "IoT", "Arduino"],
      github: "https://github.com/Kvndoshi/Home-Automation"
    },
    {
      name: "chatfolio",
      tagline: "1-Line AI Chat Integration",
      icon: MessageSquare,
      desc: "NPM package that lets any company add an AI chatbot to their site in 1 line of code. Upload docs/notes and users can chat with your knowledge base instantly. Enterprise-ready document Q&A.",
      tech: ["React", "OpenAI", "NPM Package", "RAG"],
      github: "https://github.com/Kvndoshi/chatfolio",
      featured: true
    }
  ];

  const journeyTimeline = [
    {
      id: "hackathons",
      phase: "Competition Track",
      title: "Hackathons",
      subtitle: "3x 1st Place",
      icon: Trophy,
      color: "#FFD700",
      type: "hackathons",
      items: hackathons,
      preview: ["🏆 SunHacks 1st", "🥇 IDEATHON", "🚀 DevHouse SF"]
    },
    {
      id: "projects",
      phase: "Building",
      title: "Projects",
      subtitle: "40+ Built",
      icon: FolderGit2,
      color: "#4ADE80",
      type: "projects",
      items: projects,
      preview: ["Composer", "Clickless AI", "chatfolio", "AutoML"]
    },
    {
      id: "asu",
      phase: "Current",
      title: "ASU",
      subtitle: "CV Engineer",
      icon: Globe,
      color: "#3B82F6",
      type: "experience",
      description: "Developing automated pipelines for 3D reconstruction of lunar surfaces, Antarctic terrain, and coral reefs. Processing terabyte-scale data for VR systems.",
      highlights: ["Photogrammetry", "VR Integration", "Terabyte-scale"]
    },
    {
      id: "isro",
      phase: "Foundation",
      title: "ISRO",
      subtitle: "AI Research",
      icon: Target,
      color: "#F59E0B",
      type: "experience",
      description: "Built semantic segmentation models (U-Net, EfficientNet, SegFormer) for satellite imagery. Developed a weather-focused LLM using LangChain.",
      highlights: ["Semantic Segmentation", "Weather LLM", "Change Detection"]
    }
  ];

  return (
    <div className="content-section why-hire-section">
      <h3 className="section-heading">Why You Should Hire Me</h3>
      
      {/* Stats Strip */}
      <div className="stats-strip">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-sublabel">{stat.sublabel}</span>
          </div>
        ))}
      </div>

      {/* Core Philosophy */}
      <div className="philosophy-card">
        <h4 className="philosophy-title">My Engineering Philosophy</h4>
        <p className="philosophy-text">
          I build AI that <strong>disappears into the workflow</strong>. No @mentions, no copy-pasting to ChatGPT, no manual triggers. 
          My bots monitor context and act when relevant. Every project prioritizes <strong>privacy</strong>, <strong>zero-config UX</strong>, and <strong>production-readiness</strong>.
        </p>
      </div>

      {/* Centered Timeline */}
      <div className="centered-timeline-section">
        <h4 className="journey-title">
          <Clock size={20} className="journey-icon" />
          My Builder Journey
        </h4>
        
        <div className="centered-timeline">
          {/* Connecting SVG Lines */}
          <svg className="timeline-connections" viewBox="0 0 800 600" preserveAspectRatio="none">
            {/* Horizontal line top */}
            <path d="M 200 140 Q 400 100, 600 140" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8,4" />
            {/* Vertical line left */}
            <path d="M 200 140 Q 170 300, 200 460" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8,4" />
            {/* Vertical line right */}
            <path d="M 600 140 Q 630 300, 600 460" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8,4" />
            {/* Horizontal line bottom */}
            <path d="M 200 460 Q 400 500, 600 460" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="8,4" />
            {/* Center decoration */}
            <circle cx="400" cy="300" r="10" fill="var(--accent)" opacity="0.3" />
            <circle cx="400" cy="300" r="5" fill="var(--accent)" />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {journeyTimeline.map((item) => {
            const Icon = item.icon;
            
            return (
              <div key={item.id} className="timeline-row">
                {/* Square Card */}
                <div 
                  className="square-card"
                  onClick={() => openModal(item)}
                  style={{ '--card-color': item.color }}
                >
                  <div className="square-card-header">
                    <span className="square-card-phase">{item.phase}</span>
                    <Icon size={32} className="square-card-icon" />
                  </div>
                  <h5 className="square-card-title">{item.title}</h5>
                  <p className="square-card-subtitle">{item.subtitle}</p>
                  
                  {/* Preview hints */}
                  <div className="square-card-preview">
                    {item.preview?.map((hint, i) => (
                      <span key={i} className="preview-hint">{hint}</span>
                    ))}
                    {item.highlights?.map((hint, i) => (
                      <span key={i} className="preview-hint">{hint}</span>
                    ))}
                  </div>
                  
                  <div className="square-card-expand">
                    <span className="expand-text">Click to explore</span>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal - Rendered OUTSIDE the grid */}
      {selectedCard && (
        <div className="expanded-modal-overlay" onClick={(e) => { if(e.target === e.currentTarget) closeModal(); }}>
          <div className="expanded-modal" style={{ '--card-color': selectedCard.color }}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              {React.createElement(selectedCard.icon, { size: 36, style: { color: selectedCard.color } })}
              <div>
                <span className="modal-phase" style={{ color: selectedCard.color }}>{selectedCard.phase}</span>
                <h4 className="modal-title">{selectedCard.title}</h4>
              </div>
            </div>

            {selectedCard.type === 'hackathons' && (
              <div className="modal-content-grid">
                {selectedCard.items.map((hack, hIdx) => (
                  <div key={hIdx} className="modal-item-card">
                    <div className="modal-item-header">
                      <span className="modal-item-emoji">{hack.emoji}</span>
                      <div>
                        <h6 className="modal-item-name">{hack.name}</h6>
                        <span className="modal-item-role">{hack.role}</span>
                      </div>
                    </div>
                    <p className="modal-item-project">Built: <strong>{hack.project}</strong></p>
                    <p className="modal-item-desc">{hack.desc}</p>
                    <div className="modal-item-tech">
                      {hack.tech.map((t, i) => (
                        <span key={i} className="tech-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedCard.type === 'projects' && (
              <div className="modal-content-grid projects">
                {selectedCard.items.map((proj, pIdx) => {
                  const ProjIcon = proj.icon;
                  return (
                    <div key={pIdx} className={`modal-item-card ${proj.featured ? 'featured' : ''} ${proj.devhouse ? 'devhouse' : ''}`}>
                      <div className="modal-item-header">
                        <ProjIcon size={20} style={{ color: proj.featured ? '#8B5CF6' : proj.devhouse ? '#4ADE80' : selectedCard.color }} />
                        <div>
                          <h6 className="modal-item-name">{proj.name}</h6>
                          <span className="modal-item-role">{proj.tagline}</span>
                        </div>
                        {proj.featured && <span className="badge featured">Featured</span>}
                        {proj.devhouse && <span className="badge devhouse">DevHouse</span>}
                      </div>
                      <p className="modal-item-desc">{proj.desc}</p>
                      <div className="modal-item-tech">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="tech-chip">{t}</span>
                        ))}
                      </div>
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="modal-github-link" onClick={(e) => e.stopPropagation()}>
                          <Github size={14} /> GitHub
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {selectedCard.type === 'experience' && (
              <div className="modal-experience">
                <p className="modal-description">{selectedCard.description}</p>
                <div className="modal-highlights">
                  {selectedCard.highlights.map((h, i) => (
                    <span key={i} className="highlight-chip" style={{ borderColor: selectedCard.color, color: selectedCard.color }}>{h}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Closing Statement */}
      <div className="closing-statement">
        <p>
          I thrive under pressure. Give me a problem and a deadline, and I'll deliver a working solution.
          These wins aren't about luck — they're about <strong>rapid architecture decisions</strong>,
          <strong> ruthless prioritization</strong>, and <strong>building over perfecting</strong>.
        </p>
      </div>
    </div>
  );
};

export default WhyHireMe;
