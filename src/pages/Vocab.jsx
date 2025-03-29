import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/IT-BG.png';
import vocabData from '../data/vocabData';

function Vocab() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [direction, setDirection] = useState('de-en'); // oder 'en-de'
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
    setInputs(Array(shuffled.length).fill(''));
  }, [direction]);

  const handleChange = (index, value) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleSubmit = () => {
    const result = shuffledData.map((item, idx) => {
      const correctAnswer =
        direction === 'de-en' ? item.english.toLowerCase() : item.german.toLowerCase();
      const userInput = inputs[idx].trim().toLowerCase();
      const isCorrect = userInput === correctAnswer;

      return {
        ...item,
        userInput: inputs[idx],
        wasCorrect: isCorrect,
        correctAnswer: correctAnswer,
      };
    });
    setFeedback(result);
    setShowResult(true);
  };

  const reset = () => {
    const reshuffled = [...vocabData].sort(() => Math.random() - 0.5);
    setShuffledData(reshuffled);
    setInputs(Array(reshuffled.length).fill(''));
    setFeedback([]);
    setShowResult(false);
  };

  const toggleDirection = () => {
    setDirection((prev) => (prev === 'de-en' ? 'en-de' : 'de-en'));
    reset();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-300">
            {showResult ? '📊 Ergebnis' : '🧠 Vokabeltest'}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            ⬅️ Zurück zur Startseite
          </button>
        </div>

        <div className="text-sm mb-4 flex justify-between items-center">
          <span className="text-white/80">
            Richtung: <strong>{direction === 'de-en' ? 'Deutsch ➜ Englisch' : 'Englisch ➜ Deutsch'}</strong>
          </span>
          <button
            onClick={toggleDirection}
            className="text-xs bg-white/20 px-3 py-1 rounded hover:bg-white/30"
          >
            🔄 Richtung wechseln
          </button>
        </div>

        <table className="w-full text-left table-auto text-sm sm:text-base">
          <thead>
            <tr className="text-blue-200 border-b border-white/10">
              <th className="py-2 pr-4">{direction === 'de-en' ? '🇩🇪 Deutsch' : '🇬🇧 Englisch'}</th>
              <th className="py-2">Antwort ({direction === 'de-en' ? '🇬🇧' : '🇩🇪'})</th>
            </tr>
          </thead>
          <tbody>
            {(showResult ? feedback : shuffledData).map((item, idx) => {
              const question = direction === 'de-en' ? item.german : item.english;
              const answer = direction === 'de-en' ? item.english : item.german;

              return (
                <tr key={idx} className="border-b border-white/5">
                  <td className="py-2 pr-4">{question}</td>
                  <td className="py-2">
                    {showResult ? (
                      <span
                        className={`block px-3 py-1 rounded ${
                          item.wasCorrect
                            ? 'text-green-400 bg-green-800/30'
                            : 'text-red-400 bg-red-800/30'
                        }`}
                      >
                        {item.userInput || '(leer)'}{' '}
                        {!item.wasCorrect && (
                          <span className="block text-xs text-white/70 mt-1">
                            ➤ Richtig: {answer}
                          </span>
                        )}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={inputs[idx]}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        className="w-full px-3 py-1 rounded bg-gray-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {!showResult ? (
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded transition"
          >
            ✅ Auswerten
          </button>
        ) : (
          <>
            <p className="text-center text-xl text-white mt-6 mb-2">
              Du hast {feedback.filter(f => f.wasCorrect).length} von {feedback.length} richtig.
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              <button
                onClick={reset}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                🔁 Noch einmal
              </button>
              <button
                onClick={() => navigate('/')}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                ⬅️ Zurück zur Startseite
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Vocab;
