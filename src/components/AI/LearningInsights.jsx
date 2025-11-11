import React from 'react';

export const LearningInsights = ({ courses }) => {
  // AI-generated insights based on user data
  const generateInsights = () => {
    const completedCourses = courses.filter(c => c.status === 'completed');
    const ongoingCourses = courses.filter(c => c.status === 'ongoing');
    
    const totalStudyTime = courses.reduce((total, course) => {
      return total + course.sessions.reduce((sum, session) => sum + session.duration, 0);
    }, 0) / 60; // Convert to hours
    
    const averageScore = completedCourses.length > 0 
      ? completedCourses.reduce((sum, course) => sum + course.score, 0) / completedCourses.length 
      : 0;
    
    const learningVelocity = ongoingCourses.length > 0 
      ? ongoingCourses.reduce((sum, course) => sum + course.progress, 0) / ongoingCourses.length 
      : 0;
    
    return {
      studyEfficiency: averageScore > 90 ? 'Excellent' : averageScore > 80 ? 'Good' : 'Needs Improvement',
      recommendedFocus: completedCourses.length > ongoingCourses.length ? 'Deepen existing skills' : 'Start new learning paths',
      weeklyGoal: `Aim for ${Math.ceil(totalStudyTime / 4) + 2} hours this week`,
      skillGaps: findSkillGaps(courses),
      learningPattern: learningVelocity > 50 ? 'Fast-paced learner' : 'Steady progress'
    };
  };
  
  const findSkillGaps = (courses) => {
    const completedCategories = [...new Set(courses.filter(c => c.status === 'completed').map(c => c.category))];
    const allCategories = ['Frontend', 'Backend', 'Data Science', 'Design', 'DevOps'];
    return allCategories.filter(cat => !completedCategories.includes(cat));
  };
  
  const insights = generateInsights();
  
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        📈 AI Learning Insights
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-green-100">
          <div className="text-sm text-gray-600 mb-1">Learning Pattern</div>
          <div className="font-semibold text-green-700">{insights.learningPattern}</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-blue-100">
          <div className="text-sm text-gray-600 mb-1">Study Efficiency</div>
          <div className="font-semibold text-blue-700">{insights.studyEfficiency}</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-purple-100">
          <div className="text-sm text-gray-600 mb-1">Recommended Focus</div>
          <div className="font-semibold text-purple-700">{insights.recommendedFocus}</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-100">
          <div className="text-sm text-gray-600 mb-1">This Week's Goal</div>
          <div className="font-semibold text-orange-700">{insights.weeklyGoal}</div>
        </div>
      </div>
      
      {insights.skillGaps.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="font-medium text-yellow-800 mb-2">💡 Opportunity Areas</div>
          <div className="text-sm text-yellow-700">
            Consider exploring: {insights.skillGaps.join(', ')}
          </div>
        </div>
      )}
    </div>
  );
};