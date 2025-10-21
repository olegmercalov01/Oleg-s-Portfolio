import AnimatedBackground from "./about/AnimatedBackground";
import ResumeButton from "./about/ResumeButton";
import { motion, useAnimation, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(aboutRef, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  if (isInView) controls.start("visible");

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [0, 1], ["-20px", "20px"]);
  const parallaxY = useTransform(mouseY, [0, 1], ["-20px", "20px"]);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  // Throttle mouse parallax for smoother performance
  let lastMove = 0;
  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastMove < 16) return; // ~60fps
    lastMove = now;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Social media data
  const socialLinks = [

    {
      name: "Gmail",
      icon: FaEnvelope,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=olegmerc01@gmail.com",
      color: "from-red-500 to-red-600",
      hoverColor: "from-red-400 to-red-500",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "www.linkedin.com/in/oleg-mercalov-a62592389",
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700"
    },

    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/olegmercalov01",
      color: "from-gray-700 to-gray-800",
      hoverColor: "from-gray-600 to-gray-700",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800"
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <AnimatedBackground />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-amber-400/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      {/* Title with Enhanced Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 1,
              type: "spring",
              damping: 15,
              stiffness: 150
            }
          },
        }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 sm:mb-12 text-center relative z-10"
        style={{
          textShadow: "0 8px 32px rgba(0,0,0,0.5)",
          letterSpacing: "0.03em"
        }}
      >
        <motion.span
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            textShadow: [
              "0 8px 32px rgba(0,0,0,0.5)",
              "0 8px 32px rgba(6, 182, 212, 0.8)",
              "0 8px 32px rgba(0,0,0,0.5)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, #ffffff, #06b6d4, #3b82f6, #ffffff)",
            backgroundSize: "300% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          About me:
        </motion.span>
      </motion.h1>

      {/* Main Content Frame with Enhanced Effects */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
              duration: 1.2,
              type: "spring",
              damping: 20,
              stiffness: 100
            }
          },
        }}
        style={{ x: parallaxX, y: parallaxY, willChange: 'transform' }}
        className="relative z-10 w-full max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl sm:rounded-[2rem] shadow-2xl border border-amber-500/20 p-4 sm:p-6 md:p-8 lg:p-12 hover:border-amber-400/30 transition-all duration-500"
      >
        {/* Glowing Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl sm:rounded-[2rem] bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-600/20 opacity-0"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12">

          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-6 lg:w-1/3">

            {/* Profile Image with Enhanced Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    delay: 0.3,
                    duration: 1,
                    type: "spring",
                    damping: 20,
                    stiffness: 200
                  }
                },
              }}
              className="relative group"
            >
              {/* Multiple Glowing Rings */}
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 opacity-25 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-400 to-amber-500 opacity-25 blur-lg"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />



              {/* Floating Elements Around Image */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Enhanced Steve Jobs Quote */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    delay: 0.6,
                    duration: 1,
                    type: "spring"
                  }
                },
              }}
              className="w-full max-w-sm"
            >
              <motion.div
                className="bg-gray-900/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-500/30 shadow-2xl relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(6, 182, 212, 0.4)",
                  borderColor: "rgba(6, 182, 212, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    backgroundSize: ["20px 20px", "30px 30px"]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 1px)"
                  }}
                />

                <motion.div
                  className="text-amber-400 text-xs font-mono mb-2 sm:mb-3 opacity-70 flex items-center"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaQuoteLeft className="mr-2 " />
                  // Education
                </motion.div>

                <motion.p
                  className="text-gray-200 text-xs sm:text-sm leading-relaxed font-medium italic mb-2 text-28 sm:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                      <p className="text-22">"State university of Infrastructure and Technology"</p>
                  <p className="text-22" >
                    2016-2020
                  </p>
              
                </motion.p>

                <motion.div
                  className="text-amber-400 text-xs font-mono opacity-70 flex items-center justify-end"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  // - Oleg Mercalov
                  <FaQuoteRight className="ml-2" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8, type: "spring" } },
              }}
              className="w-full flex justify-center lg:justify-start"
            >
              <ResumeButton />
            </motion.div>
          </div>

          {/* Right Section - Scrollable Content */}
          <div className="flex-1 lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.8, type: "spring" } },
              }}
              className="h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600/50 scrollbar-track-transparent pr-2"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* About Me Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, type: "spring" } },
                  }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 mb-3 sm:mb-4 flex items-center">
                    <span className="mr-2 sm:mr-3">#</span>
                    <span className="gradient-text">About Me</span>
                    <span className="ml-2 sm:mr-3">#</span>
                  </h2>
                  <div className="text-gray-200 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      I'm <span className="font-bold text-white">Oleg Mercalov</span>, a Full Stack Developer with over 6 years of experience designing, building, and
                      deploying scalable web applications.  My expertise spans<span className="font-semibold text-cyan-200" > JavaScript, Python, PHP and frameworks such as React, Next.js, Vue.js, and Nuxt.js </span>
                      with a strong focus on creatingb performant, secure, and maintainable systems.
                    </p>
                    <p>
                      I’m skilled in <span className="text-amber-200 font-semibold">Node.js, Express.js, Django, and RESTful API development, </span>as well as <span className="text-amber-200 font-semibold"> Database, design, and optimizations using MongoDB and PostgreSQL. </span> I’ve delivered solutions that integrate <span className="text-amber-200 font-semibold">AI, automation, and cloud platforms
                      (AWS, Azure, GCP) </span>to streamline business processes and improve user experience.
                    </p>
                    <p>
                      I take pride in combining clean engineering practices with practical innovation and elping teams and clients  turn complex ideas into reliable, efficient products that scale with their growth.
                    </p>
                    <p>
                      I am constantly exploring new ideas and possibilities, always seeking ways to transform our customers' desires into meaningful experiences.
                    </p>
                    <p>
                      Every choice I make prioritizes comfort, convenience, and satisfaction because I believe that exceptional design is not just about aesthetics but also about seamlessly integrating into people's lives. My objective is to ensure that every interaction is thoughtful, effortless, and authentically human.
                    </p>
                  </div>
                </motion.div>


                
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: 2.3,
                duration: 0.8,
                type: "spring"
              }
            },
          }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: 2.4 + index * 0.1,
                      duration: 0.6,
                      type: "spring"
                    }
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {/* Button Container */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${social.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Icon */}
                    <IconComponent className="text-white text-lg sm:text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300" />

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/30 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Tooltip - only show for hovered button */}
                  {hoveredSocial === index && (
                    <div
                      className="absolute left-1/2 top-full mt-3 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-20 shadow-lg border border-cyan-500"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {social.name}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/90 border-l border-t border-cyan-500 rotate-45"></div>
                    </div>
                  )}

                  {/* Floating Particles Around Button */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    animate={{
                      y: [0, -5, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #38bdf8 0%, #6366f1 50%, #a78bfa 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-weight: 800;
          background-size: 200% 100%;
          animation: gradientShift 4s ease-in-out infinite;
        }
        
        .highlight-text {
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-weight: 700;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(6, 182, 212, 0.6), rgba(59, 130, 246, 0.6));
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8));
        }
      `}</style>
    </section>
  );
}