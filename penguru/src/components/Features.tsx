import React from 'react';
import { BookOpen, Code, Clock, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-teal-700" />,
      title: 'Practical Learning',
      description: 'Learn Linux commands through practical examples and real-world scenarios.'
    },
    {
      icon: <Code className="w-12 h-12 text-teal-700" />,
      title: 'Interactive Terminal',
      description: 'Practice commands in our interactive terminal simulator without risk.'
    },
    {
      icon: <Clock className="w-12 h-12 text-teal-700" />,
      title: 'Learn at Your Pace',
      description: 'Self-paced tutorials that fit your schedule and learning style.'
    },
    {
      icon: <Users className="w-12 h-12 text-teal-700" />,
      title: 'Community Support',
      description: 'Join our community of Linux enthusiasts to share and learn together.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Learn With Penguru</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our approach to teaching Linux is direct, practical, and designed for rapid learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;