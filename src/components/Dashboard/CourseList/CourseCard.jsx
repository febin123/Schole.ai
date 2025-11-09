import React from 'react';

export const CourseCard = ({ course, onSelect, findCourseById }) => {
  const getStatusStyles = () => {
    const styles = {
      completed: 'border-l-completed bg-white',
      ongoing: 'border-l-ongoing bg-white',
      recommended: 'border-l-recommended bg-white'
    };
    return styles[course.status] || 'border-l-gray-300 bg-white';
  };

  const getProgressColor = () => {
    const colors = {
      completed: 'bg-completed',
      ongoing: 'bg-ongoing',
      recommended: 'bg-recommended'
    };
    return colors[course.status] || 'bg-gray-300';
  };

  // Get prerequisite courses
  const getPrerequisites = () => {
    return course.prerequisites.map(id => findCourseById(id)).filter(Boolean);
  };

  // Get next course
  const getNextCourse = () => {
    return course.nextCourse ? findCourseById(course.nextCourse) : null;
  };

  return (
    <div 
      className={`rounded-lg border-l-4 shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow h-full flex flex-col ${getStatusStyles()}`}
      onClick={() => onSelect(course)}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight flex-1">
          {course.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 flex-shrink-0 ${
          course.status === 'completed' ? 'bg-green-100 text-green-800' :
          course.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {course.status}
        </span>
      </div>

      <div className="text-xs text-gray-600 mb-3">
        {course.category} • {course.duration} hours
      </div>

      {/* Prerequisites */}
      {getPrerequisites().length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-gray-500 font-medium mb-1">Requires:</div>
          <div className="flex flex-wrap gap-1">
            {getPrerequisites().map(prereq => (
              <span key={prereq.id} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {prereq.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next Course */}
      {getNextCourse() && (
        <div className="mb-3">
          <div className="text-xs text-gray-500 font-medium mb-1">Next:</div>
          <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
            {getNextCourse().title}
          </div>
        </div>
      )}

      {course.description && (
        <p className="text-sm text-gray-500 mb-3 flex-1">{course.description}</p>
      )}

      {course.status !== 'recommended' && (
        <div className="flex items-center space-x-3 mt-auto">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${getProgressColor()}`}
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 whitespace-nowrap">
            {course.progress}%
          </span>
        </div>
      )}

      <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
        <span>
          {course.status === 'completed' && `Score: ${course.score}/100`}
          {course.status === 'ongoing' && 'In progress'}
          {course.status === 'recommended' && `Recommendation: ${Math.round(course.recommendationScore * 100)}%`}
        </span>
        {course.sessions.length > 0 && (
          <span>{course.sessions.length} sessions</span>
        )}
      </div>
    </div>
  );
};