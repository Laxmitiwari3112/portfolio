import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/myphoto.jpg"

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-sm uppercase tracking-wider text-pink-500 font-semibold">
            Hi — I'm
          </p>

          {/* Gradient name */}
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-shimmer">
            Laxmi Tiwari
          </h1>

          {/* Typing effect for role */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              2000,
              "React & Node.js Enthusiast ⚡",
              2000,
              "Open Source Learner 🌱",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="block mt-3 text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300"
            repeat={Infinity}
          />

          {/* Description */}
          <p className="mt-5 text-lg max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a Computer Science & Engineering student at{" "}
            <span className="font-semibold text-pink-500">KNIPSS</span>. I love
            building responsive web apps with{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Node.js</span>, and{" "}
            <span className="font-semibold">Tailwind CSS</span> — always
            focusing on usability, performance, and clean code.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:laxmitiwari9651@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              📧 Email Me
            </a>

            <a
              href="https://github.com/Laxmitiwari3112"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-2 border-pink-500 rounded-full hover:bg-pink-50 dark:hover:bg-gray-800 transition"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/laxmi-tiwari-178697294/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border-2 border-cyan-500 rounded-full hover:bg-cyan-50 dark:hover:bg-gray-800 transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href="/src/assets/LaxmiTiwariResume1.pdf"
              download
              className="px-6 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-50 dark:hover:bg-gray-800 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right content - avatar */}
        <div className="flex justify-center relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 p-[3px] shadow-lg animate-glow flex items-center justify-center">
            <div className="w-[15.5rem] h-[15.5rem] rounded-full overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
