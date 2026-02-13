import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Instagram, Users } from 'lucide-react';
import logo from '../assets/logo.png';
import './Services.css';


const Services = () => {
    const services = [
        {
            icon: <Video size={32} />,
            title: 'Video Creation',
            description: 'Cinematic reels and short-form video content designed to go viral and capture attention.'
        },
        {
            icon: <Video size={32} />,
            title: 'Food Vlogging',
            description: 'Engaging culinary reviews and food travel content highlighting the best flavors of our region.'
        },
        {
            icon: <Instagram size={32} />,
            title: 'Brand Influencing',
            description: 'Strategic partnerships to promote your brand to a loyal and engaged regional audience.'
        },
        {
            icon: <Camera size={32} />,
            title: 'Digital Photography',
            description: 'High-quality lifestyle and product photography that tells your brand story visually.'
        },
        {
            icon: <Users size={32} />,
            title: 'Social Media Strategy',
            description: 'Consulting on how to grow your presence and engage with the Nagapattinam & Karaikal community.'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        My <span className="text-gradient">Services</span>
                    </motion.h2>
                    <p className="section-subtitle">How I can help your brand stand out in the digital landscape.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card glass"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
