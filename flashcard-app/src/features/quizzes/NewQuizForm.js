import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addQuiz } from './quizzesSlice';
import { selectTopics } from '../topics/topicsSlice';

export const NewQuizForm = ({ history }) => {
    const [name, setName] = useState('');
    const [topicId, setTopicId] = useState('');
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQuiz({ id, name, topicId, cardIds }));
        dispatch(addQuizIdToTopic({ topicId, quizId: id }));
        history.push('/quizzes');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Quiz Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select 
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
            >
                <option value="">Select a Topic</option>
                {Object.values(topics).map(topic => (
                    <option key={topic.id} value={topic.id}>
                        {topic.name}
                    </option>
                ))}
            </select>
            <button type="submit">Create Quiz</button>
        </form>
    );
};