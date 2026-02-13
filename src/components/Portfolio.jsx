import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        { title: 'Culinary Review', category: 'Food Vlogging', type: 'reels' },
        { title: 'Brand Campaign', category: 'Influencing', type: 'brand' },

        { title: 'Travel Vlog', category: 'Content', type: 'vlog' },
        { title: 'Product Shoot', category: 'Photography', type: 'photo' },
        { title: 'Fashion Edit', category: 'Style', type: 'fashion' },
        { title: 'Regional Event', category: 'Event', type: 'event' }
    ];

    return (
        <section id="work" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Featured <span className="text-gradient">Work</span>
                    </motion.h2>
                    <p className="section-subtitle">A collection of my recent projects and collaborations across Karaikal & Nagapattinam.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="portfolio-card"
                        >
                            <div className="card-image-box">
                                <img src={logo} alt={project.title} className="card-mockup-img" />
                                <div className="card-overlay">
                                    <div className="card-icons">
                                        {project.type === 'reels' ? <Play size={24} /> : <ImageIcon size={24} />}
                                        <ExternalLink size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-info">
                                <span className="card-category">{project.category}</span>
                                <h3 className="card-title">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="portfolio-footer">
                    <a href="https://www.instagram.com/shameerdrafts/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Follow for More on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
