
## **📝 Project Planning Document (Word File Content)**

# Scholé Learning Journey - Project Planning Document

## Executive Summary
This document outlines the comprehensive planning, architecture, and development process for the Scholé Learning Journey application. The project demonstrates modern frontend development practices while meeting all specified requirements with enhanced user experience features.

- Live Application: https://scholeai.netlify.app/

- Source Code: https://github.com/febin123/Schole.ai

## Step-by-Step Installation
### Step 1: Clone the Repository
- Clone the project from GitHub <br>
git clone https://github.com/febin123/Schole.ai.git

- Navigate to the project directory <br>
cd Schole.ai


### Step 2: Install Dependencies
<br>
npm install <br>

### Step 3: Start the Development Server
<br>
npm run dev <br>

## 1. Project Requirements Analysis

### 1.1 Core Requirements (From HR)
- Display learner's overall progress within the platform
- Distinguish between completed, ongoing, and recommended courses  
- Display learning sequence and relationships between courses
- Include interaction (filtering by date or category)

### 1.2 Enhanced Requirements (Self-Implemented)
- Quick progress update system
- Smart status transitions
- Study session tracking
- Professional UI/UX design
- Tired to include LLM(Large Language Model) & RAG(Retrieval-Augmented Generation)
- Mobile-responsive layout

## 2. Technical Architecture


| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework 
| JavaScript | Programming Language 
| Tailwind CSS | Styling 
| Vite | Build Tool 


## 3. File Structure
schole-learning-journey/ <br>
├── package.json   <br>
├── vite.config.js  <br>
├── tailwind.config.js <br>
├── postcss.config.js <br>
├── index.html <br>
└── src/ <br>
    ├── main.jsx <br>
    ├── App.jsx <br>
    ├── styles/ <br>
    │   └── globals.css <br>
    ├── data/  <br>
    │   └── mockData.js <br>
    ├── hooks/ <br>
    │   ├── useCourses.js <br>
    │  <br>
    └── components/ <br>
    │   ├── AI/                          
    │   ├── LearningPathGenerator.jsx <br>
    │   ├── StudyAssistant.jsx <br>
    │   └── LearningInsights.jsx <br>
        ├── Header/ <br>
        │   ├── UserGreeting.jsx <br>
        │   └── OverallProgressRing.jsx <br>
        ├── Sidebar/ <br>
        │   ├── index.jsx <br>
        │   ├── CategoryFilter.jsx <br>
        │   └── DateRangeFilter.jsx  <br>
        └── Dashboard/ <br>
            ├── ViewToggle.jsx <br>
            ├── CourseList/ <br>
            │   ├── index.jsx <br>
            │   └── CourseCard.jsx <br>
            └── CourseDetails/ <br>
                └── DetailsPanel.jsx <br>
## 4 . User Interface Wireframe (Frontend Focus Phase-1)
![Diagram](Draw.io/UserInterface.png)

## 5. Application State flow: Phase-1
![Diagram](Draw.io/ApplicationStateFlow.png)

## 6 . User Interface Wireframe (Frontend Focus Phase-2)
![Diagram](Draw.io/UserInterfacePhase2.png)

## 7 . Application State flow: Phase-2
![Diagram](Draw.io/WorkFlow-Phase2.png)