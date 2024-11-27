import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Brain, BookText, Mail, Newspaper } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Kunal Bandale
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#about" icon={<Code className="w-4 h-4" />} text="Projects" />
              <NavLink href="#ml" icon={<Brain className="w-4 h-4" />} text="Research" />
              <NavLink href="#blogs" icon={<Newspaper className="w-4 h-4" />} text="Blogs" />
              <NavLink href="#contact" icon={<Mail className="w-4 h-4" />} text="Contact" />
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <MobileNavLink href="#about" text="Projects" />
          <MobileNavLink href="#ml" text="Research" />
          <MobileNavLink href="#blogs" text="Blogs" />
          <MobileNavLink href="#contact" text="Contact" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </a>
);

const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
  >
    {text}
  </a>
);

export default Navbar;