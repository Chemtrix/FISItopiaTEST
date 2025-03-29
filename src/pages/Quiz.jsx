import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import backgroundImage from '../assets/IT-BG.png';
import { PieChart, Pie, Cell, Legend } from 'recharts';

function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answersLog, setAnswersLog] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    const correct = index === questions[step].answer;
    setSelected(index);
    setIsCorrect(correct);

    setAnswersLog(prev => [
      ...prev,
      {
        question: questions[step].question,
        options: questions[step].options,
        correctAnswer: questions[step].options[questions[step].answer],
        selectedAnswer: questions[step].options[index],
        wasCorrect: correct,
        explanation: questions[step].explanation || ''
      }
    ]);

    if (correct) setScore(score + 1);

    setTimeout(() => {
      setSelected(null);
      setIsCorrect(null);
      if (step + 1 < questions.length) {
        setStep(step + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setStep(0);
    setScore(0);
    setShowResult(false);
    setAnswersLog([]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl w-full max-w-2xl">
        {!showResult ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-300">
                Frage {step + 1} von {questions.length}
              </h2>
              <button
                onClick={() => navigate('/')}
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                ⬅️ Zurück zur Startseite
              </button>
            </div>

            <div className="bg-gray-700/50 p-5 rounded-lg mb-6 shadow-inner border border-white/10">
              <p className="text-lg sm:text-xl font-semibold text-white text-center">
                {questions[step].question}
              </p>
            </div>

            {questions[step].options.map((option, idx) => {
              const isSelected = selected === idx;
              const isCorrectAnswer = idx === questions[step].answer;
              const showColor = selected !== null && (isSelected || isCorrectAnswer);

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`w-full mb-3 py-3 px-5 rounded-lg text-left font-medium transition-all duration-300 ease-in-out shadow-sm
                    ${
                      showColor
                        ? isCorrectAnswer
                          ? 'bg-green-600 text-white border border-green-500'
                          : isSelected
                          ? 'bg-red-600 text-white border border-red-500'
                          : 'bg-gray-700 text-white'
                        : 'bg-gray-700 hover:bg-blue-600 hover:shadow-md'
                    }`}
                >
                  {option}
                </button>
              );
            })}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">🎉 Ergebnis</h2>

            <PieChart width={220} height={220} className="mx-auto mb-6">
              <Pie
                data={[
                  { name: 'Richtig', value: score },
                  { name: 'Falsch', value: questions.length - score },
                ]}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                label
              >
                <Cell fill="#4ade80" />
                <Cell fill="#f87171" />
              </Pie>
              <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>

            <h3 className="text-xl mt-8 text-yellow-300 font-semibold">Falsch beantwortete Fragen:</h3>

            <div className="mt-6 text-left max-h-[400px] overflow-y-auto pr-2">
              {answersLog.filter(entry => !entry.wasCorrect).map((entry, idx) => (
                <details key={idx} className="bg-gray-700/60 rounded p-4 mb-3 cursor-pointer">
                  <summary className="font-semibold text-white">❌ {entry.question}</summary>
                  <div className="mt-2 text-sm text-white/90">
                    <p><strong>Deine Antwort:</strong> <span className="text-red-400">{entry.selectedAnswer}</span></p>
                    <p><strong>Richtige Antwort:</strong> <span className="text-green-400">{entry.correctAnswer}</span></p>
                    {entry.explanation && (
                      <p className="mt-1 italic text-white/70">💡 {entry.explanation}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>

            <button
              onClick={resetQuiz}
              className="mt-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              🔁 Noch einmal spielen
            </button>

            <button
              onClick={() => navigate('/')}
              className="mt-4 text-sm text-blue-400 hover:text-blue-300 block mx-auto"
            >
              ⬅️ Zurück zur Startseite
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;