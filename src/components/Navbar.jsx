import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effects on desktop (>= 1024px)
      if (window.innerWidth >= 1024) {
        const shouldBeScrolled = window.scrollY > 50;
        if (shouldBeScrolled !== scrolled) {
          setScrolled(shouldBeScrolled);
        }
      }
    };

    // Initial check for desktop
    if (window.innerWidth >= 1024) {
      handleScroll();
    } else {
      setScrolled(false);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      html.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={
          `fixed top-0 left-0 right-0 z-50 shadow-md will-change-transform bg-white dark:bg-gray-900`
        }
        style={{
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Left Side - Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="text-[#3b82f6]" size={24} />
                ) : (
                  <Menu className="text-[#3b82f6]" size={24} />
                )}
              </motion.button>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <motion.a
                href="#home"
                className="text-xl font-bold text-[#3b82f6] select-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Sujal Jadhav
              </motion.a>
            </div>

            {/* Right Side - Theme Toggle + Desktop Nav */}
            <div className="flex items-center">
              <div className="hidden lg:flex items-center space-x-8 mr-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative text-gray-500 dark:text-gray-300 hover:text-[#3b82f6] transition-colors select-none"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3b82f6]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="text-[#3b82f6]" size={20} />
                ) : (
                  <Moon className="text-[#3b82f6]" size={20} />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 right-0 top-16 lg:hidden z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg"
              style={{
                maxHeight: 'calc(100vh - 4rem)',
                overflowY: 'auto'
              }}
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col py-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-4 text-base text-gray-700 dark:text-gray-300 hover:text-[#3b82f6] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors select-none border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
