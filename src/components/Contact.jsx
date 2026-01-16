import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_ypncf77',
        'template_7xsvyuk',
        form.current,
        {
          publicKey: '-ZgNDkW69YqAf2FG_',
        }
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          alert('FAILED... ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="mt-24 relative">
      {/* Gradient Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        ✨ Contact Me
      </h2>

      <div className="glass rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-start border border-gray-200">
        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black">Get in Touch</h3>

          <p className="mt-3 flex items-center gap-2 text-gray-700 dark:text-black">
            <MdEmail className="text-pink-500" />
            <a
              href="mailto:laxmitiwari9651@gmail.com"
              className="underline hover:text-pink-500 transition"
            >
              laxmitiwari9651@gmail.com
            </a>
          </p>

          <p className="mt-2 flex items-center gap-2 text-gray-700 dark:text-black">
            <MdPhone className="text-cyan-500" /> (+91) 6392709932
          </p>

          {/* Social Links */}
          <div className="mt-5 flex gap-4">
            <a
              href="https://github.com/Laxmitiwari3112"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/laxmi-tiwari-178697294/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaLinkedin className="text-xl text-blue-600" />
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="w-full md:w-96">
          <h4 className="text-lg font-semibold text-black">Quick Message</h4>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col gap-3 text-black"
          >
            <input
              type="text"
              name="user_name"
              required
              className="px-4 py-2 rounded-lg text-black border bg-transparent focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Your name"
            />

            <input
              type="email"
              name="user_email"
              required
              className="px-4 py-2 rounded-lg border bg-transparent focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Your email"
            />

            <textarea
              name="message"
              required
              rows="3"
              className="px-4 py-2 rounded-lg border bg-transparent focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="Message"
            ></textarea>

            <button
              disabled={loading}
              className={`mt-2 px-5 py-2 font-semibold rounded-full text-white
                bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                shadow-md transition-transform duration-300
                ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"}
              `}
            >
              {loading ? "Sending..." : "Send ✉️"}
            </button>
          </form>
        </div>
      </div>

      {/* ===== Success Modal ===== */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[90%] max-w-sm rounded-2xl p-6 text-center shadow-xl
            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white
            animate-scale-in
          ">
            <h3 className="text-xl font-bold mb-2">🎉 Message Sent!</h3>
            <p className="text-sm opacity-90">
              Thank you for reaching out. I’ll get back to you soon.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-5 px-6 py-2 rounded-full font-semibold bg-white text-black hover:scale-105 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
