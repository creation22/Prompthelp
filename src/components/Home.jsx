import React from 'react';

const Home = () => {
  const handleBrowsePromptsClick = () => {
    // Scroll to prompts section when implemented
    console.log('Browse prompts clicked');
  };

  const handleCreateExploreClick = () => {
    // Navigate to create/explore section when implemented
    console.log('Create & explore clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-18 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="mx-auto max-w-6xl relative z-10">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
            <div className="inline-flex">
              <div className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="font-medium">50+ Curated Prompts</span>
                <svg className="h-3 w-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="hidden sm:inline-flex items-center">
                  Updated Daily
                </span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 sm:mb-3">
                             <span className="font-medium text-gray-900">
                 Your AI Prompt
               </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight">
                           <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent leading-tight">
               Hub
             </span>
            </h2>
          </div>

          {/* Description */}
                     <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed text-gray-600 px-4 sm:px-0">
            Browse, copy, and use curated prompts for coding, life advice, personalities, 
            productivity, and more. Simple, fast, and incredibly useful.
            <span className="block">Crafted for modern AI workflows</span>
          </p>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto px-4 sm:px-0">
                         <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-white border-gray-200 hover:bg-gray-50">
                           <div className="p-2 rounded-lg bg-blue-100">
               <svg className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                                 <h3 className="font-semibold text-sm text-gray-900">
                   One-Click Copy
                 </h3>
                 <p className="text-xs text-gray-600">
                   Ready-to-use prompts
                 </p>
              </div>
            </div>
                         <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-white border-gray-200 hover:bg-gray-50">
                           <div className="p-2 rounded-lg bg-green-100">
               <svg className="h-4 sm:h-5 w-4 sm:w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="text-left">
                                 <h3 className="font-semibold text-sm text-gray-900">
                   Live Preview
                 </h3>
                 <p className="text-xs text-gray-600">
                   See prompts in action
                 </p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button
              onClick={handleBrowsePromptsClick}
              className="cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none bg-gray-900 hover:bg-gray-800 text-white rounded-lg"
            >
              <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Browse Prompts
            </button>
            <button
              onClick={handleCreateExploreClick}
              className="cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none bg-white text-gray-900 hover:bg-gray-50 rounded-lg border border-gray-200"
            >
              <svg className="h-4 sm:h-5 w-4 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create & Explore
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-18 pt-6 sm:pt-8 border-t border-gray-300">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Curated Prompts
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Free
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                AI
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Optimized
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

