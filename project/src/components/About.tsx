import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, GraduationCap, Target, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'CSE Student',
    description: 'B.Tech in Computer Science Engineering with specialization in AI & ML',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Passionate about solving complex problems with efficient solutions',
  },
  {
    icon: Sparkles,
    title: 'Quick Learner',
    description: 'Continuously learning and adapting to new technologies',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative py-24 bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 text-lg font-medium"
            >
              Get To Know
            </motion.span>
            <h2 className="section-title mt-2">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 rounded-3xl blur-3xl" />

                {/* Main Card */}
                <div className="relative glass-card p-8 rounded-3xl">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple p-1">
                    <div className="w-full h-full rounded-full bg-dark-700 flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4 text-white">
                    Abhay Raghav
                  </h3>

                  <p className="text-gray-400 text-center mb-6">
                    Full-Stack Developer
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold gradient-text">3+</div>
                      <div className="text-sm text-gray-400 mt-1">Projects</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <div className="text-sm text-gray-400 mt-1">Technologies</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold gradient-text">1+</div>
                      <div className="text-sm text-gray-400 mt-1">Years Learning</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-purple rounded-2xl opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-accent-cyan to-primary-500 rounded-2xl opacity-20 blur-xl"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Building the Future,{' '}
                <span className="gradient-text">One Line at a Time</span>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p>
                  I'm a B.Tech Computer Science Engineering student specializing in
                  Artificial Intelligence and Machine Learning, with a strong passion
                  for full-stack web development. I love building real-world web
                  applications that solve meaningful problems.
                </p>
                <p>
                  My journey in software development has led me to work with modern
                  web technologies including (MongoDB, Express.js, React.js, Node.js). I enjoy crafting                         clean, efficient code and creating intuitive user experiences.
                </p>
                <p>
                  Beyond web development, I'm actively sharpening my problem-solving
                  skills through Data Structures and Algorithms using Java. I believe
                  in continuous learning and staying updated with the latest
                  technologies and industry trends.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-white">Current Focus:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    Mastering Data Structures and Algorithms with Java
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    Hands-on experience with backend development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    Exploring System Design fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    Learning AI and Machine Learning technologies
                  </li>
                </ul>
              </div>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 glass-card text-center hover:border-primary-500/30 transition-colors"
                  >
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-primary-400" />
                    <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
