import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, User, ChevronRight, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function ContactInfo() {
  const [activeCard, setActiveCard] = useState(null);
  const [copied, setCopied] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contactDetails = {
    name: "Raj kumar R",
    email: "rajkumarrajan002@gmail.com",
    phone: "7603990847",
    location: "Chennai, India",
    github: "https://github.com/Rajkumar760",
    linkedin: "https://www.linkedin.com/in/raj-kumar-r-3487a22a5"  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <main className="pt-20 bg-gradient-to-br from-[#04081A] via-[#0A0F29] to-[#151A3A] text-white min-h-screen px-4 py-8 sm:py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-blue-300">Let's Connect</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact{" "}
            </span>
            <TypeAnimation
              sequence={['Information', 2000, 'Details', 2000, 'Links', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto px-4"
          >
            Get in touch with me through any of these channels. I'm always open to new opportunities!
          </motion.p>
        </motion.div>

        {/* Profile Section with Animation */}
        <motion.div
          variants={profileVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-xl" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center relative">
                <User className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 border-2 border-blue-400/50 rounded-full"
              />
            </motion.div>
            
            <div className="text-center md:text-left flex-1">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold mb-2"
              >
                {contactDetails.name}
                <span className="text-blue-400 ml-2 text-xl">👋</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg mb-4"
              >
                Full Stack Developer & Problem Solver
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">Available for opportunities</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12"
        >
          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setActiveCard('email')}
            onHoverEnd={() => setActiveCard(null)}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-3 rounded-xl"
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Email</h3>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => copyToClipboard(contactDetails.email, 'email')}
                className="text-left w-full"
              >
                <p className="text-gray-200 group-hover:text-white transition-colors truncate text-lg font-medium">
                  {contactDetails.email}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-300 text-sm flex items-center gap-1">
                    {copied === 'email' ? 'Copied! ✓' : 'Copy email'}
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setActiveCard('phone')}
            onHoverEnd={() => setActiveCard(null)}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 p-3 rounded-xl"
                >
                  <Phone className="w-6 h-6 text-green-400" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Phone</h3>
                  
                </div>
              </div>
              
              <a 
                href={`tel:+91${contactDetails.phone}`}
                className="block"
              >
                <p className="text-gray-200 group-hover:text-white transition-colors text-lg font-medium mb-1">
                  +91 {contactDetails.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
                </p>
                <div className="flex items-center justify-between mt-4">
                  
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setActiveCard('location')}
            onHoverEnd={() => setActiveCard(null)}
            className="group relative sm:col-span-2 lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-pink-500/5 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="bg-gradient-to-br from-pink-500/20 to-rose-600/20 p-3 rounded-xl"
                >
                  <MapPin className="w-6 h-6 text-pink-400" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Location</h3>
                  <p className="text-sm text-pink-300">Based in</p>
                </div>
              </div>
              
              <p className="text-gray-200 group-hover:text-white transition-colors text-lg font-medium">
                {contactDetails.location}
              </p>
              <p className="text-pink-300 text-sm mt-2">🇮🇳 India • IST Timezone</p>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setActiveCard('github')}
            onHoverEnd={() => setActiveCard(null)}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-3 rounded-xl"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-white">GitHub</h3>
                  <p className="text-sm text-gray-300">Code & Projects</p>
                </div>
              </div>
              
              <a 
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-gray-200 group-hover:text-white transition-colors truncate text-lg font-medium">
                  https://github.com/Rajkumar760
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300 text-sm flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    View repositories
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setActiveCard('linkedin')}
            onHoverEnd={() => setActiveCard(null)}
            className="group relative sm:col-span-2 lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-blue-600/5 to-blue-700/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 p-3 rounded-xl"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-white">LinkedIn</h3>
                  <p className="text-sm text-blue-300">Professional Profile</p>
                </div>
              </div>
              
              <a 
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="text-gray-200 group-hover:text-white transition-colors truncate text-lg font-medium">
                  https://www.linkedin.com/in/raj-kumar-r-3448252a1/
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-300 text-sm flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    Connect with me
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Action Buttons with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          
          
          
        </motion.div>

        {/* Footer Note with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-400 max-w-2xl mx-auto px-4"
        >
          
          <p className="text-lg mb-2">
            Feel free to reach out for collaborations, opportunities, or just to say hello! 
            <span className="text-blue-300 ml-2">🚀</span>
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
            
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              Open to freelance projects
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              Remote work friendly
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Contact Info */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full z-50"
          >
            <span className="text-white text-sm font-medium">
              Click to {activeCard === 'email' ? 'copy' : 'open'} {activeCard}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification for copied email */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed left-1/2 bottom-24 bg-green-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg z-50"
          >
            <span className="flex items-center gap-2">
              ✓ Copied {copied} to clipboard!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}