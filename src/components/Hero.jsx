import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="hero-badge"
                    >
                        Karaikal & Nagapattinam
                    </motion.span>
                    <h1 className="hero-title">
                        Digital Stories <br />
                        <span className="text-gradient">By Shameer</span>
                    </h1>
                    <p className="hero-description">
                        Brand Influencer, Content Creator & Food Vlogger crafting high-impact visual narratives
                        that resonate with audiences and elevate brand identities.
                    </p>

                    <div className="hero-btns">
                        <a href="#work" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-secondary">Let's Collaborate</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hero-image-container"
                >
                    <div className="hero-image-glow"></div>
                    <div className="hero-image-wrapper">
                        <img src={logo} alt="Shameer Drafts Logo" className="hero-logo-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
