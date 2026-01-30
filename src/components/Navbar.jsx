import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { SiX } from 'react-icons/si';
import ieee from "../assets/IEEE.png";

const SOCIALS = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/company/ieee-igdtuw/",
  },
  {
    name: "X",
    icon: <SiX size={24} />,
    link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={24} />,
    link: "#",
    onClick: (e) => {
      e.preventDefault();
      const emailParams = {
        to: "igdtuieee@gmail.com",
        cc: "igdtuieee@gmail.com",
        subject: "Contact from Website",
        body: "Hello IEEE IGDTUW Team,"
      };
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailParams.to}&cc=${emailParams.cc}&su=${encodeURIComponent(emailParams.subject)}&body=${encodeURIComponent(emailParams.body)}`;
      window.open(gmailLink, "_blank") || alert("Please allow pop-ups for this site.");
    }
  }
];

const WIEMPOWER_VERSIONS = [
  { version: "7.0", url: "#" }, // Current version
  { version: "5.0", url: "https://ieee-igdtuw.github.io/ieeeigdtuw/wiempower" },
  { version: "4.0", url: "https://ieee-igdtuw.github.io/wie-website/index.html" },
  { version: "3.0", url: "https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/index.html" },
  { version: "2.0", url: "https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/about2.html" },
  { version: "1.0", url: "https://igdtuw19ieee.github.io/WIEmpower/colorlib.com/preview/theme/plataforma/about.html" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubBarOpen, setIsSubBarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Simple scroll spy for active section
      const sections = ['about', 'events', 'hackathon-schedule', 'tracks'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
      setIsMenuOpen(false);
      setIsSubBarOpen(false);
    }
  };

  const navLinkClass = (section) => `
        cursor-pointer 
        transition-all 
        duration-300
        hover:text-[#a855f7]
        ${activeSection === section ? 'text-[#a855f7]' : 'text-gray-200'}
    `;

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <nav className={`fixed top-2 left-1/2 -translate-x-1/2 z-50
        px-6 md:px-14 py-2
        flex items-center justify-between
        w-[95vw] md:w-[700px] lg:w-[950px] xl:w-[1200px]
        rounded-[48px] backdrop-blur-xl
        transition-all duration-500
        ${scrolled
        ? 'bg-white/10 shadow-2xl border border-white/20'
        : 'bg-white/5 shadow-xl border border-white/10'
      }`}>
      {/* IEEE Logo */}
      <div onClick={() => handleScroll('about')} className="cursor-pointer">
        <img
          src={ieee}
          alt="IEEE IGDTUW"
          className="w-14 h-14 object-contain ml-2 drop-shadow-xl hover:animate-spin"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center grow">
        <div className="flex items-center justify-between w-[700px] h-auto border border-[rgba(112,66,248,0.38)] bg-[#0300145e] px-[20px] py-[10px] rounded-full">
          <button onClick={() => handleScroll('about')} className={navLinkClass('about')}>About</button>

          <div className="relative">
            <button onClick={() => setIsSubBarOpen(!isSubBarOpen)} className={navLinkClass('events')}>
              Events
            </button>
            <AnimatePresence>
              {isSubBarOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-48 bg-[#000000] border border-[rgba(112,66,248,0.38)] rounded-lg"
                >
                  {WIEMPOWER_VERSIONS.map(({ version, url }) => (
                    <button
                      key={version}
                      onClick={() => {
                        if (version === "7.0") {
                          handleScroll('about');
                        } else {
                          window.open(url, '_blank');
                        }
                        setIsSubBarOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-300 via-purple-300 to-blue-400 hover:bg-[#a855f7] hover:text-white transition-colors"
                    >
                      WIEMPOWER {version}
                    </button>
                  ))}
                  <button
                    onClick={() => handleScroll('past-events')}
                    className="w-full px-4 py-2 text-left text-gray-200 hover:bg-[#a855f7] hover:text-white transition-colors"
                  >
                    Past Events
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => handleScroll('hackathon-schedule')} className={navLinkClass('hackathon-schedule')}>
            Schedule
          </button>

          <button onClick={() => handleScroll('tracks')} className={navLinkClass('tracks')}>
            Tracks
          </button>

          <a
            href="https://open-source-week-2025-h5cp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${navLinkClass('wiempower')}`}
          >
            Open Source Week 7.0
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center gap-5">
        {SOCIALS.map(({ name, icon, link, onClick }) => (
          <a
            key={name}
            href={link}
            target={name === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            onClick={onClick}
            className="text-white hover:text-[#a855f7] transition-colors duration-300"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white hover:text-[#a855f7] transition-colors duration-300"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 right-0 top-[65px] bg-[#030014] border border-[rgba(112,66,248,0.38)] rounded-b-lg shadow-lg p-4"
          >
            <div className="flex flex-col gap-4">
              <button onClick={() => handleScroll('about')} className="text-gray-200 hover:text-[#a855f7] text-left">About</button>
              <button onClick={() => setIsSubBarOpen(!isSubBarOpen)} className="text-gray-200 hover:text-[#a855f7] text-left">Events</button>
              {isSubBarOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {WIEMPOWER_VERSIONS.map(({ version, url }) => (
                    <button
                      key={version}
                      onClick={() => {
                        if (version === "7.0") {
                          handleScroll('about');
                        } else {
                          window.open(url, '_blank');
                        }
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-200 hover:text-[#a855f7] text-left"
                    >
                      WIEMPOWER {version}
                    </button>
                  ))}
                  <button
                    onClick={() => handleScroll('past-events')}
                    className="text-gray-200 hover:text-[#a855f7] text-left"
                  >
                    Past Events
                  </button>
                </div>
              )}
              <button onClick={() => handleScroll('hackathon-schedule')} className="text-gray-200 hover:text-[#a855f7] text-left">Hackathon Schedule</button>
              <button onClick={() => handleScroll('tracks')} className="text-gray-200 hover:text-[#a855f7] text-left">Tracks</button>
              <a
                href="https://open-source-week-2025-h5cp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#a855f7] text-left"
              >
                Open Source Week
              </a>

              <div className="flex justify-center gap-5 mt-4">
                {SOCIALS.map(({ name, icon, link, onClick }) => (
                  <a
                    key={name}
                    href={link}
                    target={name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    onClick={onClick}
                    className="text-white hover:text-[#a855f7] transition-colors duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
