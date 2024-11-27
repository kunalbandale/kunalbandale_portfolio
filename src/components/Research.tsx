import React from 'react';
import { BookOpen, Award, FileText } from 'lucide-react';

const Research = () => {
  return (
    <section id="ml" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Research & Publications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {publications.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<BookOpen className="w-8 h-8 text-purple-600" />}
            number="15+"
            label="Research Papers"
          />
          <StatCard
            icon={<Award className="w-8 h-8 text-purple-600" />}
            number="5"
            label="Book Chapters"
          />
          <StatCard
            icon={<FileText className="w-8 h-8 text-purple-600" />}
            number="50+"
            label="Blog Articles"
          />
        </div>
      </div>
    </section>
  );
};

const PublicationCard = ({ title, journal, year, description, link }: Publication) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <span className="text-purple-600 font-semibold">{year}</span>
    </div>
    <p className="text-gray-600 text-sm mb-3">{journal}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-purple-600 hover:text-purple-700"
    >
      Read More
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const StatCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

interface Publication {
  title: string;
  journal: string;
  year: number;
  description: string;
  link: string;
}

const publications: Publication[] = [
  {
    title: "Deep Learning Approaches in Natural Language Processing",
    journal: "Journal of Artificial Intelligence Research",
    year: 2023,
    description: "A comprehensive survey of modern deep learning techniques in NLP applications.",
    link: "#"
  },
  {
    title: "Efficient Neural Architecture Search for Computer Vision",
    journal: "IEEE Transactions on Pattern Analysis",
    year: 2023,
    description: "Novel approach to automated neural network architecture design for vision tasks.",
    link: "#"
  },
  {
    title: "Transformer Models for Time Series Forecasting",
    journal: "Machine Learning Journal",
    year: 2022,
    description: "Adaptation of transformer architectures for complex time series prediction.",
    link: "#"
  },
  {
    title: "Federated Learning in Healthcare Applications",
    journal: "Nature Machine Intelligence",
    year: 2022,
    description: "Privacy-preserving machine learning techniques for healthcare data analysis.",
    link: "#"
  }
];

export default Research;