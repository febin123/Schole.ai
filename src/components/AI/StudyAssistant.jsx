import React, { useState } from 'react';

export const StudyAssistant = ({ currentCourse }) => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    const userMessage = { type: 'user', content: question };
    setConversation(prev => [...prev, userMessage]);
    
    // Simulate RAG response based on course content
    setTimeout(() => {
      const ragResponses = {
        'react': "Based on React Fundamentals course content: React components are reusable pieces of UI that manage their own state and props. They can be functional or class-based.",
        'state': "From your course materials: State in React represents data that changes over time. Use useState hook for functional components to manage local state.",
        'prerequisite': `For "${currentCourse?.title}", you need to complete: ${currentCourse?.prerequisites.map(p => `Course ${p}`).join(', ')} first.`
      };
      
      const lowerQuestion = question.toLowerCase();
      let answer = "I can help answer questions about this course based on your learning materials. Try asking about key concepts, prerequisites, or study tips.";
      
      if (lowerQuestion.includes('react')) answer = ragResponses.react;
      else if (lowerQuestion.includes('state')) answer = ragResponses.state;
      else if (lowerQuestion.includes('prerequisite') || lowerQuestion.includes('require')) answer = ragResponses.prerequisite;
      
      const aiMessage = { 
        type: 'assistant', 
        content: answer,
        sources: [`${currentCourse?.title} Course Materials`]
      };
      
      setConversation(prev => [...prev, aiMessage]);
      setQuestion('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        🤖 Study Assistant - {currentCourse?.title}
      </h3>
      
      {/* Conversation History */}
      <div className="h-64 overflow-y-auto mb-4 space-y-4 p-2 border border-gray-200 rounded-lg">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              msg.type === 'user' 
                ? 'bg-blue-100 text-blue-900 ml-8' 
                : 'bg-gray-100 text-gray-900 mr-8'
            }`}
          >
            <div className="font-medium mb-1">
              {msg.type === 'user' ? 'You' : 'Study Assistant'}
            </div>
            <div>{msg.content}</div>
            {msg.sources && (
              <div className="text-xs text-gray-600 mt-2">
                Sources: {msg.sources.join(', ')}
              </div>
            )}
          </div>
        ))}
        
        {conversation.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Ask me anything about this course! I can explain concepts, 
            prerequisites, or help with study strategies.
          </div>
        )}
      </div>
      
      {/* Question Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
          placeholder="Ask about course content, prerequisites, study tips..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          onClick={askQuestion}
          disabled={!question.trim() || isLoading}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors"
        >
          {isLoading ? '...' : 'Ask'}
        </button>
      </div>
    </div>
  );
};