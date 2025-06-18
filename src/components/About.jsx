import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Trophy, Award, Star, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Won first place in a national AI hackathon for developing an innovative chatbot solution",
    year: "2023"
  },
  {
    icon: Award,
    title: "Best Project Award",
    description: "Recognized for developing a cutting-edge AI application that improved user engagement by 40%",
    year: "2022"
  },
  {
    icon: Star,
    title: "Top Performer",
    description: "Awarded for consistently delivering high-quality code and innovative solutions",
    year: "2021"
  },
  {
    icon: Target,
    title: "Innovation Award",
    description: "Recognized for implementing novel AI techniques in web development",
    year: "2020"
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               I'm Sujal Jadhav, a passionate developer currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science.
                With a solid foundation in web development (MERN stack) and a growing passion for AI/ML, 
                I enjoy creating real-world applications that are not just functional, but also meaningful. 
                My journey in tech is fueled by curiosity and a commitment to continuous learning and innovation.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Expertise</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Frontend Development</span>
                  <span className="text-gray-700 dark:text-gray-300">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-amber-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">Backend Development</span>
                  <span className="text-gray-700 dark:text-gray-300">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-amber-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">AI/ML</span>
                  <span className="text-gray-700 dark:text-gray-300">60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-amber-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <div>
               </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">B.E.- Artificial Intelligence and Data Science</h4>
                <p className="text-gray-600 dark:text-gray-300">Terna Engineering College, Navi Mumbai - 2024-2027</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Diploma - Computer Engineering</h4>
                <p className="text-gray-600 dark:text-gray-300">Vidyalankar Polytechnic, Mumbai - 2021-2024</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">SSC</h4>
                <p className="text-gray-600 dark:text-gray-300">Thane -2021</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Awards</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Vidyalankar Polytechnic Hackathon Winner</h4>
                <p className="text-gray-600 dark:text-gray-300">Won first place in the Vidyalankar Polytechnic hackathon for innovative project development</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 