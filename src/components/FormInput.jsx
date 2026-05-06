import { useState } from "react";

const FormInput = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  error,
  placeholder,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getIcon = () => {
    if (icon === "email") {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      );
    }
    if (icon === "lock") {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-genshin-dark mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <div
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
            isFocused
              ? "text-genshin-blue"
              : error
                ? "text-red-500"
                : "text-gray-400"
          }`}
        >
          {getIcon()}
        </div>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl transition-all duration-200 focus:outline-none text-genshin-dark placeholder-gray-400 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-red-50"
              : isFocused
                ? "border-genshin-blue focus:ring-4 focus:ring-genshin-blue/20 shadow-lg"
                : "border-gray-200 hover:border-gray-300"
          }`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      </div>
      {error && (
        <div
          id={`${id}-error`}
          className="flex items-center gap-2 text-red-600 text-sm mt-2 animate-shake font-medium"
          role="alert"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;
