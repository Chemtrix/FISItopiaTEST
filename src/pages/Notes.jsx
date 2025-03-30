import React, { useState, useEffect } from 'react';

function Notes() {
  const [note, setNote] = useState(() => {
    return localStorage.getItem('fisiNote') || '';
  });

  useEffect(() => {
    localStorage.setItem('fisiNote', note);
  }, [note]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Eigene Notizen</h1>
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