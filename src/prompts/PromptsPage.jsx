import React, { useState, useEffect } from 'react';
import { prompts } from './Prompts';
import PromptBox from '../components/Promptbox';
import FilterBar from '../components/filterbar';

const PromptsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  const [filteredPrompts, setFilteredPrompts] = useState(prompts);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('promptFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('promptFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Filter prompts based on selected category
  useEffect(() => {
    let filtered = prompts;

    if (selectedCategory === 'Favorites') {
      filtered = prompts.filter(prompt => favorites.includes(prompt.id));
    } else if (selectedCategory !== 'All') {
      filtered = prompts.filter(prompt => prompt.category === selectedCategory);
    }

    setFilteredPrompts(filtered);
  }, [selectedCategory, favorites]);

  const handleFavoriteToggle = (promptId) => {
    setFavorites(prev => {
      if (prev.includes(promptId)) {
        return prev.filter(id => id !== promptId);
      } else {
        return [...prev, promptId];
      }
    });
  };

  const isFavorite = (promptId) => {
    return favorites.includes(promptId);
  };

  return (
    <div className="min-h-screen">
      {/* Filter Bar */}
      <FilterBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8" id="prompts" >
        {/* Header */}
        <div className="text-center mb-8">
                     <h1 className="text-3xl font-bold text-gray-900 mb-2">
             {selectedCategory === 'Favorites' ? 'Your Favorite Prompts' : 'AI Prompts'}
           </h1>
           <p className="text-gray-600">
            {selectedCategory === 'Favorites' 
              ? `You have ${filteredPrompts.length} favorite prompt${filteredPrompts.length !== 1 ? 's' : ''}`
              : selectedCategory === 'All'
                ? `Browse through ${filteredPrompts.length} curated AI prompts`
                : `${filteredPrompts.length} prompt${filteredPrompts.length !== 1 ? 's' : ''} in ${selectedCategory}`
            }
          </p>
        </div>

        {/* Prompts Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptBox
                key={prompt.id}
                prompt={prompt}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={isFavorite(prompt.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
                             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 {selectedCategory === 'Favorites' ? (
                   <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                   </svg>
                 ) : (
                   <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                 )}
               </div>
               <h3 className="text-xl font-semibold text-gray-900 mb-2">
                 {selectedCategory === 'Favorites' ? 'No favorites yet' : 'No prompts found'}
               </h3>
               <p className="text-gray-600 mb-6">
                {selectedCategory === 'Favorites' 
                  ? 'Start adding prompts to your favorites to see them here!'
                  : `No prompts available in ${selectedCategory}. Try selecting a different category.`
                }
              </p>
              {selectedCategory === 'Favorites' && (
                                 <button
                   onClick={() => setSelectedCategory('All')}
                   className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                 >
                  Browse All Prompts
                </button>
              )}
            </div>
          </div>
        )}

        {/* Load More Button (if needed in future) */}
        {filteredPrompts.length > 0 && (
          <div className="text-center mt-12">
                       <p className="text-gray-500 text-sm">
             Showing {filteredPrompts.length} of {prompts.length} total prompts
           </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptsPage; 