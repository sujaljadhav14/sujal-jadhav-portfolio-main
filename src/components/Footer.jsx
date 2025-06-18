import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ExternalLink, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const contactInfo = [
  { icon: Mail, text: 'sujal.jadhav2627@gmail.com', href: 'mailto:sujal.jadhav2627@gmail.com' },
  { icon: Phone, text: '+91 7019302197', href: 'tel:+91 70193 02197' },
  { icon: MapPin, text: 'Mumbai, India' }
];

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/sujaljadhav14',
    label: 'GitHub',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/sujal-jadhav-2b3b3b302/',
    label: 'LinkedIn',
    color: 'hover:text-blue-600'
  },
  { 
    icon: Twitter, 
    href: '',
    label: 'Twitter',
    color: 'hover:text-sky-500'
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-100 dark:border-gray-700">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-primary-600 dark:to-primary-400">
              Sujal Jadhav
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
             Full Stack Developer, AI/ML Enthusiast, and Tech Explorer crafting intelligent, elegant web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm flex items-center group"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-sm flex items-center group"
                  >
                    <item.icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Me</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`text-gray-600 dark:text-gray-300 ${social.color} transition-all flex items-center group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  <span className="text-sm">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-200 dark:border-gray-700/50 mt-8 pt-8 flex justify-center items-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
            © {new Date().getFullYear()} Sujal Jadhav
            
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 