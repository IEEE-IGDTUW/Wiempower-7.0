// import React from "react";
// import aboutGroup from "./about-group.jpg";
// const AboutSection = () => {
//   return (
//     <section id="about" className="relative w-full bg-[#0a0514] text-white overflow-hidden py-24 px-6">

//       {/* Background Image Overlay (same style as hero) */}
//       <div
//         className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg?cs=srgb&dl=pexels-bibekghosh-14553707.jpg&fm=jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div className="space-y-10 md:pl-6 lg:pl-12">

//           <h2
//             className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em]"
//             style={{
//               textShadow: "2px 0 #bc39f3, -1px 0 #00fff9",
//             }}
//           >
//             About <br /> WIEMPOWER
//           </h2>

//           {/* Retro Image Frame */}
//           <div className="border border-white/30 p-2 bg-black/70 shadow-xl w-fit">
//             <img
//   src={aboutGroup}
//   alt="WIEMPOWER Team"
//   className="w-[320px] md:w-[380px]"
// />
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//        <div className="border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-10 md:p-12 rounded-sm shadow-2xl space-y-6 max-w-xl md:ml-[-40px] lg:ml-[-80px]">


//           <p className="text-base md:text-lg leading-relaxed text-pink-100">
//             WIEmpower 6.0 is the flagship event organized by IEEE IGDTUW.
//             It serves as a premier platform for innovation, leadership,
//             and growth through a curated series of workshops, competitions,
//             and expert talks.
//           </p>

//           <p className="text-base md:text-lg leading-relaxed text-pink-100">
//             Bringing together individuals from diverse backgrounds,
//             WIEmpower encourages collaboration, skill enhancement,
//             and the exchange of groundbreaking ideas. As IEEE IGDTUW’s
//             flagship event, it creates opportunities in STEM and builds
//             lasting connections that drive future success.
//           </p>
//         </div>
//       </div>

//       {/* Ambient Glows (same logic as hero) */}
//       <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[130px]" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px]" />
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";
import { motion } from "framer-motion";
import aboutGroup from "./group.png";
import DotGrid from './DotGrid';
import bgImage from "../assets/bg2.png";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full text-white font-sans overflow-hidden">

      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0514]/90 via-purple-900/30 to-[#0a0514]/90" />
        <DotGrid
          dotSize={8}
          gap={15}
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

      {/* Floating Geometric Elements */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 border-2 border-purple-500/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-pink-500/20 rounded-full animate-pulse" />
      <div className="absolute top-[60%] left-[20%] w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg rotate-12 animate-bounce-slow" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">

        {/* Main Container */}
        <div className="max-w-6xl w-full">

          {/* Innovative Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h2 className="relative text-6xl md:text-8xl font-black">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ABOUT
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  WIEMPOWER
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Split Content Design */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Geometric Frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-purple-500/20 rounded-3xl transform -rotate-3" />
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">

                  {/* About Image */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-600/20 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src={aboutGroup}
                      alt="WIEMPOWER Team"
                      className="w-full h-full object-cover rounded-2xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Content Box */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">

                {/* Accent Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-t-3xl" />

                <div className="space-y-4">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                    <span className="text-purple-400 font-semibold">WIEmpower 7.0</span> is the flagship event organized by IEEE IGDTUW. It serves as a premier platform for innovation, leadership, and growth through a curated series of workshops, competitions, and expert talks.
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                  <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                    Bringing together individuals from diverse backgrounds, WIEmpower encourages collaboration, skill enhancement, and the exchange of groundbreaking ideas.
                  </p>
                </div>

                {/* Interactive Elements */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {["Innovation", "Leadership", "Collaboration", "Growth"].map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Floating Quote */}
              <motion.div
                className="relative pl-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 text-4xl text-purple-400">"</div>
                <p className="text-xl text-gray-300 italic">
                  Creating opportunities in STEM and building lasting connections that drive future success.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
