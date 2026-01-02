import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// ================== PROJECT DATA ==================
const projects = [
  {
    title: "🤖 AI Powered Excel-PPT Generator ",
    description:
      "Built an AI-driven tool that converts Excel data into professional PowerPoint presentations by automatically generating slide titles, summaries, and structured content. Developed using Python automation and AI models, reducing manual effort and improving presentation quality. Integrated charts and tables dynamically, ensuring accurate and visually appealing slides for reporting and analytics.",
    src: "/projects/excel-ppt.png", // ✅ stored in public/projects/
    color: "#4ade80",
  },

  {
    title: "🌐 Personal Portfolio Website (React + Tailwind + Vercel)",
    description:
      "A modern, fully responsive personal portfolio built using React, Tailwind CSS, Vite, and Framer Motion. Features smooth animations, a certification gallery, multi-page routing, and a projects showcase.",
    src: "/projects/portfolio.png",
    color: "#34d399",
    liveLink: "https://portfolio-saravanan-k.vercel.app/",
  },
  {
    title: "🎥 Emotion Detection",
    description:
      "Built an emotion detection system using Python, OpenCV, and TensorFlow, leveraging a CNN model to accurately recognize and classify facial expressions in real-time, enabling applications in sentiment analysis and human-computer interaction.",
    src: "/projects/emotion detection.png",
    color: "#facc15",
  
  },
 

   {
    title: "🎥 Smart Attendence Tracking System Using RFID",
    description:
      "Developed a smart attendance system using RFID technology to automate and streamline attendance tracking. The system reads RFID cards/tags, identifies users in real-time, and logs attendance in a centralized database, reducing manual errors and saving time. Built with Python and IoT integration (Raspberry Pi/Arduino), the project features real-time monitoring, secure data storage, and automated reporting, demonstrating skills in hardware-software integration, IoT, and backend development.",
    src: "/projects/smart attendence.png",
    color: "#facc15",
  
  },
];

// ================== MAIN PROJECT COMPONENT ==================
export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Responsive scaling for smaller displays
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (max-width: 1400px) {
        .project-card {
          scale: 0.9;
          margin-top: -4vh;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        {/* ---------- PROJECT SECTIONS ---------- */}
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>

        {/* ---------- SHOW ALL PROJECTS PANEL ---------- */}
        
            
             
        {/* ----------------------------------------------- */}
      </main>
    </ReactLenis>
  );
}

// ================== PROJECT CARD COMPONENT ==================
function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Card Body */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Description Section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <i className="fab fa-github text-xl" style={{ color }}></i>
                  
                </motion.a>

                {/* Live Demo Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <i
                    className="fas fa-external-link-alt text-xl"
                    style={{ color }}
                  ></i>
                  
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ================== PROP VALIDATION ==================
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
