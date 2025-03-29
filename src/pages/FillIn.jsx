import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/IT-BG.png';
import fillInQuestionsRaw from '../data/fillInData';

// Hilfsfunktion für sauberen Vergleich
const normalize = (str) =>
  str.toLowerCase().replace(/[^a-z0-9äöüß]/gi, '').trim();

// Shuffle-Funktion
const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function FillIn() {
  const navigate = useNavigate();
  const [shuffledQuestions] = useState(shuffleArray(fillInQuestionsRaw));
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [answersLog, setAnswersLog] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const current = shuffledQuestions[step];

  const handleSubmit = () => {
    const normalizedInput = normalize(input);
    const isCorrect = current.answer.some((ans) => normalize(ans) === normalizedInput);

    setFeedback(isCorrect);
    setAnswersLog(prev => [
      ...prev,
      {
        question: current.question,
        userAnswer: input,
        correctAnswer: current.answer[0],
        explanation: current.explanation,
        wasCorrect: isCorrect
      }
    ]);

    setTimeout(() => {
      setFeedback(null);
      setInput('');
      if (step + 1 < shuffledQuestions.length) {
        setStep(step + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const reset = () => {
    setStep(0);
    setInput('');
    setFeedback(null);
    setAnswersLog([]);
    setShowResult(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '' && feedback === null) {
      handleSubmit();
    }
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
                Frage {step + 1} von {shuffledQuestions.length}
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
                {current.question}
              </p>
            </div>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={feedback !== null}
              className="w-full mb-4 py-2 px-4 rounded bg-gray-800 border border-white/10 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Deine Antwort hier eingeben..."
            />

            {feedback !== null && (
              <div className={`mb-4 text-center font-semibold ${feedback ? 'text-green-400' : 'text-red-400'}`}>
                {feedback ? '✅ Richtig!' : '❌ Falsch'}
              </div>
            )}

            {feedback !== null && (
              <p className="text-sm text-white/80 italic text-center mb-6">💡 {current.explanation}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={feedback !== null || input.trim() === ''}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded transition w-full"
            >
              Antwort prüfen
            </button>
          </>
        ) : (
  <div className="text-center">
  <h2 className="text-3xl font-bold text-green-400 mb-4">🧠 Übung abgeschlossen</h2>
  <p className="text-xl text-white mb-6">
    Du hast {answersLog.filter(a => a.wasCorrect).length} von {answersLog.length} richtig beantwortet.
  </p>

  <h3 className="text-xl mt-8 text-yellow-300 font-semibold">Falsch beantwortete Fragen:</h3>

  <div className="mt-6 text-left max-h-[400px] overflow-y-auto pr-2 text-sm space-y-4">
    {answersLog.filter(a => !a.wasCorrect).map((entry, idx) => (
      <details key={idx} className="bg-gray-700/60 p-4 rounded cursor-pointer">
        <summary className="font-semibold text-white">❌ {entry.question}</summary>
        <div className="mt-2 text-white/90">
          <p><strong>Deine Antwort:</strong> <span className="text-red-400">{entry.userAnswer}</span></p>
          <p><strong>Richtige Antwort:</strong> <span className="text-green-400">{entry.correctAnswer}</span></p>
          {entry.explanation && (
            <p className="mt-1 italic text-white/70">💡 {entry.explanation}</p>
          )}
        </div>
      </details>
    ))}
  </div>

  <button
    onClick={reset}
    className="mt-6 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
  >
    🔁 Noch einmal üben
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

export default FillIn;
