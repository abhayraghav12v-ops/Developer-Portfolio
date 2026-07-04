import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Award, Target } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'Pursuing Bachelor of Technology',
    duration: '2023 - Present',
    description: 'Currently pursuing a comprehensive computer science curriculum with specialization in AI and Machine Learning, focusing on building a strong foundation in software development and emerging technologies.',
    subjects: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Software Engineering',
      'Design & Analysis of Algorithms',
    ],
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'Full-Stack Development',
    description: 'Built multiple MERN stack projects demonstrating proficiency in end-to-end web development',
    icon: Award,
  },
  {
    title: 'DSA Practice',
    description: 'Actively solving coding problems to improve problem-solving skills and algorithmic thinking',
    icon: Target,
  },
  {
    title: 'Continuous Learning',
    description: 'Committed to learning new technologies and staying updated with industry trends',
    icon: BookOpen,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      className="relative py-24 bg-dark-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              My Journey
            </motion.span>
            <h2 className="section-title mt-2">
              <span className="gradient-text">Education</span> & Qualifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mt-4 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-purple to-transparent md:-translate-x-1/2" />

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full md:-translate-x-1/2 ring-4 ring-dark-900"
                />

                {/* Content Card */}
                <div className="relative md:w-[calc(50%-2rem)] md:ml-auto ml-8 mb-8">
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary-500/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple flex items-center justify-center shrink-0">
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium">{edu.specialization}</p>
                        <p className="text-gray-500 text-sm">{edu.duration}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Subjects */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-400" />
                        Key Subjects
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.subjects.map((subject, idx) => (
                          <motion.div
                            key={subject}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: 0.5 + idx * 0.05 }}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                            {subject}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Key <span className="gradient-text">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 text-center hover:border-primary-500/30 transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
