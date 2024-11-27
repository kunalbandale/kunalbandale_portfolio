import React from 'react';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Latest Blog Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@bandalekunal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ title, description, date, readTime, link }: BlogPost) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-1" />
          <span>{readTime} min read</span>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
      >
        Read More
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
);

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: number;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Learn CSS — I",
    description: "HTML stands for Hypertext Markup Language and is used to structure web pages. CSS, which stands for Cascading Style Sheets, is utilized for styling and designing websites. It helps in making websites responsive and giving them a premium look. Simply put, CSS is used for styling web content.",
    date: "Nov 21, 2024",
    readTime: 4,
    link: "https://medium.com/@bandalekunal/learn-css-i-98fbba1e377f"
  },
  {
    title: "Introduction to APIs 🧩",
    description: "Wikipedia defines an API is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software. ",
    date: "Nov 21, 2024",
    readTime: 5,
    link: "https://medium.com/@bandalekunal/introduction-to-apis-53f381909368"
  },
  {
    title: "🐍 Python 3 Cheatsheet",
    description: "Python is one of the most versatile and beginner-friendly programming languages out there. Whether you’re new to coding or an experienced developer, this cheatsheet is designed to help you quickly reference key concepts, syntax, and best practices. From the basics to advanced topics, it’s all here in one place to streamline your coding experience. Keep it handy for those moments when you need a quick reminder or want to refresh your skills.",
    date: "Nov 21, 2024",
    readTime: 4,
    link: "https://medium.com/@bandalekunal/python-3-cheatsheet-192f89dfc20b"
  }
];

export default Blogs;