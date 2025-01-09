import React from "react";
import { Github, Linkedin } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleFooterLogoClick = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/masirjafri/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/MasirJafri1 ", label: "GitHub" },
  ];

  return (
    <footer className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
        {/* Logo */}
        <button onClick={handleFooterLogoClick}>
          <img
            src={assets.logo}
            alt="Company Logo"
            className="h-8 w-auto sm:h-10"
          />
        </button>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 border-gray-200 sm:border-l sm:pl-4">
          Copyright @MasirJafri | All rights reserved
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              target="_blank"
              key={label}
              href={href}
              aria-label={label}
              className="
                p-2 rounded-full 
                text-black 
                transition-all duration-200
                hover:text-gray-800 hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-200
              "
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
