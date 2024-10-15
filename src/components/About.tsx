import React from 'react';
import './About.css';
import image  from './Assets/man.png';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I'm <strong>Dipesh Chaudhary</strong>, currently pursuing my B.Tech in Computer Science and Engineering. 
                        I'm passionate about web development, coding, and creating user-friendly digital experiences. 
                        My expertise lies in frontend development, particularly in <strong>React</strong> and <strong>TypeScript</strong>, 
                        and I'm always eager to learn new technologies that push the boundaries of innovation.
                    </p>
                    <p>
                        Aside from academics, I love working on personal projects, solving real-world problems through tech, 
                        and contributing to open-source projects. I am dedicated to honing my skills as a full-stack developer 
                        and am excited to collaborate with teams on meaningful projects.
                    </p>
                    <a href="/Assets/cv.docx" className="about-btn">Download CV</a>
                </div>
                <div className="about-image">
                    {/* Actual Image */}
                    <img src={image} alt="Man" />
                </div>
            </div>
        </section>
    );
};

export default About;
