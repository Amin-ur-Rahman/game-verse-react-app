import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-emerald-500 mb-3">
            GameVerse
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your gateway to the best indie and AAA games. Explore, download, and
            play — all in one place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-emerald-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#games" className="hover:text-emerald-500 transition">
                All Games
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-emerald-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-100">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/aminur.rahman.333043"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/aminur-rahman-116506360/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Amin-ur-Rahman?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2025 GameVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
