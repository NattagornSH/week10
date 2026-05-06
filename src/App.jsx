import "./App.css";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import LoginForm from "./components/LoginForm";
import WelcomePage from "./components/WelcomePage";

function App() {
  const { isLoggedIn, userEmail, login, logout } = useAuth();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto play music on component mount
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.log("Auto-play prevented by browser:", err);
        });
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log("Audio play failed:", err);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const startMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play failed:", err);
        });
    }
  };

  return (
    <>
      {/* Global Background Music */}
      <audio ref={audioRef} loop>
        <source src="/Dawn-Winery-Theme.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group golden-glow"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? (
          <svg
            className="w-6 h-6 text-genshin-blue"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-genshin-blue"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {isLoggedIn ? (
        <WelcomePage userEmail={userEmail} onLogout={logout} />
      ) : (
        <LoginForm onLogin={login} onStartMusic={startMusic} />
      )}
    </>
  );
}

export default App;
