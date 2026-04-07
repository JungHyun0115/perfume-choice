// App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, results } from './data'; // 데이터 파일은 이전과 동일하다고 가정
import './App.css'; // CSS 파일 임포트

// 애니메이션 변수 설정 (재사용 가능)
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const buttonVariants = {
  hover: { scale: 1.03, backgroundColor: "#f0f0f0", borderColor: "#ccc" },
  tap: { scale: 0.98 }
};

function App() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [score, setScore] = useState({ woody: 0, floral: 0, fresh: 0, musk: 0 });

  const handleAnswer = (types) => {
    const newScore = { ...score };
    for (const type in types) {
      newScore[type] += types[type];
    }
    setScore(newScore);

    setCurrentStep((prev) => prev + 1);
  };

  const getResultKey = () => {
    return Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));
  };

  //const result = results[getResultKey()];
  const categoryItems = results[getResultKey()];
  const result = categoryItems[Math.floor(Math.random() * categoryItems.length)];

  return (
    <div className="app-container">
      {/* AnimatePresence는 컴포넌트가 언마운트될 때 out 애니메이션을 실행하게 해줌 */}
      <AnimatePresence mode="wait">
        
        {/* 시작 화면 */}
        {currentStep === 0 && (
          <motion.div 
            key={currentStep} // 단계별로 고유한 키 부여
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1>나만의 향수 페르소나</h1>
            <p>당신을 가장 닮은 향기를 찾아드립니다.</p>
            <motion.button 
              className="main-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(1)}
            >
              테스트 시작하기
            </motion.button>
          </motion.div>
        )}

        {/* 질문 화면 */}
        {currentStep > 0 && currentStep <= questions.length && (
          <motion.div
            key={`question-${currentStep}`} // 키값이 바뀌어야 애니메이션이 트리거됨
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.4 }}
          >
            <h2>Q{currentStep}. {questions[currentStep - 1].title}</h2>
            <div className="answer-list">
              {questions[currentStep - 1].answers.map((answer, index) => (
                <motion.button 
                  key={index} 
                  className="answer-btn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleAnswer(answer.types)}
                >
                  {answer.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* 결과 화면 */}
        {currentStep > questions.length && (
          <motion.div
            key="result"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.6, delay: 0.2 }} // 결과 화면은 약간 천천히 등장
          >
            <h2>당신의 향기는...</h2>
            <img src={result.image} alt={result.name} className="result-img" />
            <h3>{result.name}</h3>
            <p>{result.desc}</p>
            <div className="notes-container">
              <div className="note-item"><strong>Top:</strong> {result.notes.top}</div>
              <div className="note-item"><strong>Middle:</strong> {result.notes.middle}</div>
              <div className="note-item"><strong>Base:</strong> {result.notes.base}</div>
            </div>
            <motion.button 
              className="main-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
            >
              테스트 다시하기
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;