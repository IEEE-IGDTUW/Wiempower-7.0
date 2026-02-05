import React from "react";
import DotGrid from "./DotGrid.jsx";
import bgImage from "../assets/bg.png";
import FuzzyText from "./FuzzyText.jsx";

const schedule = [
    {
        date: "6th February 2026",
        title: "Registration Opens [Online]",
        desc: "Team registrations begin. Register your team through the official portal and join Discord to stay updated with announcements, rules, and mentor interactions.",
    },
    {
        date: "14th – 16th February 2026",
        title: "Ideation Period [Online]",
        desc: "Teams brainstorm, research, and finalize their problem statement and solution approach. Mentors will be available to guide teams during this phase.",
    },
    {
        date: "16th February 2026 (EOD) – 18th February 2026 (EOD)",
        title: "Development Period [Online]",
        desc: "Teams start building their solution. Focus on implementation, testing, and preparing a working prototype along with a presentation.",
    },
    {
        date: "19th February 2026 (EOD)",
        title: "Finalists Announcement [Online]",
        desc: "Top teams will be shortlisted based on their submissions. Finalists will be announced through official communication channels.",
    },
    {
        date: "20th February 2026",
        title: "Final Presentation [Offline]",
        desc: "Shortlisted teams will present their final solution and prototype before the judges at the IGDTUW campus. Results will be declared after the presentations.",
    },
];

const Schedule = () => {
    return (
        <section
            id="hackathon-schedule"
            className="relative min-h-screen w-full text-white font-sans overflow-hidden py-24 px-4 sm:px-6"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#0a0514]/95 to-transparent backdrop-blur-md" />
                <DotGrid
                    dotSize={6}
                    gap={10}
                    baseColor="#271E37"
                    activeColor="#F4E4FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                    className="absolute inset-0"
                />
            </div>

            {/* Header */}
            <div className="relative z-20 text-center mb-16">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover
                    fontSize="clamp(2rem, 7vw, 4rem)"
                    fontWeight={900}
                    fontFamily="sans-serif"
                    color="#ffffff"
                    fuzzRange={10}
                >
                    Hackathon Schedule
                </FuzzyText>
            </div>

            {/* Timeline */}
            <div className="relative z-20 max-w-5xl mx-auto">
                {/* Timeline line */}
                <div
                    className="
                        absolute 
                        left-4 md:left-1/2 
                        top-0 h-full w-px
                        bg-gradient-to-b 
                        from-fuchsia-500/60 
                        via-purple-500/40 
                        to-transparent
                        md:-translate-x-1/2
                    "
                />

                <div className="space-y-12">
                    {schedule.map((item, i) => (
                        <div
                            key={i}
                            className={`
                                relative flex items-start gap-6 md:gap-10
                                ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                            `}
                        >
                            {/* Timeline Dot */}
                            <div
                                className="
                                    absolute 
                                    left-4 md:left-1/2 
                                    -translate-x-1/2
                                    w-4 h-4 md:w-6 md:h-6
                                    bg-fuchsia-500
                                    rounded-full
                                    shadow-lg shadow-fuchsia-500/60
                                    z-30
                                "
                            />

                            {/* Mobile spacer */}
                            <div className="w-10 md:hidden" />

                            {/* Card */}
                            <div
                                className="
                                    w-full md:w-[45%]
                                    p-5 sm:p-6 md:p-8
                                    rounded-3xl
                                    backdrop-blur-2xl
                                    border border-white/20
                                    bg-white/10
                                    transition-all duration-500
                                    hover:bg-white/20
                                    md:hover:-translate-y-3
                                    md:hover:rotate-1
                                    md:hover:shadow-2xl
                                    md:hover:shadow-fuchsia-500/40
                                "
                            >
                                <div className="uppercase text-xs sm:text-sm tracking-widest text-fuchsia-400 mb-3 font-bold bg-fuchsia-900/30 px-3 py-1 rounded-full inline-block">
                                    {item.date}
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-pink-100/90 text-sm sm:text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute top-24 left-10 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </section>
    );
};

export default Schedule;
