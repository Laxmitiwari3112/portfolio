import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="mt-24 px-4 md:px-8">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        About Me
      </h2>

      {/* Intro Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 mb-12 backdrop-blur-lg bg-white/10"
      >
        <p className="text-base md:text-lg text-black leading-relaxed text-center">
          I’m a <span className="font-semibold">Computer Science & Engineering</span>{" "}
          student at <span className="font-semibold">KNIPSS (2022–2026)</span>.{" "}
          Passionate about building modern, responsive UIs with{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind</span>, as well as scalable APIs
          with <span className="font-semibold">Node.js & Express</span>.
        </p>
      </motion.div>

      {/* Education Title */}
      <h3 className="text-2xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        🎓 Education
      </h3>

      {/* Timeline Section */}
      <div ref={timelineRef} className="relative max-w-4xl mx-auto pb-16">
        {/* Static gray track line */}
        <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full"></div>

        {/* Animated gradient line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400 rounded-full origin-top"
        ></motion.div>

        <div className="flex flex-col gap-16">
          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row md:items-center"
          >
            {/* Left Side (Desktop) */}
            <div className="hidden md:flex w-1/2 justify-end pr-8">
              <div className="glass inline-block p-6 rounded-xl shadow-lg border border-gray-200 hover:scale-[1.03] transition-transform bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="text-lg font-semibold text-black">
                  B.Tech — Computer Science & Engineering
                </h4>
                <p className="text-sm text-black mt-2">KNIPSS (2022–2026)</p>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-purple-400 w-6 h-6 rounded-full z-10"></div>

            {/* Mobile Card */}
            <div className="md:hidden w-full text-center">
              <div className="glass p-6 rounded-xl shadow-lg border border-gray-200 bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="text-lg font-semibold text-black">
                  B.Tech — Computer Science & Engineering
                </h4>
                <p className="text-sm text-black mt-2">KNIPSS (2022–2026)</p>
              </div>
            </div>
          </motion.div>

          {/* XII */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row md:items-center"
          >
            {/* Right Side (Desktop) */}
            <div className="hidden md:flex w-1/2"></div>

            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-pink-400 w-6 h-6 rounded-full z-10"></div>

            {/* Right Card */}
            <div className="md:w-1/2 md:pl-8 text-left md:text-left text-center md:text-inherit">
              <div className="glass p-6 rounded-xl shadow-lg border border-gray-200 hover:scale-[1.03] transition-transform bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-3">📘</div>
                <h4 className="text-lg font-semibold text-black">
                  XII (CBSE) — Surya Academy Public School
                </h4>
                <p className="text-sm text-black mt-2">Scored 82%</p>
              </div>
            </div>
          </motion.div>

          {/* X */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row md:items-center"
          >
            {/* Left Side (Desktop) */}
            <div className="hidden md:flex w-1/2 justify-end pr-8">
              <div className="glass inline-block p-6 rounded-xl shadow-lg border border-gray-200 hover:scale-[1.03] transition-transform bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-3">🏫</div>
                <h4 className="text-lg font-semibold text-black">
                  X (CBSE) — Surya Academy Public School
                </h4>
                <p className="text-sm text-black mt-2">Scored 91%</p>
              </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-cyan-400 w-6 h-6 rounded-full z-10"></div>

            {/* Mobile Card */}
            <div className="md:hidden w-full text-center">
              <div className="glass p-6 rounded-xl shadow-lg border border-gray-200 bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-3">🏫</div>
                <h4 className="text-lg font-semibold text-black">
                  X (CBSE) — Surya Academy Public School
                </h4>
                <p className="text-sm text-black mt-2">Scored 91%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
