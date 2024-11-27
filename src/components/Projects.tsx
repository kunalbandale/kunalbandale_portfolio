import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tags, image, github, demo }: Project) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 space-x-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
          <Github className="w-6 h-6" />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
          <ExternalLink className="w-6 h-6" />
        </a>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning predictions",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Research Paper Generator",
    description: "NLP-based tool for automated research paper summarization",
    tags: ["NLP", "Python", "Transformers", "FastAPI"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Smart Blog Platform",
    description: "AI-enhanced blogging platform with content recommendations",
    tags: ["Next.js", "ML", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default Projects;