import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} kunalbandale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;