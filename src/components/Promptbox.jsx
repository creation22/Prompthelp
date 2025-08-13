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
    const encodedPrompt = encodeURIComponent(prompt.prompt);
    window.open(`https://chat.openai.com/?prompt=${encodedPrompt}`, '_blank');
  };

  return (
    <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
      {/* Left Accent Bar - Gray to Black */}
      <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-gray-600 to-black" />

      {/* Category badge */}
      <span className="absolute top-3 right-3 bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium rounded-full shadow-sm">
        {prompt.category}
      </span>

      {/* Card content */}
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{prompt.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{prompt.description}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-gray-50/50">
        {/* Left side: favorite button */}
        <button
          onClick={toggleFavorite}
          className={`p-2 rounded-full transition-all duration-200 shadow-sm ${
            isFavorite
              ? 'bg-red-100 text-red-500 hover:bg-red-200'
              : 'bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 
                 20.364l7.682-7.682a4.5 4.5 0 
                 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Right side: copy + ChatGPT */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-sm ${
              copied
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 
                       012-2h8a2 2 0 012 2v2m-6 
                       12h8a2 2 0 002-2v-8a2 2 0 
                       00-2-2h-8a2 2 0 00-2 2v8a2 
                       2 0 002 2z"
                  />
                </svg>
                Copy
              </>
            )}
          </button>

          <button
            onClick={openChatGPT}
            className="flex items-center gap-2 px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white rounded-lg font-medium text-sm transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 
                2v10a2 2 0 002 2h10a2 2 0 
                002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            ChatGPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
