import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ degree, institution, year, achievements }: EducationItem) => (
  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{degree}</h3>
        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{institution}</p>
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{year}</span>
        </div>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <Award className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2 mt-1" />
              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  achievements: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology",
    year: "2022-2025",
    achievements: [
      "Specialization in Machine Learning",
      "GPA: 3.9/4.0",
      "Research Assistant in NLP Lab",
      "Teaching Assistant for ML courses"
    ]
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Gramin Technical & Management Campus",
    year: "2019-2022",
    achievements: [
      "First Class Honours",
      "Department Gold Medalist",
      "Best Undergraduate Thesis Award",
      "President of Programming Club"
    ]
  }
];

export default Education;