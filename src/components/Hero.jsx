import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';

const FloatingElement = ({ delay, children, className }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-20, 0, -20] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-0 dark:opacity-10"></div>
      </div>

      {/* Floating elements */}
      <FloatingElement delay={0} className="absolute top-1/4 left-4 md:left-1/4 text-4xl md:text-6xl opacity-20 dark:opacity-10 pointer-events-none">⚛️</FloatingElement>
      <FloatingElement delay={1} className="absolute top-1/3 right-4 md:right-1/4 text-4xl md:text-6xl opacity-20 dark:opacity-10 pointer-events-none">🤖</FloatingElement>
      <FloatingElement delay={2} className="absolute bottom-1/4 left-4 md:left-1/3 text-4xl md:text-6xl opacity-20 dark:opacity-10 pointer-events-none">🚀</FloatingElement>
      <FloatingElement delay={3} className="absolute top-1/2 right-4 md:right-1/3 text-4xl md:text-6xl opacity-20 dark:opacity-10 pointer-events-none">💻</FloatingElement>

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-amber-100 dark:bg-primary-500/20 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-amber-600 dark:text-primary-400">Welcome to my portfolio</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-primary-600 dark:to-primary-400">
                Sujal Jadhav
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack Developer & AI/ML Enthusiast
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Crafting intelligent, elegant web experiences with AI & code.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download
                className="btn btn-primary flex items-center gap-2 relative overflow-hidden group bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white dark:from-primary-600 dark:to-primary-400 dark:hover:from-primary-700 dark:hover:to-primary-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="btn btn-secondary group relative overflow-hidden bg-amber-50 hover:bg-amber-100 text-gray-700 border-2 border-amber-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 dark:from-primary-400/30 dark:to-primary-600/30 rounded-2xl blur-3xl"></div>
              <div className="relative w-full h-full bg-amber-50/80 dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 dark:from-primary-400 dark:to-primary-600 shadow-lg flex items-center justify-center p-1">
                    <div className="w-full h-full rounded-full bg-amber-50 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;