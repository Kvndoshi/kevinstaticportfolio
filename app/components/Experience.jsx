'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Computer Vision Engineer",
      company: "Digital Discovery Initiative, Arizona State University",
      date: "Feb 2025 — Present",
      points: [
        "Developing automated pipelines using photogrammetry and computer vision to generate high-resolution 3D models of lunar surfaces, Antarctic terrain, and coral reefs from aerial and terrestrial data",
        "Processing and integrating terabyte-scale 3D reconstructions into VR systems for scientific visualization and analysis"
      ]
    },
    {
      role: "AI Research Intern",
      company: "Indian Space Research Organisation (ISRO)",
      date: "Jan 2024 — Aug 2024",
      points: [
        "Implemented semantic segmentation using PyTorch with U-Net, EfficientNet, and SegFormer architectures for satellite imagery analysis",
        "Trained on datasets like OpenEarthMap and LoveDA, predicting on Cartosat data and conducting time-series change detection for building footprints and tree mapping",
        "Built a weather-focused LLM by integrating ISRO resources, datasets, and APIs using LangChain with prompt engineering and fine-tuning",
        "Designed an end-to-end satellite imagery processing pipeline for image correction, batch processing, and output evaluation using GDAL, QGIS, and Python"
      ]
    },
    {
      role: "AI Solutions Developer",
      company: "Dhrumin Gas Service",
      date: "May 2023 — Jan 2024",
      points: [
        "Built OCR automation tools for converting handwritten Gujarati text to digital format using computer vision, achieving 4x efficiency improvement",
        "Developed a responsive Flask + Bootstrap UI that streamlined data entry workflows",
        "Integrated Dijkstra's algorithm for delivery route optimization with an interactive dashboard for visualizing routes and metrics"
      ]
    },
    {
      role: "Embedded AI Systems Intern",
      company: "DYU Labs",
      date: "Mar 2023 — Apr 2023",
      points: [
        "Designed an ESP32-CAM-based AI system for real-time person detection in security applications using Arduino and TinyML",
        "Optimized performance with low-power algorithms, increasing detection reliability while meeting embedded AI constraints"
      ]
    }
  ];

  return (
    <div className="content-section">
      <h3 className="section-heading">Experience</h3>
      <div className="exp-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="exp-timeline-item">
            <div className="exp-timeline-dot"></div>
            <div className="exp-timeline-content">
              <div className="exp-timeline-header">
                <h4 className="exp-timeline-role">{exp.role}</h4>
                <span className="exp-timeline-date">{exp.date}</span>
              </div>
              <div className="exp-timeline-company">{exp.company}</div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i} className="experience-point">
                    <ChevronRight size={16} className="point-arrow" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
