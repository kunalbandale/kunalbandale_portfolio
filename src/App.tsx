import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Research from './components/Research';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Activities />
        <Projects />
        <Research />
        <Blogs />
        <Contact />
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;