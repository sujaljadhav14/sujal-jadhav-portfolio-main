import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Cpu, Globe } from 'lucide-react';

const projects = [
 
  {
  title: 'Voice-Based AI Virtual Assistant',
  description: 'A multifunctional virtual assistant built using Python that responds to voice commands to perform a wide range of tasks including web search, application control, system commands, and weather updates. It integrates speech recognition, text-to-speech, and automation features to simulate a real-time AI companion.',
  tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'webbrowser', 'smtplib'],
  github: '',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
  category: 'AI/ML'
},
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard. I created this for the company SVTechShant in a hackathon.',
    tech: ['PHP','MYSQL','Razorpay','Javascript'],
    github: 'https://github.com/Sujal209/ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center',
    category: 'Full Stack'
  },
 
  {
  title: 'Drive App – File Storage System',
  description: 'A cloud-based file management system inspired by Google Drive. Users can upload, preview, and manage files in a streamlined interface. Built with Node.js and Express.js to handle server-side logic and file handling efficiently.',
  tech: ['Node.js', 'Express.js', 'Multer', 'MongoDB', 'JavaScript'],
  github: '', 
  image: 'https://xiphcyber.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5d32b03aaf4a7da502aef3d7b1556f5dd325d7ac/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lKT0RBd1BnWTZCa1ZVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--7395758b5be5bc3757e2467b4021010341d47265/22.21_XIPH_Cloud%20storage.jpg',
  category: 'Web App'
}
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
        className="relative h-48 overflow-hidden"
      >
        <div className="absolute top-4 right-4 z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-medium flex items-center gap-2"
          >
            {project.category === 'AI/ML' ? <Cpu size={14} /> : <Code2 size={14} />}
            {project.category}
          </motion.span>
        </div>
        
        {/* Spotify Logo Overlay */}
        {project.title.toLowerCase().includes('spotify') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-10 bg-black/20"
          >
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg 
                className="w-12 h-12 text-green-500" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
          </motion.div>
        )}
        
        {/* AI Chat Assistant Logo Overlay */}
        {project.title.toLowerCase().includes('ai') && project.title.toLowerCase().includes('chat') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-10 bg-black/20"
          >
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg 
                className="w-12 h-12 text-blue-500" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
          </motion.div>
        )}

        {/* E-Commerce Platform Logo Overlay */}
        {project.title.toLowerCase().includes('e-commerce') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-10 bg-black/20"
          >
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg 
                className="w-12 h-12 text-orange-500" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </div>
          </motion.div>
        )}
        
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
        className="p-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + techIndex * 0.1 }}
              className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
          className="flex gap-4"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer active:bg-amber-700 hover:shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} />
            <span>Code</span>
          </motion.a>

          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Showcasing my latest work in web development, AI/ML, and more
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="w-20 h-1 bg-amber-500 mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/sujaljadhav14"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg transition-all duration-300 cursor-pointer active:bg-amber-700 hover:shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
            <span>View More Projects</span>
            <ExternalLink size={16} className="ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 