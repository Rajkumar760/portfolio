import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "AI & Machine Learning Enthusiast",
    "Full-Stack Developer",
    "Cloud & DevOps Explorer",
    "Problem Solver & Innovator",
  ];

  const [code] = useState(`
const profile = {
    name: 'Raj kumar R',
    skills: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn',
        'OpenCV', 'Pandas', 'NumPy', 'Flutter',
        'Dart', 'JavaScript', 'React', 'Node.js',
        'MongoDB', 'SQL', 'AWS', 'GitHub'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 2, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 1
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
        >
          {/* Background */}
          <GridBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Content */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
            {/* Left column */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Name */}
              <div className="relative mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />{" "}
                  <span className="relative inline-block">
                    I&apos;m
                    <span className="typing-effect gradient-text">
                      {" "} Raj kumar R
                    </span>
                  </span>
                </h1>
              </div>

              {/* Role */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8">
                <i className="fas fa-rocket text-blue-400 animate-bounce"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300/90 mb-12 leading-relaxed max-w-xl">
                CSE Graduate Python developer @ VEC Chennai 🎓|  
                Passionate about Deep Learning, Computer Vision, Cloud, and Full-Stack Development 🚀
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Projects */}
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 py-4 rounded-[11px] bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="flex items-center gap-2 text-white font-medium">
                      
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </span>
                </a>

                {/* Resume */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="flex items-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Download Resume</span>
                      <i className="fas fa-download"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>

        {/* About section */}
        <PortfolioPage />
      </main>
    </>
  );
}
