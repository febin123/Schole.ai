import React from 'react';

export const UserGreeting = ({ name }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {name}!</h1>
      <p className="text-gray-600">Your learning journey at a glance</p>
    </div>
  );
};