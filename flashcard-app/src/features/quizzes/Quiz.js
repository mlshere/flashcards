import React from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "../cards/cardsSlice";
import { useParams } from "react-router-dom";
import { selectQuizzes } from "./quizzesSlice";
// import styles from "./Quiz.module.css";

export const Quiz = () => {
    const { quizId } = useParams();
    const quiz = useSelector(state => selectQuizzes(state)[quizId]);
    const cards = useSelector(state => quiz ? quiz.cardIds.map(cardId => selectCardById(state, cardId)): []);
    
    if (!quiz) {
        return <div>Quiz not found</div>;
      }
    
    return (
        <div>
            <h2>{quiz.name}</h2>
            {cards.map(card => (
                <div key={card.id}>
                    <h3>{card.front}</h3>
                    <p>{card.black}</p>
                </div>
           ) )}
        </div>
    );
};