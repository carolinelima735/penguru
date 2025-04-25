import React, { useState } from 'react';
import { commands } from '../data/commands';
import { CommandType } from '../types';
import Terminal from './Terminal';

const CommandSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('navigation');
  const [selectedCommand, setSelectedCommand] = useState<CommandType>(
    commands.find(cmd => cmd.category === 'navigation') || commands[0]
  );

  const categories = [
    { id: 'navigation', name: 'Navigation', icon: '🧭' },
    { id: 'file', name: 'File Operations', icon: '📄' },
    { id: 'permissions', name: 'Permissions', icon: '🔒' },
    { id: 'system', name: 'System Info', icon: '🖥️' },
  ];

  const filteredCommands = commands.filter(cmd => cmd.category === activeCategory);

  return (
    <section id="commands" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Linux Commands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these essential Linux commands to navigate the terminal like a pro.
            Click on any command to see its syntax and examples.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                const newCommand = commands.find(cmd => cmd.category === category.id);
                if (newCommand) setSelectedCommand(newCommand);
              }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Command List */}
          <div className="md:col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-700 text-white py-3 px-4 font-medium">
              Available Commands
            </div>
            <div className="divide-y divide-gray-200">
              {filteredCommands.map((cmd) => (
                <button
                  key={cmd.name}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                    selectedCommand.name === cmd.name ? 'bg-gray-100 border-l-4 border-teal-500' : ''
                  }`}
                  onClick={() => setSelectedCommand(cmd)}
                >
                  <div className="font-mono font-medium text-teal-700">{cmd.name}</div>
                  <div className="text-sm text-gray-600">{cmd.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Command Details */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="font-mono bg-gray-200 text-teal-700 px-2 py-1 rounded mr-2">{selectedCommand.name}</span>
                  <span className="text-gray-700">{selectedCommand.description}</span>
                </h3>
                
                <div className="mt-4">
                  <h4 className="text-gray-600 font-medium mb-1">Syntax:</h4>
                  <div className="font-mono bg-gray-100 p-2 rounded">{selectedCommand.syntax}</div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-gray-600 font-medium mb-1">Example:</h4>
                  <div className="font-mono bg-gray-100 p-2 rounded">{selectedCommand.example}</div>
                </div>
              </div>
              
              {/* Terminal Preview */}
              <div className="mt-6">
                <h4 className="text-gray-600 font-medium mb-2">Try it:</h4>
                <Terminal
                  command={selectedCommand.example}
                  output={selectedCommand.output || 'Command executed successfully'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandSection;