import React, { useState } from 'react';

export const LearningPathGenerator = ({ courses, onPathGenerated }) => {
  const [learningGoal, setLearningGoal] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateLearningPath = async () => {
    setIsGenerating(true);
    
    // Simulate AI API call
    setTimeout(() => {
      const aiPath = {
        goal: learningGoal,
        path: courses
          .filter(course => 
            course.category === 'Frontend' || 
            course.title.toLowerCase().includes('react')
          )
          .sort((a, b) => a.prerequisites.length - b.prerequisites.length),
        rationale: "This path focuses on React ecosystem based on your completed courses and goal to become a frontend specialist",
        estimatedTimeline: "8-12 weeks",
        confidence: 0.85
      };
      
      onPathGenerated(aiPath);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        🧠 AI Learning Path Generator
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What do you want to learn?
          </label>
          <input
            type="text"
            value={learningGoal}
            onChange={(e) => setLearningGoal(e.target.value)}
            placeholder="e.g., Become a full-stack developer, Learn data science..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={generateLearningPath}
          disabled={!learningGoal || isGenerating}
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isGenerating ? 'Generating AI Path...' : 'Generate Personalized Learning Path'}
        </button>
        
        {isGenerating && (
          <div className="text-center text-purple-600">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto mb-2"></div>
            AI is analyzing your goals and progress...
          </div>
        )}
      </div>
    </div>
  );
};