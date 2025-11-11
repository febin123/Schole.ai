import React, { useState } from 'react';
import { useCourses } from './hooks/useCourses';
import { UserGreeting } from './components/Header/UserGreeting';
import { OverallProgressRing } from './components/Header/OverallProgressRing';
import { Sidebar } from './components/Sidebar';
import { CourseList } from './components/Dashboard/CourseList';
import { DetailsPanel } from './components/Dashboard/CourseDetails/DetailsPanel';
import './styles/globals.css';


function App() {
  const {
    user,
    courses,
    selectedCourse,
    setSelectedCourse,
    filters,
    updateFilters,
    clearFilters
  } = useCourses();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <UserGreeting name={user.name} />
          </div>
          <div>
            <OverallProgressRing progress={user.overallProgress} />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              filters={filters}
              onFiltersChange={updateFilters}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Dashboard */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Learning Journey</h2>
                  <p className="text-gray-600">
                    {courses.length} of {user.courses.length} courses shown
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  Filtered by: {filters.categories.length} categories, {filters.status.length} status types
                </div>
              </div>

              {/* Course List */}
              <CourseList
                courses={courses}
                onCourseSelect={setSelectedCourse}
              />

              {/* Course Details Panel */}
              {selectedCourse && (
                <DetailsPanel
                  course={selectedCourse}
                  onClose={() => setSelectedCourse(null)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;