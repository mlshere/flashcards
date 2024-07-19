import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NewTopicForm } from './features/topics/NewTopicForm';
import { Topics } from './features/topics/Topics';
import { Quiz } from './features/quizzes/Quiz';
import { NewQuizForm } from './features/quizzes/NewQuizForm';


function App() {
  return (
    <Router>
        <Route path="/topics/new" component={NewTopicForm} />
        <Route path="/topics/:topicId" component={Topics} />
        <Route path="/topics" component={Topics} />
        <Route path="/quizzes/new" component={NewQuizForm} />
        <Route path="/quizzes/:quizId" component={Quiz} />
        <Route path="/quizzes" component={Quiz} />
    </Router>
  );
}

export default App;
