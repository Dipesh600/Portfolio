import React, { useState } from 'react';
import './Projects.css';

import sms from './Assets/SchoolManagment.png';
import MH from './Assets/Money hold.jpeg';
import store from './Assets/Store-Management-System.png';

interface Project {
    title: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    { 
        title: "School Management System", 
        description: "This project aims to create a digital platform for schools and coaching institutes at a local level using the SAAS (Software as a Service) model. It includes features for managing student data, attendance, fee tracking, and report generation, providing a seamless experience for administrators and students alike.", 
        image: sms 
    },
    { 
        title: "Money Hold", 
        description: "Money Hold is a budgeting and expense management tool that helps individuals and businesses keep track of their financial transactions. This project focuses on intuitive UI/UX design, allowing users to easily add expenses, set budgets, and generate reports for better financial decision-making.", 
        image: MH 
    },
    { 
        title: "Store Management System", 
        description: "This system is designed to manage small retail stores' operations, including inventory tracking, billing, sales reporting, and customer management. It provides real-time updates on stock levels and automates much of the manual work associated with store management.", 
        image: store 
    },
    { 
        title: "Project Four", 
        description: "This is a sample project that showcases the use of modern front-end frameworks like React and TypeScript. It focuses on responsive design, component-based architecture, and state management techniques to build dynamic, fast-loading web applications.", 
        image: "https://via.placeholder.com/200" 
    },
];

const Projects: React.FC = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        if (expandedProject === index) {
            setExpandedProject(null); // Collapse if already expanded
        } else {
            setExpandedProject(index); // Expand the clicked project
        }
    };

    const renderDescription = (description: string, index: number) => {
        const isExpanded = expandedProject === index;
        const maxLength = 100; // Set max length for truncation

        if (description.length > maxLength && !isExpanded) {
            return (
                <>
                    {description.slice(0, maxLength)}...{" "}
                    <span className="read-more" onClick={() => toggleDescription(index)}>Read more</span>
                </>
            );
        }

        return (
            <>
                {description}{" "}
                {description.length > maxLength && (
                    <span className="read-more" onClick={() => toggleDescription(index)}>Read less</span>
                )}
            </>
        );
    };

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{renderDescription(project.description, index)}</p>
                        </div>
                    ))}
                    {/* Duplicate the list for infinite scrolling effect */}
                    {projects.map((project, index) => (
                        <div key={index + projects.length} className="project-item">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{renderDescription(project.description, index)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
