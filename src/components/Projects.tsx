import React, { useState } from 'react';
import sms from './Assets/SchoolManagment.png';
import MH from './Assets/Money hold.jpeg';
import store from './Assets/Store-Management-System.png';
import './Projects.css'; // Import the CSS file

interface Project {
    title: string;
    description: string;
    image: string;
    blogLink: string; // Add blog link
}

const projects: Project[] = [
    { 
        title: "School Management System", 
        description: "This project aims to create a digital platform for schools and coaching institutes at a local level using the SAAS (Software as a Service) model. It includes features for managing student data, attendance, fee tracking, and report generation, providing a seamless experience for administrators and students alike.", 
        image: sms,
        blogLink: '/blog/school-management-system' // Example blog link
    },
    { 
        title: "Money Hold", 
        description: "Money Hold is a budgeting and expense management tool that helps individuals and businesses keep track of their financial transactions. This project focuses on intuitive UI/UX design, allowing users to easily add expenses, set budgets, and generate reports for better financial decision-making.", 
        image: MH,
        blogLink: '/blog/money-hold' // Example blog link
    },
    { 
        title: "Store Management System", 
        description: "This system is designed to manage small retail stores' operations, including inventory tracking, billing, sales reporting, and customer management. It provides real-time updates on stock levels and automates much of the manual work associated with store management.", 
        image: store,
        blogLink: '/blog/store-management-system' // Example blog link
    },
];

const ProjectSection: React.FC = () => {
    return (
        <section className="project-section">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <a href={project.blogLink} className="read-more">Read More</a>
                            <LikeButton />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const LikeButton: React.FC = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <button className="like-button" onClick={handleLike}>
            Like {likes}
        </button>
    );
};

export default ProjectSection;
