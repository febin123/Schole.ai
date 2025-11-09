import React from 'react';

export const DetailsPanel = ({ course, onClose }) => {
  if (!course) return null;

  const getStatusColor = () => {
    const colors = {
      completed: 'bg-green-100 text-green-800',
      ongoing: 'bg-yellow-100 text-yellow-800',
      recommended: 'bg-blue-100 text-blue-800'
    };
    return colors[course.status];
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Course Details</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
            {course.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Category:</span>
            <span className="ml-2 text-gray-600">{course.category}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Duration:</span>
            <span className="ml-2 text-gray-600">{course.duration} hours</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Progress:</span>
            <span className="ml-2 text-gray-600">{course.progress}%</span>
          </div>
          {course.score && (
            <div>
              <span className="font-medium text-gray-700">Score:</span>
              <span className="ml-2 text-gray-600">{course.score}/100</span>
            </div>
          )}
        </div>

        {course.description && (
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Description</h4>
            <p className="text-gray-600 text-sm">{course.description}</p>
          </div>
        )}

        {course.sessions.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Study Sessions</h4>
            <div className="space-y-2">
              {course.sessions.map((session, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-600">
                  <span>{new Date(session.date).toLocaleDateString()}</span>
                  <span>{formatDuration(session.duration)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {course.recommendationScore && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-1">Recommendation Score</h4>
            <p className="text-blue-700 text-sm">
              This course is {Math.round(course.recommendationScore * 100)}% relevant to your learning goals
            </p>
          </div>
        )}
      </div>
    </div>
  );
};