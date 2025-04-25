import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  command?: string;
  output?: string;
  autoType?: boolean;
  delay?: number;
}

const Terminal: React.FC<TerminalProps> = ({ 
  command = 'ls -la', 
  output = 'total 32\ndrwxr-xr-x  5 user staff  160 Oct 15 10:46 .\ndrwxr-xr-x  3 user staff   96 Oct 15 10:45 ..',
  autoType = true,
  delay = 60
}) => {
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-typing effect
  useEffect(() => {
    if (!autoType) {
      setTypedCommand(command);
      setShowOutput(true);
      return;
    }
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < command.length) {
        setTypedCommand(prev => prev + command.charAt(index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowOutput(true), 500);
      }
    }, delay);
    
    return () => clearInterval(timer);
  }, [command, autoType, delay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorTimer);
  }, []);

  // Format output with line breaks
  const formattedOutput = output.split('\n').map((line, index) => (
    <div key={index} className="font-mono">
      {line}
    </div>
  ));

  return (
    <div 
      ref={terminalRef}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-700 font-mono text-sm md:text-base"
    >
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-gray-400 text-center flex-1">Terminal</div>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 text-green-400 bg-gray-900 overflow-x-auto">
        <div className="flex">
          <span className="text-teal-400">user@penguru:</span>
          <span className="text-blue-400">~$</span>
          <span className="ml-2">
            {typedCommand}
            {!showOutput && cursorVisible && <span className="inline-block w-2 h-4 bg-green-400 ml-0.5"></span>}
          </span>
        </div>
        
        {showOutput && (
          <div className="mt-2 text-gray-300">
            {formattedOutput}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;