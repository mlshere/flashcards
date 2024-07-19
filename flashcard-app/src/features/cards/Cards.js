import React, { useState } from 'react';
import { useSelector } from 'react-redux';  
import { selectCardById } from './cardsSlice';

export default function Cards({ id })  {
    const card = useSelector(state => selectCardById(id));
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <li>
            <button onClick={() => setIsFlipped(!isFlipped)}>
            {isFlipped ? card.back : card.front}
            </button>
        </li>
    );
}