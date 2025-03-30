import React, { useEffect, useState } from 'react';
import {
  FaQuestionCircle,
  FaKeyboard,
  FaBook,
  FaPuzzlePiece,
  FaTerminal,
  FaStickyNote,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import backgroundImage from '../assets/IT-BG.png';
import { Link } from 'react-router-dom';

const itFacts = [
  { tip: "💡 Du kannst 'ipconfig /all' nutzen, um Netzwerkinfos detailliert anzuzeigen.", explanation: "Zeigt IP, Gateway, DNS & MAC-Adressen an." },
  { tip: "⌨️ Mit 'Win + R' öffnest du blitzschnell das Ausführen-Fenster!", explanation: "Schneller Zugriff auf Tools wie 'cmd' oder 'regedit'." },
  { tip: "🔒 HTTPS nutzt Port 443 für verschlüsselte Verbindungen.", explanation: "Sicherer Datenaustausch im Internet." },
  { tip: "🧠 OSI-Schicht 3 ist die Vermittlungsschicht – dort passiert Routing!", explanation: "Zuständig für IP-Adressierung & Routing." },
  { tip: "⚙️ CMD-Befehl 'tasklist' zeigt alle laufenden Prozesse an.", explanation: "Praktisch zur Analyse laufender Programme." },
  { tip: "📡 Eine MAC-Adresse ist die eindeutige Hardwarekennung deiner Netzwerkkarte.", explanation: "Dient zur Geräte-Identifikation im Netzwerk." },
  { tip: "🧱 Firewalls schützen Netzwerke vor unautorisierten Zugriffen.", explanation: "Blockieren gefährliche Verbindungen." },
  { tip: "🧠 RAM ist der Arbeitsspeicher – kurzfristiger Speicher fürs Betriebssystem.", explanation: "Speichert laufende Prozesse & Programme." }
];

function getRandomIndex(exclude, max) {
  let index;
  do {
    index = Math.floor(Math.random() * max);
  } while (index === exclude);
  return index;
}

function Home() {
  const [showButtons, setShowButtons] = useState(false);
  const [factIndex, setFactIndex] = useState(Math.floor(Math.random() * itFacts.length));
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const animateFactChange = () => {
    setFade(false);
    setTimeout(() => {
      const newIndex = getRandomIndex(factIndex, itFacts.length);
      setFactIndex(newIndex);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 400);
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const autoChange = setInterval(() => animateFactChange(), 12000);
    return () => clearInterval(autoChange);
  }, [factIndex]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center flex-col">
        <div className="w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 rounded-full bg-white/10 backdrop-blur text-white flex flex-col items-center justify-center text-center font-extrabold shadow-xl z-10">
          <div className="text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight font-mono">
            FISI<span className="text-blue-400">Topia</span>
          </div>
          <div className="text-xs sm:text-sm md:text-base mt-1 font-medium tracking-wide italic text-blue-300">
            Dimitris persönlicher Lernspace.
          </div>
        </div>

        {isMobile ? (
          <div className="mt-6 grid grid-cols-2 gap-4 px-6 z-30">
            <Link to="/quiz"><CircleButton icon={<FaQuestionCircle />} label="Quiz" /></Link>
            <Link to="/fillin"><CircleButton icon={<FaKeyboard />} label="Lückentext" /></Link>
            <Link to="/vocab"><CircleButton icon={<FaBook />} label="Vokabeln" /></Link>
            <Link to="/dragdrop"><CircleButton icon={<FaPuzzlePiece />} label="Drag & Drop" /></Link>
            <Link to="/cmd"><CircleButton icon={<FaTerminal />} label="CMD" /></Link>
            <CircleButton icon={<FaStickyNote />} label="Notizen" />
          </div>
        ) : (
          <div className="absolute inset-0 z-20">
            <Link to="/quiz">
              <AnimatedRay angle={0} icon={<FaQuestionCircle />} label="Quiz starten" show={showButtons} delay={0} />
            </Link>
            <Link to="/fillin">
              <AnimatedRay angle={60} icon={<FaKeyboard />} label="Lückentext üben" show={showButtons} delay={0.1} />
            </Link>
            <Link to="/vocab">
              <AnimatedRay angle={120} icon={<FaBook />} label="Vokabeln lernen" show={showButtons} delay={0.2} />
            </Link>
            <Link to="/dragdrop">
              <AnimatedRay angle={180} icon={<FaPuzzlePiece />} label="Drag & Drop Aufgaben" show={showButtons} delay={0.3} />
            </Link>
            <Link to="/cmd">
              <AnimatedRay angle={240} icon={<FaTerminal />} label="CMD & Befehle testen" show={showButtons} delay={0.4} />
            </Link>
            <AnimatedRay angle={300} icon={<FaStickyNote />} label="Notizen & Spickzettel" show={showButtons} delay={0.5} />
          </div>
        )}
      </div>

      <div className="mt-12 px-10 py-6 bg-white/10 backdrop-blur rounded-xl text-white text-center text-sm sm:text-base max-w-lg border border-white/20 shadow-md relative">
        <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <p>
            <span className="text-blue-300 font-semibold">Tipp:</span> {itFacts[factIndex].tip}
            <br />
            <span className="text-white/70 text-xs italic">{itFacts[factIndex].explanation}</span>
          </p>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center px-2">
          <button onClick={animateFactChange} className="text-white/50 hover:text-white transition text-xl">
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <button onClick={animateFactChange} className="text-white/50 hover:text-white transition text-xl">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

function AnimatedRay({ angle, icon, label, show, delay = 0 }) {
  const [distance, setDistance] = useState(280);

  const getResponsiveDistance = () => {
    const vw = window.innerWidth;
    if (vw < 400) return 130;
    if (vw < 600) return 160;
    if (vw < 800) return 200;
    if (vw < 1024) return 240;
    return 280;
  };

  useEffect(() => {
    const updateDistance = () => setDistance(getResponsiveDistance());
    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, []);

  const rad = (angle * Math.PI) / 180;
  const finalX = distance * Math.cos(rad);
  const finalY = distance * Math.sin(rad);

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: show
          ? `translate(-50%, -50%) translate(${finalX}px, ${finalY}px) scale(1)`
          : `translate(-50%, -50%) scale(0)`,
        transition: `transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.7s ease-out ${delay}s`,
        opacity: show ? 1 : 0,
        willChange: 'transform, opacity'
      }}
    >
      <CircleButton icon={icon} label={label} />
    </div>
  );
}

function CircleButton({ icon, label }) {
  return (
    <button className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/10 backdrop-blur rounded-full flex flex-col items-center justify-center text-white hover:bg-white/20 shadow-md transition text-center p-2 text-sm sm:text-base">
      <div className="text-xl sm:text-2xl md:text-3xl mb-1">{icon}</div>
      <span>{label}</span>
    </button>
  );
}

export default Home;
