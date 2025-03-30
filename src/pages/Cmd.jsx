import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Antworten auf Befehle
const cmdResponses = {
  'help': 'Verfügbare Befehle: help, ipconfig, tasklist, dir, cls, exit',
  'ipconfig': `Windows-IP-Konfiguration\nIPv4-Adresse . . . . . . : 192.168.1.15\nSubnetzmaske . . . . . . : 255.255.255.0\nStandardgateway . . . . : 192.168.1.1`,
  'tasklist': `Image Name       PID Session Name     Speicher\n================ ==== ============== ============\nchrome.exe        324 Console         150.000 K\ncode.exe          412 Console         120.000 K`,
  'dir': `Verzeichnis von C:\\Users\\Name\\Desktop\n\n[.]   Projekt-Ordner\n[..]  Downloads\nindex.html   app.js`,
  'cls': 'CLEAR_SCREEN',
  'exit': 'EXIT_APP'
};

// Aufgabenliste
const cmdTasks = [
  {
    instruction: "Führe den Befehl aus, um die IP-Adresse deines Rechners zu finden.",
    solution: "ipconfig",
    successMessage: "✅ Richtig! Du hast den Befehl korrekt ausgeführt.",
    failureMessage: "❌ Das war nicht der richtige Befehl. Versuch's nochmal."
  },
  {
    instruction: "Zeige alle laufenden Prozesse an.",
    solution: "tasklist",
    successMessage: "✅ Korrekt! Du siehst jetzt die Prozessliste.",
    failureMessage: "❌ Noch nicht ganz. Welcher Befehl zeigt Prozesse?"
  },
  {
    instruction: "Zeige den Inhalt des aktuellen Verzeichnisses an.",
    solution: "dir",
    successMessage: "✅ Perfekt! Der Verzeichnisinhalt wird angezeigt.",
    failureMessage: "❌ Versuch es nochmal. Du willst den Verzeichnisinhalt sehen."
  }
];

function Cmd() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [taskFeedback, setTaskFeedback] = useState('');
  const [taskCompleted, setTaskCompleted] = useState(false);

  const navigate = useNavigate();
  const currentTask = cmdTasks[currentTaskIndex];

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmed = input.trim().toLowerCase();
      let response = cmdResponses[trimmed] || `'${trimmed}' ist kein interner oder externer Befehl.`;

      // Aufgabenlogik
      if (currentTask && !taskCompleted) {
        if (trimmed === currentTask.solution) {
          setTaskFeedback(currentTask.successMessage);
          setTaskCompleted(true);

          // Nächste Aufgabe nach Delay
          setTimeout(() => {
            setTaskCompleted(false);
            setTaskFeedback('');
            if (currentTaskIndex + 1 < cmdTasks.length) {
              setCurrentTaskIndex(currentTaskIndex + 1);
            } else {
              setTaskFeedback("🎉 Alle Aufgaben abgeschlossen!");
            }
          }, 2000);
        } else {
          setTaskFeedback(currentTask.failureMessage);
        }
      }

      // CMD-Logik
      if (response === 'CLEAR_SCREEN') {
        setHistory([]);
      } else if (response === 'EXIT_APP') {
        navigate('/');
      } else {
        setHistory(prev => [...prev, `> ${trimmed}`, response]);
      }

      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl">🖥️ CMD-Simulation</h2>
          <button
            onClick={() => navigate('/')}
            className="text-sm text-green-300 hover:text-white border border-green-400 px-3 py-1 rounded"
          >
            ⬅️ Zurück zur Startseite
          </button>
        </div>

        {currentTask && (
          <div className="bg-green-800 text-white p-4 rounded mb-4">
            <p className="mb-2">🧠 <strong>Aufgabe {currentTaskIndex + 1}:</strong> {currentTask.instruction}</p>
            {taskFeedback && <p className="italic">{taskFeedback}</p>}
          </div>
        )}

        {!currentTask && taskFeedback && (
          <div className="bg-green-900 text-white p-4 rounded mb-4">
            <p className="font-bold text-lg">{taskFeedback}</p>
          </div>
        )}

        <div className="bg-black border border-green-500 p-4 rounded h-[60vh] overflow-y-auto">
          {history.map((line, i) => (
            <div key={i} className="whitespace-pre-line">{line}</div>
          ))}
          <div className="flex mt-2">
            <span className="mr-2">&gt;</span>
            <input
              className="bg-black outline-none text-green-300 flex-1"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cmd;
