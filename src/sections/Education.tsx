import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    title: 'Senior Full Stack Developer | Self-employeed',
    description: ' - Architected and maintained RESTfulI APIs using Node.js, MongoDB, and PostgreSQL, implementing advanced caching and query optimization to boost performance by 45% and ensure long-term system stability. ',
    description1: ' - Implemented enterprise-grade authentication and authorization frameworks, including OAuth 2.0, JWT, and Passport.js to secure APIs and protect sensitive business data. ',
    description2: ' - Engineered data analytics modules leveraging Python (Pandas, NumPy), Express.js, and Google Places API, integrating MongoDB geospatial queries for real-time, precision-based processing and improving data handling efficiency by 40%.',
    year: 'Current - 09/2021',
    icon: <FaUniversity className="text-cyan-400" />,
  },
  {
    title: 'Fil Stack Developer | progforce',
    description: ' - Enhanced system reliability and scalability by implementing distributed architecture with Node.js and RabbitMQ, reducing downtime incidents by 20% and improving throughput under heavy workloads ',
    description1: ' - Transitioned application architecture from REST API to GraphQL, achieving faster data retrieval and reducing redundant API calls by 25%, improving developer efficiency.',
    description2: ' - Developed full-stack web application from inception using React and Node.js, optimizing user experience and proactively improving AWS infrastructure, which decreased deployment times by 25%.',
    description3: ' - Built and launched a catering platform with Python and Django, integrating Stripe for seamless payments and automating core operations, leading to a 10% reduction in manual workload. ',
    description4: ' - Engineered scalable front-end applications utilizing TypeScript and React; application performance improved by 30% and supported a 15% increase in concurrent users while maintaining zero downtime. ',
    year: '07/2021-05/2024',
    icon: <FaUniversity className="text-fuchsia-400" />,
  },
  {
    title: 'Web Developer | 8Kolo',
    description: ' - Engineered an interactive web application for PDF viewing and editing, while modernizing the company’s main website to enhance engagement and increase user retention by 30%.',
    description1: ' - Designed and executed A/B testing experiments for new product features, leveraging user analytics to guide product strategy and drive a 15% improvement in feature adoption. ',
    description2: ' - Built and optimized a fintech web platform using React, Next.js, and Node.js, enhancing UI responsiveness and streamlining AWS deployments to cut release times by 13%. ',
    description3: ' - Engineered scalable front-end applications utilizing TypeScript and React; application performance improved by 30% and supported a 25%increase in concurrent users while maintaining downtime ',
    description4: ' - Developed engaging client-side experiences using HTML, CSS Modules, and React, elevating user interactivity and maintaining responsive design across all major platforms.',
    year: '09/2019-03/2021',
    icon: <FaUniversity className="text-fuchsia-400" />,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, bounce: 0.4, duration: 0.9 + i * 0.1 },
  }),
};

export default function Education() {
  return (
    <section id="education" className="relative min-h-screen flex flex-col justify-center py-12 sm:py-16 bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 gradient-shimmer"
            style={{ background: 'linear-gradient(90deg, #06b6d4, #2563eb, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', color: 'transparent', backgroundClip: 'text' }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Professional Experience</span>
          </motion.h2>
          
          
        </motion.div>
        {/* Timeline */}
        <div className="relative flex flex-col gap-6 sm:gap-10 before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 sm:before:w-1 before:bg-gradient-to-b before:from-cyan-400/40 before:to-fuchsia-400/40 before:-translate-x-1/2">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.title}
              className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-10 px-4 sm:px-6 py-6 sm:py-8 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl ${i % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center md:items-start gap-2 min-w-[50px] sm:min-w-[60px]">
                <span className="text-2xl sm:text-3xl">{edu.icon}</span>
                <span className="block w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 animate-pulse" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{edu.title}</h3>
                <p className="text-gray-300 mb-2 text-base sm:text-lg">{edu.description}</p>
                <p className="text-gray-300 mb-2 text-base sm:text-lg">{edu.description1}</p>
                <p className="text-gray-300 mb-2 text-base sm:text-lg">{edu.description2}</p>
                <p className="text-gray-300 mb-2 text-base sm:text-lg">{edu.description3}</p>
                <p className="text-gray-300 mb-2 text-base sm:text-lg">{edu.description4}</p>
                <p className="text-gray-400 mb-2 text-xs sm:text-sm font-mono">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>




        
      </div>
      <style>{`
        .gradient-shimmer {
          background-size: 200% 100%;
          animation: shimmerMove 3s linear infinite;
        }
        @keyframes shimmerMove {
          0% { background-position: 0% 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>
    </section>
  );
} 