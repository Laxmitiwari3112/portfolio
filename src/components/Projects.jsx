import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaLink, FaGlobe } from "react-icons/fa";

import blogifyImage from "../assets/blogify.png";
import empmngImage from "../assets/emp-mng.png";
import urlshortenerImage from "../assets/url_logo.jpg";
import travelbucketImage from "../assets/travelbucketlogo.jpg";

const projects = [
  {
    title: "Blogify",
    desc: "A full-stack collaborative blogging platform built with Node.js, Express, and MongoDB. Users can create posts, comment, and engage through an intuitive UI. Features secure routing, REST APIs, and a scalable backend architecture.",
    link: "https://github.com/Laxmitiwari3112/BLOGIFY",
    image: blogifyImage,
    icon: <FaBookOpen className="text-pink-500 text-3xl" />,
  },
  {
    title: "Employee Management System",
    desc: "Developed an Employee Management System using React JS, Tailwind CSS, and mockJSON data with full CRUD, search, and filtering features. Built reusable components, optimized state management, and delivered a responsive, clean UI.",
    link: "https://github.com/Laxmitiwari3112/emp-mng-sys",
    image: empmngImage,
    icon: <FaGlobe className="text-pink-500 text-3xl" />,
  },
  {
    title: "URL Shortener",
    desc: "A smart link-shortening service that generates compact URLs, tracks visit counts, and provides usage analytics. Built with Node.js, Express, MongoDB, and EJS, featuring clean RESTful APIs and responsive UI.",
    link: "https://github.com/Laxmitiwari3112/URL_Shortener",
    image: urlshortenerImage,
    icon: <FaLink className="text-purple-500 text-3xl" />,
  },
  {
    title: "Travel-Bucket",
    desc: "A modern, responsive travel exploration platform built with React and Tailwind CSS. Includes destination browsing, search functionality, and a smooth booking-style UI.",
    link: "https://travel-site-two-zeta.vercel.app/",
    image: travelbucketImage,
    icon: <FaGlobe className="text-cyan-500 text-3xl" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-24">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        🚀 Projects
      </motion.h2>

      <div className="flex flex-col space-y-24">
        {projects.map((p, index) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`relative flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:shadow-xl transition-all duration-500 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="md:w-1/2 w-full overflow-hidden"
            >
              <img
                src={p.image}
                alt={`${p.title} thumbnail`}
                loading="lazy"
                className="w-full h-full object-cover max-h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Content */}
            <div className="md:w-1/2 w-full flex flex-col justify-center p-8 bg-gradient-to-br from-white/10 via-purple-200/10 to-transparent dark:from-gray-900/30 dark:to-gray-800/30">
              <div className="flex items-center gap-3 mb-4">
                {p.icon}
                <h3 className="text-2xl font-bold">{p.title}</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {p.desc}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-pink-500 hover:underline"
                >
                  View Source
                </a>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:scale-105 transition-all duration-300"
                >
                  Open Project
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
