import React from 'react';
import { BookOpen, Terminal, Code, Server, ArrowRight } from 'lucide-react';

const LearningPath: React.FC = () => {
  const steps = [
    {
      icon: <BookOpen className="w-10 h-10 text-orange-500" />,
      title: 'Learn the Basics',
      description: 'Start with essential commands and understand the Linux file system hierarchy.'
    },
    {
      icon: <Terminal className="w-10 h-10 text-orange-500" />,
      title: 'Master the Terminal',
      description: 'Become proficient with the command line interface and shell scripting.'
    },
    {
      icon: <Code className="w-10 h-10 text-orange-500" />,
      title: 'Automate with Scripts',
      description: 'Create shell scripts to automate repetitive tasks and boost productivity.'
    },
    {
      icon: <Server className="w-10 h-10 text-orange-500" />,
      title: 'Advanced System Management',
      description: 'Learn system administration, service management, and network configuration.'
    }
  ];

  return (
    <section id="learn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Learning Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our structured learning path to go from Linux beginner to command line ninja.
          </p>
        </div>

        <div className="relative">
          {/* Desktop version with connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-6 shadow-lg mb-6 relative">
                  {step.icon}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#commands" 
            className="inline-block bg-teal-700 hover:bg-teal-800 text-white py-3 px-8 rounded-lg transition-colors text-lg font-medium"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;