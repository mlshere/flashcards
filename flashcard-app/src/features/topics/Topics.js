import React from 'react';
import { useSelector } from 'react-redux';
import { selectTopics } from './topicsSlice';

export const Topics = () => {
    const topics = useSelector(selectTopics);

    return (
        <div>
            {Object.values(topics).maps(topic => (
                <div key={topic.id}>
                    <h2>{topic.name}</h2>
                </div>
            ))}
        </div>
    )
}