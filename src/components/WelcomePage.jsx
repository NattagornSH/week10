const WelcomePage = ({ userEmail, onLogout }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/loadingGi.mp4" type="video/mp4" />
      </video>

      {/* Overlay to make content more readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-orange-900/40"></div>

      {/* Animated background (fallback) */}
      <div className="absolute inset-0 overflow-hidden star-pattern opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Floating stars */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-sparkle"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-star-twinkle"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-sparkle"
        style={{ animationDelay: "0.7s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-star-twinkle"
        style={{ animationDelay: "1.2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-sparkle"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md w-full border-4 border-genshin-accent golden-glow animate-fade-in">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-genshin-accent rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-genshin-accent rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-genshin-accent rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-genshin-accent rounded-br-3xl"></div>

        <div className="text-center">
          {/* Success Icon with Genshin style */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-yellow-200/40 rounded-full animate-pulse"></div>
            </div>
            <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg golden-glow animate-float">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Floating stars around icon */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full animate-star-twinkle"></div>
            <div
              className="absolute bottom-0 left-0 w-2 h-2 bg-yellow-300 rounded-full animate-star-twinkle"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-3 h-3 bg-orange-300 rounded-full animate-sparkle"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Welcome Text */}
          <h1 className="genshin-title text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent mb-3 tracking-wide">
            Welcome, Traveler!
          </h1>
          <p className="text-genshin-dark/70 mb-8 text-sm">
            Your adventure in Teyvat begins now
          </p>

          {/* User Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8 border-2 border-genshin-blue/30 shadow-inner">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-genshin-blue to-cyan-500 rounded-full flex items-center justify-center shadow-lg blue-glow">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs font-semibold text-genshin-blue uppercase tracking-wider mb-2">
              Adventurer Rank ★★★★★
            </p>
            <p className="text-lg font-bold text-genshin-dark break-all">
              {userEmail}
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="genshin-button group w-full text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg shadow-xl"
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:-rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="genshin-title">Return to Mondstadt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
