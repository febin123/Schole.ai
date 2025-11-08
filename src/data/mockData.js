export const mockUser = {
  id: 1,
  name: "Febin Wilson",
  overallProgress: 65,
  courses: [
    {
      id: 101,
      title: "React Fundamentals",
      status: "completed",
      category: "Frontend",
      progress: 100,
      score: 95,
      duration: 8,
      prerequisites: [],
      nextCourse: 102,
      sessions: [
        { date: "2023-09-01", duration: 120 },
        { date: "2023-09-03", duration: 90 }
      ],
      description: "Learn the basics of React including components, props, and state."
    },
    {
      id: 102,
      title: "Advanced React Patterns",
      status: "ongoing",
      category: "Frontend",
      progress: 45,
      score: 87,
      duration: 12,
      prerequisites: [101],
      nextCourse: 103,
      sessions: [
        { date: "2023-10-15", duration: 60 },
        { date: "2023-10-20", duration: 120 }
      ],
      description: "Master advanced React patterns and best practices."
    },
    {
      id: 103,
      title: "State Management with Zustand",
      status: "recommended",
      category: "Frontend",
      progress: 0,
      duration: 10,
      prerequisites: [102],
      recommendationScore: 0.92,
      sessions: [],
      description: "Learn modern state management solutions for React applications."
    },
    {
      id: 201,
      title: "Node.js Basics",
      status: "completed",
      category: "Backend",
      progress: 100,
      score: 88,
      duration: 6,
      prerequisites: [],
      nextCourse: 202,
      sessions: [
        { date: "2023-08-10", duration: 90 }
      ],
      description: "Introduction to Node.js and server-side JavaScript."
    },
    {
      id: 202,
      title: "Express.js Framework",
      status: "ongoing",
      category: "Backend",
      progress: 30,
      score: 92,
      duration: 8,
      prerequisites: [201],
      sessions: [
        { date: "2023-10-25", duration: 60 }
      ],
      description: "Build web applications with Express.js framework."
    },
    {
      id: 301,
      title: "Python for Data Science",
      status: "completed",
      category: "Data Science",
      progress: 100,
      score: 90,
      duration: 10,
      prerequisites: [],
      nextCourse: 302,
      sessions: [
        { date: "2023-07-15", duration: 120 },
        { date: "2023-07-20", duration: 90 }
      ],
      description: "Learn Python programming for data analysis and visualization."
    },
    {
      id: 302,
      title: "Machine Learning Basics",
      status: "recommended",
      category: "Data Science",
      progress: 0,
      duration: 14,
      prerequisites: [301],
      recommendationScore: 0.85,
      sessions: [],
      description: "Introduction to machine learning algorithms and concepts."
    }
  ]
};

export const categories = ["Frontend", "Backend", "Data Science", "Design", "DevOps"];