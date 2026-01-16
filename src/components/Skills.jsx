import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiLeetcode,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-600" /> },
    {
      name: "JavaScript",
      level: 80,
      icon: <SiJavascript className="text-yellow-500" />,
    },
    { name: "React", level: 85, icon: <FaReact className="text-cyan-400" /> },
    {
      name: "Tailwind",
      level: 80,
      icon: <SiTailwindcss className="text-sky-400" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      level: 85,
      icon: <FaNodeJs className="text-green-600" />,
    },
    {
      name: "Express.js",
      level: 80,
      icon: <SiExpress className="text-gray-700" />,
    },
    {
      name: "MongoDB",
      level: 80,
      icon: <SiMongodb className="text-green-500" />,
    },
    { name: "MySQL", level: 75, icon: <SiMysql className="text-blue-700" /> },
    // { name: "PostgreSQL", level: 70, icon: <SiPostgresql className="text-indigo-600" /> },
  ],
  "Tools & Others": [
    { name: "Java", level: 85, icon: <FaJava className="text-red-600" /> },
    {
      name: "GitHub",
      level: 75,
      icon: <SiGithub className="text-white" />,
    },
    { name: "Python", level: 80, icon: <FaPython className="text-blue-500" /> },
    {
      name: "DSA",
      level: 75,
      icon: <SiLeetcode className="text-orange-400" />,
    },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="mt-24">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(skillCategories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === cat
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="glass rounded-2xl p-8 shadow-xl border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillCategories[activeTab].map((s) => (
            <motion.div
              key={s.name}
              className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  {s.name}
                </h4>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>

              {/* % Label */}
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                {s.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
