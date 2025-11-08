import React from 'react';
import { categories } from '../../data/mockData';

export const CategoryFilter = ({ selectedCategories, onCategoryChange }) => {
  const handleCategoryToggle = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(newCategories);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'bg-purple-100 text-purple-800 border-purple-300',
      'Backend': 'bg-red-100 text-red-800 border-red-300',
      'Data Science': 'bg-green-100 text-green-800 border-green-300',
      'Design': 'bg-blue-100 text-blue-800 border-blue-300',
      'DevOps': 'bg-yellow-100 text-yellow-800 border-yellow-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">Categories</h3>
      <div className="space-y-2">
        {categories.map(category => (
          <label key={category} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryToggle(category)}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(category)}`}>
              {category}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};