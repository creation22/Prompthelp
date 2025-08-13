import React, { useState } from 'react';

const PromptBox = ({ prompt, onFavoriteToggle, isFavorite = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const toggleFavorite = () => {
    onFavoriteToggle(prompt.id);
  };

  const openChatGPT = () => {
    // Encode the prompt for URL
    const encodedPrompt = encodeURIComponent(prompt.prompt);
    // Open ChatGPT with the prompt pre-filled
    window.open(`https://chat.openai.com/?prompt=${encodedPrompt}`, '_blank');
  };

  return (
    <div className="bg-white backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{prompt.title}</h3>
           <p className="text-gray-600 mb-3 leading-relaxed">{prompt.description}</p>
           <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
             {prompt.category}
           </span>
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className={`ml-3 p-2 rounded-lg transition-all duration-200 ${
            isFavorite 
              ? 'text-red-500 bg-red-50 hover:bg-red-100' 
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleCopy}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
            copied
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-gray-900 hover:bg-gray-800 text-white'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Prompt
            </>
          )}
        </button>

        <button
          onClick={openChatGPT}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Use in ChatGPT
        </button>
      </div>
    </div>
  );
};

export default PromptBox;
