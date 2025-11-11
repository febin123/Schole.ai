import React, { useState } from 'react';
import { useCourses } from './hooks/useCourses';
import { UserGreeting } from './components/Header/UserGreeting';
import { OverallProgressRing } from './components/Header/OverallProgressRing';
import { Sidebar } from './components/Sidebar';
import { CourseList } from './components/Dashboard/CourseList';
import { DetailsPanel } from './components/Dashboard/CourseDetails/DetailsPanel';
import { LearningPathGenerator } from './components/AI/LearningPathGenerator';
import { StudyAssistant } from './components/AI/StudyAssistant';
import { LearningInsights } from './components/AI/LearningInsights';
import './styles/globals.css';

function App() {
  const {
    user,
    courses,
    selectedCourse,
    setSelectedCourse,
    filters,
    updateFilters,
    clearFilters,
    updateCourseProgress
  } = useCourses();

  const [aiLearningPath, setAiLearningPath] = useState(null);
  const [activeAIFeature, setActiveAIFeature] = useState('insights');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="lg:col-span-2">
            <UserGreeting name={user.name} />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <OverallProgressRing progress={user.overallProgress} />
          </div>
        </div>

        {/* AI Features Section */}
        <div className="mb-8 space-y-6">
          {/* AI Features Toggle - Enhanced */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
            <div className="flex space-x-2">
              {[
                { key: 'insights', icon: '📊', label: 'AI Insights' },
                { key: 'path', icon: '🧠', label: 'Learning Path' },
                { key: 'assistant', icon: '🤖', label: 'Study Assistant' }
              ].map(feature => (
                <button
                  key={feature.key}
                  onClick={() => setActiveAIFeature(feature.key)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeAIFeature === feature.key
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-sm">{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active AI Feature */}
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            {activeAIFeature === 'insights' && (
              <LearningInsights courses={courses} />
            )}
            
            {activeAIFeature === 'path' && (
              <LearningPathGenerator 
                courses={courses}
                onPathGenerated={setAiLearningPath}
              />
            )}
            
            {activeAIFeature === 'assistant' && selectedCourse && (
              <StudyAssistant currentCourse={selectedCourse} />
            )}

            {activeAIFeature === 'assistant' && !selectedCourse && (
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 text-center border border-yellow-200 shadow-lg">
                <div className="text-4xl mb-4 animate-bounce">🤖</div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">
                  AI Study Assistant
                </h3>
                <p className="text-amber-700 mb-4">
                  Select any course to start chatting with your personal AI tutor
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Generated Learning Path - Enhanced */}
        {aiLearningPath && (
          <div className="mb-8 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      🧠 Your AI Learning Path
                    </h3>
                    <p className="text-gray-600 mt-1">Personalized journey based on your goals</p>
                  </div>
                  <button
                    onClick={() => setAiLearningPath(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors transform hover:scale-110 p-1"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2">🎯 Path Overview</h4>
                      <p className="text-blue-800 text-sm leading-relaxed">{aiLearningPath.rationale}</p>
                      <div className="mt-3 space-y-2 text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Goal</span>
                          <span className="text-blue-900">{aiLearningPath.goal}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Timeline</span>
                          <span className="text-purple-900">{aiLearningPath.estimatedTimeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-medium">Confidence</span>
                          <span className="text-pink-900">{Math.round(aiLearningPath.confidence * 100)}% match</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">📚 Recommended Journey</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {aiLearningPath.path.map((course, index) => (
                        <div 
                          key={course.id} 
                          className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:border-purple-200 group"
                        >
                          <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors text-sm">
                              {course.title}
                            </div>
                            <div className="text-xs text-gray-600 flex items-center space-x-1 mt-1">
                              <span>{course.category}</span>
                              <span>•</span>
                              <span>{course.duration}h</span>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            course.status === 'completed' ? 'bg-green-100 text-green-700 border border-green-200' :
                            course.status === 'ongoing' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                            'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}>
                            {course.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats Banner - Enhanced */}
        <div className="mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">🚀 Accelerate Your Learning</h3>
                <p className="text-gray-300">Use quick actions on course cards to track progress instantly</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{courses.filter(c => c.status === 'completed').length}</div>
                  <div className="text-gray-400 text-sm">Completed</div>
                </div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{user.overallProgress}%</div>
                  <div className="text-gray-400 text-sm">Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Enhanced */}
          <div className="lg:col-span-1 transform hover:scale-[1.01] transition-transform duration-300">
            <Sidebar
              filters={filters}
              onFiltersChange={updateFilters}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Dashboard - Enhanced */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-slate-600 bg-clip-text text-transparent">
                    Learning Journey
                  </h2>
                  <p className="text-gray-600">
                    {courses.length} of {user.courses.length} courses matching your filters
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  {filters.categories.length > 0 && (
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                      {filters.categories.length} categories
                    </span>
                  )}
                  {filters.status.length > 0 && (
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
                      {filters.status.length} status types
                    </span>
                  )}
                  {(filters.categories.length === 0 && filters.status.length === 0) && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                      All courses visible
                    </span>
                  )}
                </div>
              </div>

              {/* Course List */}
              <CourseList
                courses={courses}
                onCourseSelect={setSelectedCourse}
                onProgressUpdate={updateCourseProgress}
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