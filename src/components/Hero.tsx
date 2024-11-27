import React from 'react';
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-fade-in">
            Full Stack Developer & ML Researcher
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up transition-colors duration-200">
            Passionate about creating innovative solutions through code and exploring the frontiers of machine learning.
            Published researcher and technical writer.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <SocialLink href="https://github.com/kunalbandale/" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/kunalbandale" icon={<Linkedin />} label="LinkedIn" />
            {/* <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" /> */}
          </div>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
          >
            <FileText className="w-5 h-5 mr-2" />
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all duration-200"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;