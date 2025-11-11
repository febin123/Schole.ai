import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { DateRangeFilter } from './DateRangeFilter';

export const Sidebar = ({ filters, onFiltersChange, onClearFilters }) => {
  const hasActiveFilters = 
    filters.categories.length > 0 || 
    filters.status.length > 0 || 
    filters.dateRange.start || 
    filters.dateRange.end;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Status Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Status</h3>
          <div className="space-y-2">
            {['completed', 'ongoing', 'recommended'].map(status => (
              <label key={status} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.status.includes(status)}
                  onChange={(e) => {
                    const newStatus = e.target.checked
                      ? [...filters.status, status]
                      : filters.status.filter(s => s !== status);
                    onFiltersChange({ status: newStatus });
                  }}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="capitalize text-gray-700">{status}</span>
              </label>
            ))}
          </div>
        </div>

        <CategoryFilter
          selectedCategories={filters.categories}
          onCategoryChange={(categories) => onFiltersChange({ categories })}
        />

        <DateRangeFilter
          dateRange={filters.dateRange}
          onDateRangeChange={(dateRange) => onFiltersChange({ dateRange })}
        />
      </div>
    </div>
  );
};