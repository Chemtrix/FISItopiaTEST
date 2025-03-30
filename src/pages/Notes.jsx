import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Notes() {
  const [note, setNote] = useState(() => {
    return localStorage.getItem('fisiNote') || '';
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('fisiNote', note);
  }, [note]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Eigene Notizen</h1>

      <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
      >
        ⬅️ Zurück zur Startseite
      </button>

      <textarea
        className="w-full h-[70vh] p-4 rounded-lg bg-gray-800 text-white focus:outline-none"
        placeholder="Schreibe hier deine Notizen, Merksätze oder Spickzettel rein..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}

export default Notes;