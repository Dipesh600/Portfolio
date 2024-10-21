import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Show popup message
        setIsPopupVisible(true);

        // Reset form fields
        setFormData({ name: '', email: '', message: '' });

        // Optionally close the popup after a few seconds
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 3000); // Closes the popup after 3 seconds
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Write Something"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
                <button type="submit">Send Message</button>
            </form>

            {/* Popup Message */}
            {isPopupVisible && (
                <div className="popup">
                    <p>Your message has been queued/sent.</p>
                    <button onClick={() => setIsPopupVisible(false)}>Close</button>
                </div>
            )}
        </section>
    );
};

export default Contact;
