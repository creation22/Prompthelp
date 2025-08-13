import React from 'react';

const FilterBar = ({ 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const categories = [
    "All",
    "Personalities", 
    "Coding",
    "Productivity",
    "Daily Help",
    "Favorites"
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
                             className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                 selectedCategory === category
                   ? 'bg-gray-900 text-white'
                   : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
               }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
