import React, { useState } from 'react';
import './quiz.css';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Madrid', 'Berlin', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the largest continent?',
    options: ['Asia', 'Europe', 'Africa', 'North America'],
    correctAnswer: 'Asia',
  },
  {
    question: 'What is the largest country in the world?',
    options: ['USA', 'China', 'Russia', 'India'],
    correctAnswer: 'Russia'
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Euro', 'Yen', 'Dollar', 'Pound'],
    correctAnswer: 'Yen'
  },
  {
    question: 'Who discovered Penicillin?',
    options: ['Alexander Fleming', 'Thomas Edison', 'Isaac Newton', 'Albert Einstein'],
    correctAnswer: 'Alexander Fleming'
  },
  {
    question: 'Which planet in the solar system is closest to the sun?',
    options: ['Earth', 'Mercury', 'Venus', 'Uranus'],
    correctAnswer: 'Mercury'
  },
  {
    question: 'Who was the first president of USA?',
    options: ['George Washington', 'Muhammadu Buhari', 'Donald Trump', 'Barrack Obama'],
    correctAnswer: 'George Washington'
  },
  {
    question: 'What is the name of the world\'s largest desert?',
    options: ['Kalahari', 'Napa', 'Sahara', 'Safari'],
    correctAnswer: 'Sahara'
  },
  {
    question: 'Who was the first person to walk on the moon?',
    options: ['Yuri Gagarin', 'Neil Armstrong', 'John Wick', 'Yinka Quadri'],
    correctAnswer: 'Neil Armstrong'
  },
  {
    question: 'Who developed this quiz-game?',
    options: ['Jaybee', 'Lexicon', 'Quwam', 'Korex'],
    correctAnswer: 'Lexicon'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      <h1>Quiz-App</h1>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className='question-text'>
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].options.map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
