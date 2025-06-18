import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Medal } from 'lucide-react';

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

const Achievements = () => {
  return (
    <section id="achievements" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-0 dark:opacity-5"></div>
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-amber-100 dark:bg-primary-500/20 px-4 py-2 rounded-full mb-4"
            >
              <span className="text-amber-600 dark:text-primary-400">My Achievements</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Milestones & Recognition</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 dark:bg-gray-700 rounded-full">
                    <achievement.icon className="text-amber-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{achievement.title}</h3>
                      <span className="text-sm text-amber-600 dark:text-primary-400">{achievement.year}</span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-gray-700 px-6 py-3 rounded-full">
              <Medal className="text-amber-600 dark:text-primary-400" size={20} />
              <span className="text-amber-600 dark:text-primary-400">More achievements coming soon!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 