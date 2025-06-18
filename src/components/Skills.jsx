import { motion } from 'framer-motion';
import { Code2, Cpu, Github } from 'lucide-react';

const skills = {
  languages: [
    { name: 'Python', icon: '🐍', level: 80 },
    { name: 'JavaScript', icon: '⚡', level: 75 },
    { name: 'Java', icon: '☕', level: 70 },
  { name: 'C++', icon: '🔧', level: 65 },
  { name: 'HTML', icon: '📄', level: 85 },
  { name: 'CSS', icon: '🎨', level: 80 },
  { name: 'SQL', icon: '🗄️', level: 75 },
  ],
  frameworks: [
    { name: 'React.js', icon: '⚛️', level: 80 },
    { name: 'Node.js', icon: '🌲', level: 75 },
    { name: 'Express.js', icon: '🚂', level: 75 },
    { name: 'Three.js', icon: '🌐', level: 60 },
    { name: 'Tailwind CSS', icon: '🌈', level: 70 },
    { name: 'LangChain', icon: '🔗', level: 75 },
  ],
  tools: [
    { name: 'GitHub', icon: '📦', level: 80 },
    { name: 'Vercel', icon: '☁️', level: 80 },
  { name: 'MongoDB', icon: '🍃', level: 75 },
  { name: 'Postman', icon: '📬', level: 70 },
  
  
  ],
};

const SkillBar = ({ name, icon, level }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{level}%</span>
    </div>
    <div className="h-2 bg-amber-100 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-primary-500 dark:to-primary-400"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="section relative overflow-hidden">
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
              <span className="text-amber-600 dark:text-primary-400">What I can do</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Code2 className="text-amber-600 dark:text-primary-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {skills.languages.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-amber-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="text-amber-600 dark:text-primary-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frameworks & Tools</h3>
              </div>
              <div className="space-y-4">
                {skills.frameworks.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-amber-50/90 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Github className="text-amber-600 dark:text-primary-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Others</h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 