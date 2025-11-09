import React from 'react';
import { CourseCard } from './CourseCard';

export const CourseList = ({ courses, onCourseSelect }) => {
  const coursesByStatus = {
    completed: courses.filter(course => course.status === 'completed'),
    ongoing: courses.filter(course => course.status === 'ongoing'),
    recommended: courses.filter(course => course.status === 'recommended')
  };

  const statusConfig = {
    completed: { title: 'Completed Courses', color: 'text-green-700', bgColor: 'bg-green-50' },
    ongoing: { title: 'Ongoing Courses', color: 'text-yellow-700', bgColor: 'bg-yellow-50' },
    recommended: { title: 'Recommended Courses', color: 'text-blue-700', bgColor: 'bg-blue-50' }
  };

  // Function to find course by ID
  const findCourseById = (id) => {
    return courses.find(course => course.id === id);
  };

  return (
    <div className="space-y-8">
      {['completed', 'ongoing', 'recommended'].map(status => (
        <div key={status} className={`${statusConfig[status].bgColor} rounded-xl p-6`}>
          <div className="flex items-center space-x-3 mb-6">
            <h2 className={`text-xl font-bold ${statusConfig[status].color}`}>
              {statusConfig[status].title}
            </h2>
            <span className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
              {coursesByStatus[status].length} courses
            </span>
          </div>
          
          {coursesByStatus[status].length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesByStatus[status].map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={onCourseSelect}
                  findCourseById={findCourseById}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 bg-white rounded-lg">
              No {status} courses match your filters
            </div>
          )}
        </div>
      ))}
    </div>
  );
};