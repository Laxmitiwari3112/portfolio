import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // ✅ Import Skills
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-950 text-gray-100 relative overflow-hidden scroll-smooth">
      {/* 🌌 Subtle animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br  from-gray-900 via-gray-950 to-black animate-gradient-slow"></div>

      {/* ✨ Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float-slower"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 space-y-32 py-24">
        <section id="hero">
          <Hero />
        </section>

        <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"></div>

        <section id="about">
          <About />
        </section>

        <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

        {/* ✅ New Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        <div className="h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500"></div>

        <section id="projects">
          <Projects />
        </section>

        <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"></div>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
