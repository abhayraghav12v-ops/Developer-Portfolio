import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'MERN Blog Application',
    description: 'A full-stack blogging platform built using MongoDB, Express.js, React.js, and Node.js. The application allows users to create, edit, and manage blog posts. It includes secure JWT authentication, comments, likes, image uploads using Cloudinary, and an admin management system.',
    image: 'https://images.pexels.com/photos/10894404/pexels-photo-10894404.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/abhayraghav12v-ops/BLOG-APPLICATION',
    liveDemo: 'https://mern-blog-demo.vercel.app',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'A  e-commerce web application with product browsing, cart management, checkout functionality, and an admin portal for managing products. ',
    image: 'https://images.pexels.com/photos/10894404/pexels-photo-10894404.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/abhayraghav12v-ops/EcommerceClone',
    liveDemo: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    title: 'Chatterly',
    description: 'A modern communication application developed as a team project. I contributed as a UI Designer and worked on creating a clean and user-friendly interface. The platform focuses on secure communication and includes end-to-end encryption concepts.',
    image: 'https://images.pexels.com/photo-10894404/pexels-photo-10894404.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'JavaScript', 'UI/UX Design'],
    github: 'https://github.com/ashutos-h-tiwari/Chatterly',
    liveDemo: 'https://chatterly-demo.vercel.app',
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
              My Work
            </motion.span>
            <h2 className="section-title mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mt-4 rounded-full" />
            <p className="section-subtitle mt-6">
              A showcase of my best work, demonstrating my skills in building modern web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="relative glass-card overflow-hidden rounded-2xl h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-900 to-dark-900"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-accent-purple/20 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-purple flex items-center justify-center">
                          <Folder className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary-500 to-accent-purple rounded-full text-white">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                     <p className="text-gray-400 text-sm leading-relaxed mb-4">
                       {project.description}
                     </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-md border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all border border-white/10 hover:border-white/20"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl text-white font-medium text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-primary-500/30 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-accent-purple/0 rounded-3xl group-hover:from-primary-500/20 group-hover:via-transparent group-hover:to-accent-purple/20 blur-xl transition-all duration-500 -z-10 opacity-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/abhayraghav12v-ops"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
