import React from 'react';
import { Code, Database, Brain, Terminal } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills, icon: Icon }: SkillCategory) => (
  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ElementType;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Redux", "HTML/CSS"],
    icon: Code
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    icon: Database
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"],
    icon: Brain
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Kubernetes", "Agile"],
    icon: Terminal
  }
];

export default Skills;