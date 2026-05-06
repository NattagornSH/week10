import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";
import FormInput from "./FormInput";

const LoginForm = ({ onLogin, onStartMusic }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Start music on first interaction
    if (onStartMusic) {
      onStartMusic();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    // If validation passes, call onLogin
    onLogin(formData.email);
    setFormData({ email: "", password: "" });
  };

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
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated sky background with clouds (fallback) */}
      <div className="absolute inset-0 overflow-hidden star-pattern opacity-50">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-200/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-sparkle"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-star-twinkle"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-star-twinkle"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full border-4 border-genshin-accent golden-glow animate-fade-in">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-genshin-accent rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-genshin-accent rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-genshin-accent rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-genshin-accent rounded-br-3xl"></div>

        {/* Header */}
        <div className="text-center mb-8 animate-slide-in">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-4 transform hover:scale-110 transition-all duration-300">
            <img
              src="/paimonIntro.png"
              alt="Paimon"
              className="w-full h-full object-contain drop-shadow-2xl animate-float"
            />
          </div>
          <h1 className="genshin-title text-5xl font-bold bg-gradient-to-r from-genshin-blue via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2 tracking-wide">
            Teyvat Awaits
          </h1>
          <p className="text-genshin-dark/70 text-sm">
            Begin your journey across the seven nations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Traveler's Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@teyvat.com"
            icon="email"
          />

          {/* Password Field */}
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Secret Code"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
            icon="lock"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="genshin-button group relative w-full text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-genshin-accent/50 text-lg shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-3 genshin-title">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Start Adventure
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </form>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-genshin-blue/30">
          <div className="flex gap-3">
            <svg
              className="w-5 h-5 text-genshin-blue shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs text-genshin-dark/70 leading-relaxed">
              <strong className="text-genshin-blue font-semibold">
                Traveler's Note:
              </strong>{" "}
              Your progress is saved in the Adventurer's Handbook using
              localStorage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
