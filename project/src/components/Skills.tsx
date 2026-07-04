import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'html5', color: 'from-orange-500 to-orange-600' },
      { name: 'CSS3', icon: 'css3', color: 'from-blue-400 to-blue-500' },
      { name: 'JavaScript', icon: 'javascript', color: 'from-yellow-400 to-yellow-500' },
      { name: 'React.js', icon: 'react', color: 'from-cyan-400 to-cyan-500' },
      { name: 'Vite', icon: 'vite', color: 'from-purple-400 to-purple-500' },
      { name: 'Tailwind', icon: 'tailwind', color: 'from-teal-400 to-teal-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodejs', color: 'from-green-500 to-green-600' },
      { name: 'Express.js', icon: 'express', color: 'from-gray-400 to-gray-500' },
      { name: 'REST APIs', icon: 'api', color: 'from-blue-400 to-blue-500' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'mongodb', color: 'from-green-500 to-green-600' },
      { name: 'MongoDB Atlas', icon: 'atlas', color: 'from-green-400 to-green-500' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'java', color: 'from-red-500 to-orange-500' },
      { name: 'JavaScript', icon: 'javascript', color: 'from-yellow-400 to-yellow-500' },
      { name: 'Python', icon: 'python', color: 'from-blue-400 to-yellow-400' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: 'git', color: 'from-orange-500 to-orange-600' },
      { name: 'GitHub', icon: 'github', color: 'from-gray-600 to-gray-700' },
      { name: 'VS Code', icon: 'vscode', color: 'from-blue-500 to-blue-600' },
      { name: 'Postman', icon: 'postman', color: 'from-orange-500 to-orange-600' },
      { name: 'Cloudinary', icon: 'cloudinary', color: 'from-blue-400 to-cyan-400' },
    ],
  },
];

const currentlyLearning = [
  { name: 'Data Structures & Algorithms', icon: 'DSA', color: 'from-primary-500 to-primary-600' },
  { name: 'Artificial Intelligence (AI)', icon: 'AI', color: 'from-accent-purple to-accent-cyan' },
  { name: 'Machine Learning', icon: 'ML', color: 'from-green-500 to-teal-500' },
  { name: 'Cloud Computing', icon: 'Cloud', color: 'from-cyan-400 to-blue-400' },
  { name: 'System Design', icon: 'SD', color: 'from-accent-purple to-primary-500' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="relative py-24 bg-dark-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
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
              What I Know
            </motion.span>
            <h2 className="section-title mt-2">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mt-4 rounded-full" />
            <p className="section-subtitle mt-6">
              A collection of technologies and tools I've worked with to build modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group relative"
                    >
                      <div className="relative flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Currently <span className="gradient-text">Learning</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity`} />
                  <div className="relative glass-card px-6 py-4 flex items-center gap-3 hover:border-white/30 transition-all">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {item.icon}
                    </div>
                    <span className="text-white font-medium">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
