'use client';

import { useRef } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const ref = useRef();

  const services = [
    {
      number: "01",
      title: "Responsive Design",
      description: "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly."
    },
    {
      number: "02", 
      title: "CMS Development",
      description: "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily."
    },
    {
      number: "03",
      title: "Website Redesign",
      description: "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations."
    },
    {
      number: "04",
      title: "AI Integration",
      description: "Integrating artificial intelligence and machine learning into applications for enhanced functionality and user experience."
    },
    {
      number: "05",
      title: "Database Design",
      description: "Database architecture, optimization, and management for SQL and NoSQL solutions to ensure data integrity and performance."
    }
  ];

  return (
    <section className="services-section" id="services-section" style={{ padding: '100px 0', background: '#000', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
          <div className="col-md-12" style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }}>
            <div className="section-header text-center" style={{ marginBottom: '60px' }}>
              <motion.h2 
                className="section-title" 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#fff' }}
              >
                My Quality Services
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#ccc', maxWidth: '600px', margin: '0 auto' }}
              >
                I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
          <div className="col-md-12" style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }}>
            <div className="services-widget position-relative" style={{ position: 'relative' }}>
              {services.map((service, index) => (
                <motion.div 
                  key={service.number}
                  className={`service-item d-flex flex-wrap align-items-center ${index === 0 ? 'current' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: index === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    border: index === 0 ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '30px',
                    marginBottom: '20px',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = index === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = index === 0 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="left-box d-flex flex-wrap align-items-center" style={{ flex: '0 0 auto', marginRight: '20px', alignItems: 'center', display: 'flex' }}>
                    <span className="number" style={{ fontSize: '2rem', fontWeight: '700', color: '#fff', marginRight: '15px', minWidth: '40px' }}>
                      {service.number}
                    </span>
                    <h3 className="service-title" style={{ fontSize: '1.3rem', fontWeight: '600', color: '#fff', margin: '0' }}>
                      {service.title}
                    </h3>
                  </div>
                  <div className="right-box" style={{ flex: '1' }}>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#ccc', margin: '0' }}>
                      {service.description}
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow" style={{ position: 'absolute', top: '30px', right: '30px', fontSize: '1.2rem', color: '#666', transition: 'color 0.3s ease' }}></i>
                  <button data-mfp-src="#service-wrapper" className="service-link modal-popup" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: '1' }}></button>
                </motion.div>
              ))}
              <motion.div 
                className="active-bg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "108.8px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent)',
                  borderRadius: '12px',
                  pointerEvents: 'none',
                  zIndex: '-1'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;