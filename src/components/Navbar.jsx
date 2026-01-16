import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-md">
      {/* Gradient bar */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-gradient-x"></div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={600}
          offset={-80}
          spy
          activeClass="text-pink-500"
          className="cursor-pointer text-2xl font-extrabold tracking-wide
          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
          bg-clip-text text-transparent animate-shimmer"
        >
          Laxmi Tiwari
        </Link>

        {/* Desktop Nav (UNCHANGED) */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-80}
              spy
              activeClass="text-pink-500 font-semibold"
              className="group cursor-pointer relative text-gray-700 dark:text-gray-300 font-medium transition-all duration-500"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px]
                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                transition-all duration-500 group-hover:w-full">
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

/* ================= MOBILE MENU ================= */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:border-pink-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-gray-700 dark:text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Slide Menu */}
      <div
        className={`absolute right-0 mt-3 w-56 glass border border-gray-200
        dark:border-gray-700 rounded-xl shadow-lg overflow-hidden
        transform transition-all duration-300
        ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0 pointer-events-none"}
        `}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="text-pink-500 font-semibold bg-pink-50 dark:bg-gray-800"
            onClick={() => setOpen(false)}
            className="group block px-5 py-3 cursor-pointer
            text-gray-700 dark:text-black font-medium transition-all duration-300"
          >
            <span className="relative inline-block">
              {l.label}
              {/* Hover + Active underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px]
                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                transition-all duration-300
                group-hover:w-full
                group-[.active]:w-full"
              ></span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
