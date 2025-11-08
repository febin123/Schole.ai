import { useState, useMemo } from 'react';
import { mockUser } from '../data/mockData';

export const useCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filters, setFilters] = useState({
    categories: [],
    status: [],
    dateRange: { start: '', end: '' }
  });

  const filteredCourses = useMemo(() => {
    return mockUser.courses.filter(course => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(course.category)) {
        return false;
      }
      
      // Status filter
      if (filters.status.length > 0 && !filters.status.includes(course.status)) {
        return false;
      }
      
      // Date range filter
      if (filters.dateRange.start && filters.dateRange.end) {
        const courseSessions = course.sessions.map(s => new Date(s.date));
        const hasSessionInRange = courseSessions.some(date => {
          const start = new Date(filters.dateRange.start);
          const end = new Date(filters.dateRange.end);
          return date >= start && date <= end;
        });
        if (!hasSessionInRange && course.status !== 'recommended') {
          return false;
        }
      }
      
      return true;
    });
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      status: [],
      dateRange: { start: '', end: '' }
    });
  };

  return {
    user: mockUser,
    courses: filteredCourses,
    selectedCourse,
    setSelectedCourse,
    filters,
    updateFilters,
    clearFilters
  };
};