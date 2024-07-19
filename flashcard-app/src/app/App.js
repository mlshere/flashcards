import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NewTopicForm } from '../features/topics/NewTopicForm';
import { Topics } from '../features/topics/Topics';
import { Quiz } from '../features/quizzes/Quiz';
import { NewQuizForm } from '../features/quizzes/NewQuizForm';
import  AppLayOut  from './AppLayout.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayOut />} />
        <Route path="/topics/new" component={<NewTopicForm />} />
        <Route path="/topics/:topicId" component={<Topics />} />
        <Route path="/topics" component={<Topics />} />
        <Route path="/quizzes/new" component={<NewQuizForm />} />
        <Route path="/quizzes/:quizId" component={<Quiz />} />
        <Route path="/quizzes" component={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
