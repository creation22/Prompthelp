import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">PromptHelp</h1>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            
            {/* Twitter Icon */}
            <a
              href="https://x.com/_Creation22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 
                4.958 0 002.163-2.723 10.086 10.086 0 01-3.127 
                1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 
                0 011.671 3.149a4.822 4.822 0 001.523 6.574 
                4.903 4.903 0 01-2.229-.616c-.054 2.281 
                1.581 4.415 3.949 4.89a4.935 4.935 0 
                01-2.224.084c.623 1.956 2.444 3.379 
                4.6 3.419A9.867 9.867 0 010 19.54a13.94 
                13.94 0 007.548 2.209c9.056 0 14.01-7.496 
                13.995-14.243a9.935 9.935 0 002.41-2.936z" />
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/creation22/Prompthelp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 
                5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 
                0-.288-.011-1.05-.017-2.06-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 
                1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 
                0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 
                0 0 1.008-.322 3.301 1.23a11.52 11.52 0 
                013.003-.404c1.018.005 2.047.138 3.003.404 
                2.291-1.552 3.297-1.23 3.297-1.23.653 
                1.652.242 2.873.118 3.176.77.84 1.235 
                1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 
                5.921.43.372.823 1.103.823 2.222 
                0 1.604-.015 2.896-.015 3.286 
                0 .322.216.699.825.58C20.565 
                21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
