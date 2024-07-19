import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addQuiz, } from './quizzesSlice';
import { selectTopics, addQuizIdToTopic } from '../topics/topicsSlice';
import { selectCardById, addCard } from '../cards/cardsSlice'

export const NewQuizForm = ({ history }) => {
    const [name, setName] = useState('');
    const [topicId, setTopicId] = useState('');
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        const cardIds = [];

        // Iterate over local state containing cards data
        selectCardById.forEach(card => {
            const cardId = uuidv4();
            dispatch(addCard({ id: cardId, front: card.front, back: card.back}));
            cardIds.push(cardId);
        })

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