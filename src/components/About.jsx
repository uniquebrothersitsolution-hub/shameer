import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/about_portrait.png';
import './About.css';


const About = () => {
    const stats = [
        { label: 'Followers', value: '35K+' },
        { label: 'Collaborations', value: '99+' },
        { label: 'Region', value: 'Nagapattinam' },
        { label: 'Creative Style', value: 'Bold' }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-image"
                    >
                        <div className="about-image-card">
                            <img src={logo} alt="Shameer Drafts" className="about-photo" />
                            <div className="about-photo-overlay">
                                <span className="about-tag">CONTENT CREATOR</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-text"
                    >
                        <h2 className="section-title">Who is <span className="text-gradient">Shameer?</span></h2>
                        <p className="about-bio">
                            Hailing from the coastal regions of Karaikal and Nagapattinam, I am a
                            content creator and food vlogger dedicated to bringing unique perspectives to the digital space.
                            My journey started with a passion for creative editing and has evolved into
                            partnering with top brands to create impactful social media campaigns.
                        </p>
                        <p className="about-bio">
                            I specialize in high-energy Reels, cinematic lifestyle content, and
                            strategic brand storytelling. As a food vlogger, I love exploring regional cuisines
                            and sharing my culinary discoveries with my community.
                        </p>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <h3 className="stat-value">{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
