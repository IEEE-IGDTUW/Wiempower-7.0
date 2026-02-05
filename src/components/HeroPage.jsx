import React, { useState, useEffect } from "react";
import FuzzyText from "./FuzzyText.jsx";
import DotGrid from "./DotGrid.jsx";
import bgImage from "../assets/bg.png";

const words = ["discover", "develop", "deliver"];

/* 🔠 Responsive hero font size */
const getHeroFontSize = () => {
  if (window.innerWidth < 480) return "3.2rem";
  if (window.innerWidth < 640) return "4.2rem";
  if (window.innerWidth < 768) return "5.5rem";
  if (window.innerWidth < 1024) return "7rem";
  return "9rem";
};

const HomePage = () => {
  const [displayedWord, setDisplayedWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroFontSize, setHeroFontSize] = useState(getHeroFontSize());

  /* ⌨️ Typewriter effect */
  useEffect(() => {
    const currentWord = words[currentIndex];

    if (isDeleting) {
      if (displayedWord.length > 0) {
        const t = setTimeout(
          () => setDisplayedWord((p) => p.slice(0, -1)),
          40
        );
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setCurrentIndex((p) => (p + 1) % words.length);
      }
    } else {
      if (displayedWord.length < currentWord.length) {
        const t = setTimeout(
          () =>
            setDisplayedWord((p) =>
              currentWord.slice(0, p.length + 1)
            ),
          80
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsDeleting(true), 1500);
        return () => clearTimeout(t);
      }
    }
  }, [displayedWord, currentIndex, isDeleting]);

  /* 📱 Resize listener for hero text */
  useEffect(() => {
    const handleResize = () => setHeroFontSize(getHeroFontSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white pt-20 md:pt-24 lg:pt-28">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0514]/95 via-[#0a0514]/80 to-transparent" />
        <DotGrid
          dotSize={6}
          gap={10}
          baseColor="#2a1a3f"
          activeColor="#e8c4ff"
          proximity={140}
          shockRadius={280}
          shockStrength={6}
          resistance={800}
          returnDuration={2}
          className="absolute inset-0"
        />
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 space-y-10">

        {/* 🔥 HERO TITLE — PERFECT CENTER */}
        <div className="w-full flex justify-center items-center">
          <FuzzyText
            fontSize={heroFontSize}
            fontWeight={900}
            fontFamily="'Inter', sans-serif"
            color="#ffffff"
            baseIntensity={0.3}
            hoverIntensity={0.7}
            enableHover
            fuzzRange={50}
            className="block text-center drop-shadow-[0_35px_60px_rgba(0,0,0,0.7)]"
            style={{ margin: "0 auto" }}
          >
            WIEMPOWER
          </FuzzyText>
        </div>

        {/* ⌨️ TYPEWRITER */}
        <div className="flex items-baseline gap-3 justify-center">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.25em] uppercase bg-gradient-to-r from-white via-fuchsia-200 to-purple-300 bg-clip-text text-transparent">
            {displayedWord}
          </span>
          <span className="w-[0.12em] h-[1.2em] bg-white animate-pulse" />
        </div>

        {/* 💎 MISSION */}
        <div className="max-w-3xl mx-auto text-center backdrop-blur-3xl bg-white/5 border border-white/20 rounded-3xl px-8 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
          <p className="text-lg md:text-xl lg:text-2xl font-light">
            Empowering women engineers to solve real-world challenges through innovation
          </p>
        </div>

        {/* 🎯 CTA */}
        <a
          href="#register"
          className="px-12 py-5 rounded-3xl bg-gradient-to-r from-fuchsia-500/40 to-purple-500/40 border border-fuchsia-400/50 hover:scale-105 hover:shadow-[0_20px_60px_rgba(200,120,255,0.5)] transition-all duration-500 font-bold text-xl"
        >
          REGISTER NOW →
        </a>

        {/* 🏷 IEEE */}
        <div className="tracking-[0.35em] text-sm md:text-base font-bold opacity-90">
          IEEE IGDTUW
        </div>
      </div>

      {/* ✨ GLOWS */}
      <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-fuchsia-500/10 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[15%] right-[5%] w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
    </div>
  );
};

export default HomePage;
