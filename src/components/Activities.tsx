import React from 'react';
import { Users, Trophy, Lightbulb, Heart } from 'lucide-react';

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Clubs & Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivityCard = ({ title, role, description, icon: Icon }: Activity) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-purple-600 dark:text-purple-400">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

interface Activity {
  title: string;
  role: string;
  description: string;
  icon: React.ElementType;
}

const activities: Activity[] = [
  {
    title: "AI Research Club",
    role: "President",
    description: "Led weekly discussions on latest AI papers, organized workshops, and mentored junior members in research projects.",
    icon: Lightbulb
  },
  {
    title: "Competitive Programming",
    role: "Team Lead",
    description: "Represented university in ACM ICPC, secured top positions in multiple coding competitions.",
    icon: Trophy
  },
  {
    title: "Tech Community",
    role: "Community Manager",
    description: "Organized tech meetups, hackathons, and workshops reaching over 1000+ students.",
    icon: Users
  },
  {
    title: "Open Source",
    role: "Contributor",
    description: "Active contributor to major open source projects in ML and web development.",
    icon: Heart
  }
];

export default Activities;