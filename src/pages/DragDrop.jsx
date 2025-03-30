import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/IT-BG.png';

console.log("✅ DragDrop Component geladen!");

function DragDrop() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white p-4 text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">🚧 Kommt sehr bald!</h1>
        <p className="text-white/90 text-base sm:text-lg">
          Der Bereich <span className="text-blue-400 font-semibold">„Drag & Drop Aufgaben“</span> befindet sich aktuell noch in der Entwicklung.
        </p>
        <p className="mt-4 text-sm text-white/60 italic">Du wirst gleich zur Startseite weitergeleitet...</p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition"
        >
          ⬅️ Zurück zur Startseite
        </button>
      </div>
    </div>
  );
}

export default DragDrop;