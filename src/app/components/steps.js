'use client';

import React from 'react';
import { FaCog, FaLightbulb, FaFileAlt, FaSearch, FaTrophy, FaDesktop } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Customer Onboarding',
    description: 'Getting Job application information from you',
    icon: <FaCog />,
    className: 'red',
  },
  {
    id: 2,
    title: 'System & Platform Set-Up',
    description: 'Creating a JM Email and Accounts in all job boards',
    icon: <FaLightbulb />,
    className: 'pink',
  },
  {
    id: 3,
    title: 'Job Apply',
    description: 'Our Job Hunt Specialist will apply for your desired jobs daily',
    icon: <FaFileAlt />,
    className: 'purple',
  },
  {
    id: 4,
    title: 'Weekly Status Report',
    description: 'You will receive a report listing all job applications made that week',
    icon: <FaSearch />,
    className: 'blue',
  },
  {
    id: 5,
    title: 'Interview',
    description: 'You can sit back, relax and just focus on your interviews',
    icon: <FaTrophy />,
    className: 'teal',
  },
  {
    id: 6,
    title: 'Dream Job',
    description: 'We will help you land in your Dream Job',
    icon: <FaDesktop />,
    className: 'orange',
  },
];

export default function JobHuntSteps() {
  return (
    <section className="job-hunt-container">
      {/* <h2 className="job-hunt-title">Job Hunt Made Easy</h2> */}
      <div className="job-hunt-grid">
        {steps.map((step) => (
          <div key={step.id} className={`job-hunt-card ${step.className}`}>
            <div className="icon-wrapper">
              {step.icon}
            </div>
            <div className="card-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
