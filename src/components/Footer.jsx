import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 bg-black">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Laxmi Tiwari
        </p>
        <div className="flex gap-3 text-sm">
          <a
            href="mailto:laxmitiwari9651@gmail.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://github.com/Laxmitiwari3112"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/laxmi-tiwari-178697294/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
