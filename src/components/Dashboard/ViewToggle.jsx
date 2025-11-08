import React from 'react';

export const ViewToggle = ({ currentView, onViewChange }) => {
  return (
    <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200 inline-flex">
    
      <button
        onClick={() => onViewChange('list')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          currentView === 'list'
            ? 'bg-purple-100 text-purple-700'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        List View
      </button>
    </div>
  );
};