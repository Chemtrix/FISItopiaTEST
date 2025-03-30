import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import FillIn from './pages/FillIn';
import Vocab from './pages/Vocab';
import DragDrop from './pages/DragDrop';
import Cmd from './pages/Cmd';
import Notes from './pages/Notes';




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/fillin" element={<FillIn />} />
          <Route path="/vocab" element={<Vocab />} />
          <Route path="/dragdrop" element={<DragDrop />} />
          <Route path="/cmd" element={<Cmd />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;