import React from 'react';
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import amazon from "../../assets/img/amazonLogo.jpg";
import habeshaPlayImg from "../../assets/img/habeshaplay.png";
import garageImg from "../../assets/img/portfolio/abegarage.png";
import evangadiForumImg from "../../assets/img/portfolio/evangadiForumLogo.jpg";
import appleBotstrap from "../../assets/img/portfolio/apple-bootstrap.jpeg";
import appleReact from "../../assets/img/portfolio/appleLogo.jpg";
import app1 from "../../assets/img/portfolio/app-1.jpg";
import app2 from "../../assets/img/portfolio/app-2.jpg";
import app3 from "../../assets/img/portfolio/app-3.jpg";
import books1 from "../../assets/img/portfolio/books-1.jpg";
import books2 from "../../assets/img/portfolio/books-2.jpg";
import books3 from "../../assets/img/portfolio/books-3.jpg";
import branding1 from "../../assets/img/portfolio/branding-1.jpg";
import branding2 from "../../assets/img/portfolio/branding-2.jpg";
import branding3 from "../../assets/img/portfolio/branding-3.jpg";
import gechPhoto from "../../assets/img/portfolio/gechPhoto.jpg";
import gechPhoto2 from "../../assets/img/portfolio/gechPhoto.png";
import product1 from "../../assets/img/portfolio/product-1.jpg";
import product2 from "../../assets/img/portfolio/product-2.jpg";
import freshstart from "../../assets/img/freshstart.png";

const items = [
    {
      id: 1,
      title: "Fresh Start House",
      img: freshstart,
      desc: "Fresh Start House is a U.S.-based recovery-focused organization offering structured sober living and transitional support services to promote long-term sobriety and independent living.",
      badges: ["Healthcare", "Social Impact"],
      tags: ["React", "Healthcare", "Recovery Services", "Non-Profit"],
      stats: [
        { value: "100+", label: "Lives Impacted" },
        { value: "24/7", label: "Support Available" }
      ],
      links: [
        { url: "https://freshstarthouse.com/", text: "Visit Website", icon: "house" }
      ]
    },
    {
      id: 2,
      title: "Abe Garage Pro",
      img: garageImg,
      desc: "A revolutionary garage management ecosystem with real-time operational insights.",
      badges: ["Full Stack", "Featured"],
      tags: ["React", "Node.js", "MySQL", "Redux"],
      stats: [
        { value: "98%", label: "Efficiency" },
        { value: "24/7", label: "Uptime" }
      ],
      links: [
        { url: "https://abebe-garage.netlify.app/", text: "Live Experience", icon: "rocket" },
        { url: "#", text: "Case Study", icon: "journal-code" }
      ]
    },
    {
      id: 3,
      title: "Habesha Play",
      img: habeshaPlayImg,
      desc: "Habesha Play is a Netflix-inspired streaming platform built with React. The platform features content discovery, genre-based categorization, trailer viewing, and a fully responsive modern UI for a seamless cross-device experience.",
      badges: ["Streaming Platform"],
      tags: ["React", "Responsive Design", "Modern UI", "Content Discovery"],
      stats: [
        { value: "1000+", label: "Content Items" }
      ],
      links: [
        { url: "https://habesha-play-trailers.vercel.app/", text: "Live Demo", icon: "play-circle" },
        { url: "https://github.com/gechjs/Habesha-Play", text: "GitHub", icon: "code" }
      ]
    },
    {
      id: 4,
      title: "Amazon Prime",
      img: amazon,
      desc: "Next-gen e-commerce platform with AR product previews and blockchain payments.",
      badges: ["E-Commerce"],
      tags: ["React", "Firebase", "Stripe", "Node.js"],
      stats: [],
      links: [
        { url: "https://gizachew-amazon-clone.netlify.app/", text: "Shop Demo", icon: "cart3" }
      ]
    },
    {
      id: 5,
      title: "Evangadi Nexus",
      img: evangadiForumImg,
      desc: "Developer community hub with real-time collaboration and AI problem solving.",
      badges: ["Community"],
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      stats: [],
      links: [
        { url: "https://gizachew-evangadi-forum.netlify.app/", text: "Join Community", icon: "people" }
      ]
    },
    {
      id: 6,
      title: "Apple Vision",
      img: appleBotstrap,
      desc: "Ultra-premium Apple website with 3D product visualization and dark mode.",
      badges: ["Premium UI"],
      tags: ["React", "Framer", "GSAP"],
      stats: [],
      links: [
        { url: "https://gizachew-project2.netlify.app", text: "Experience", icon: "apple" }
      ]
    },
    {
      id: 7,
      title: "Apple Legacy",
      img: appleReact,
      desc: "Pixel-perfect responsive Apple clone with Bootstrap framework.",
      badges: [],
      tags: ["Bootstrap 5", "SASS", "Responsive"],
      stats: [],
      links: [
        { url: "https://gizachew-bootstrap-project.netlify.app/", text: "View", icon: "box-arrow-up-right" }
      ]
    }
  ];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="badges">
              {item.badges && item.badges.map((badge, index) => (
                <span key={index} className="badge">{badge}</span>
              ))}
            </div>
            <div className="tags">
              {item.tags && item.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            {item.stats && item.stats.length > 0 && (
              <div className="stats">
                {item.stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <span className="value">{stat.value}</span>
                    <span className="label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="links">
              {item.links && item.links.map((link, index) => (
                <a key={index} href={link.url} className="link" target="_blank" rel="noopener noreferrer">
                  <i className={`icon ${link.icon}`}></i>
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;