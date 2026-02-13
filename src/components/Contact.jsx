import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
                        <p className="contact-subtitle">
                            Have a project in mind or want to collaborate? Reach out and let's create something amazing together.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email Me</h4>
                                    <p>shameerdrafts@email.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Instagram size={24} /></div>
                                <div>
                                    <h4>Instagram</h4>
                                    <p>@shameerdrafts</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={24} /></div>
                                <div>
                                    <h4>Region</h4>
                                    <p>Nagapattinam & Karaikal, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-form-container glass"
                    >
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Tell me about your project" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary form-btn">
                                Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Shameer Drafts. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
