import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Target, Award, TrendingUp, BookOpen, Terminal } from 'lucide-react';

const journeySteps = [
  {
    title: 'Started Learning Web Development',
    description: 'Began with HTML, CSS, and JavaScript fundamentals',
    icon: Terminal,
  },
  {
    title: 'Learning React.js',
    description: 'Built multiple projects using React and modern JavaScript',
    icon: Code,
  },
  {
    title: 'Full-Stack Development',
    description: 'Expanded to backend with Node.js, Express, and MongoDB',
    icon: Target,
  },
  {
    title: 'Currently: DSA Mastery',
    description: 'Practicing Data Structures & Algorithms with Java',
    icon: TrendingUp,
  },
];

const codingProfiles = [
  {
    name: 'LeetCode',
    icon: Award,
    link: 'https://leetcode.com/u/AbhayRaghav45/',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function CodingJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="journey"
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
              My Progress
            </motion.span>
            <h2 className="section-title mt-2">
              Coding <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                My Software Development Journey
              </h3>

              <div className="space-y-6">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      {index < journeySteps.length - 1 && (
                        <div className="absolute top-12 left-1/2 w-px h-6 bg-gradient-to-b from-primary-500/50 to-transparent -translate-x-1/2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Current Focus Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-purple/10 rounded-3xl blur-3xl" />
              <div className="relative glass-card p-8 rounded-3xl">
                {/* Main Focus */}
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-purple flex items-center justify-center"
                  >
                    <BookOpen className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Currently Mastering
                  </h3>
                  <p className="gradient-text text-2xl font-bold">
                    Data Structures & Algorithms
                  </p>
                  <p className="text-gray-400 mt-2">with Java</p>
                </div>

                {/* Progress Info */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                      I'm actively practicing coding problems and improving my problem-solving
                      skills. This helps me write more efficient code and prepares me for
                      technical interviews.
                    </p>
                  </div>
                </div>

                {/* Coding Profiles */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Coding Platforms</h4>
                  <div className="flex flex-wrap gap-3">
                    {codingProfiles.map((profile) => (
                      <motion.a
                        key={profile.name}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all group"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${profile.color} flex items-center justify-center`}>
                          <profile.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {profile.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <blockquote className="text-gray-400 text-center italic">
                    "The only way to learn programming is by writing code."
                  </blockquote>
                  <p className="text-primary-400 text-center text-sm mt-2">
                    - Dennis Ritchie
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
