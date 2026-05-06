import { useState } from "react";

/**
 * StorageDemo Component
 * Demonstrates the three main browser storage types:
 * 1. localStorage - Persists until explicitly cleared
 * 2. sessionStorage - Persists until tab/window closes
 * 3. Cookies - Persists based on expiration date
 */
function StorageDemo() {
  const [localValue, setLocalValue] = useState("");
  const [sessionValue, setSessionValue] = useState("");
  const [cookieValue, setCookieValue] = useState("");

  // localStorage functions
  const saveToLocal = () => {
    localStorage.setItem("demoLocal", localValue);
    alert("Saved to localStorage! Will persist even after closing browser.");
  };

  const readFromLocal = () => {
    const value = localStorage.getItem("demoLocal");
    alert(`localStorage value: ${value || "Not found"}`);
  };

  const clearLocal = () => {
    localStorage.removeItem("demoLocal");
    setLocalValue("");
    alert("Cleared from localStorage");
  };

  // sessionStorage functions
  const saveToSession = () => {
    sessionStorage.setItem("demoSession", sessionValue);
    alert("Saved to sessionStorage! Will be cleared when you close this tab.");
  };

  const readFromSession = () => {
    const value = sessionStorage.getItem("demoSession");
    alert(`sessionStorage value: ${value || "Not found"}`);
  };

  const clearSession = () => {
    sessionStorage.removeItem("demoSession");
    setSessionValue("");
    alert("Cleared from sessionStorage");
  };

  // Cookie functions
  const saveToCookie = () => {
    // Set cookie with 7 days expiration
    const expirationDays = 7;
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `demoCookie=${cookieValue};${expires};path=/`;
    alert("Saved to Cookie! Will expire in 7 days.");
  };

  const readFromCookie = () => {
    const name = "demoCookie=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        const value = cookie.substring(name.length, cookie.length);
        alert(`Cookie value: ${value}`);
        return;
      }
    }
    alert("Cookie not found");
  };

  const clearCookie = () => {
    document.cookie =
      "demoCookie=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    setCookieValue("");
    alert("Cleared Cookie");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Browser Storage Demo
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* localStorage Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              localStorage
            </h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                ✅ Persists forever
                <br />
                ✅ ~5-10MB capacity
                <br />
                ✅ Same origin access
                <br />❌ Not sent to server
              </p>
            </div>
            <input
              type="text"
              value={localValue}
              onChange={(e) => setLocalValue(e.target.value)}
              placeholder="Enter value"
              className="w-full px-3 py-2 border rounded mb-3"
            />
            <div className="space-y-2">
              <button
                onClick={saveToLocal}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={readFromLocal}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Read
              </button>
              <button
                onClick={clearLocal}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Clear
              </button>
            </div>
          </div>

          {/* sessionStorage Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              sessionStorage
            </h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                ✅ Until tab closes
                <br />
                ✅ ~5-10MB capacity
                <br />
                ✅ Per-tab storage
                <br />❌ Not sent to server
              </p>
            </div>
            <input
              type="text"
              value={sessionValue}
              onChange={(e) => setSessionValue(e.target.value)}
              placeholder="Enter value"
              className="w-full px-3 py-2 border rounded mb-3"
            />
            <div className="space-y-2">
              <button
                onClick={saveToSession}
                className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
              >
                Save
              </button>
              <button
                onClick={readFromSession}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Read
              </button>
              <button
                onClick={clearSession}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Cookies Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Cookies</h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                ✅ Custom expiration
                <br />
                ✅ Sent to server
                <br />
                ✅ Can be httpOnly
                <br />❌ Only ~4KB capacity
              </p>
            </div>
            <input
              type="text"
              value={cookieValue}
              onChange={(e) => setCookieValue(e.target.value)}
              placeholder="Enter value"
              className="w-full px-3 py-2 border rounded mb-3"
            />
            <div className="space-y-2">
              <button
                onClick={saveToCookie}
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              >
                Save
              </button>
              <button
                onClick={readFromCookie}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Read
              </button>
              <button
                onClick={clearCookie}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Storage Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Feature</th>
                  <th className="py-2 px-4">localStorage</th>
                  <th className="py-2 px-4">sessionStorage</th>
                  <th className="py-2 px-4">Cookies</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Lifetime</td>
                  <td className="py-2 px-4">Until cleared</td>
                  <td className="py-2 px-4">Until tab closes</td>
                  <td className="py-2 px-4">Custom expiration</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Capacity</td>
                  <td className="py-2 px-4">~5-10MB</td>
                  <td className="py-2 px-4">~5-10MB</td>
                  <td className="py-2 px-4">~4KB</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Scope</td>
                  <td className="py-2 px-4">Same origin</td>
                  <td className="py-2 px-4">Same tab</td>
                  <td className="py-2 px-4">Same origin</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Sent to Server</td>
                  <td className="py-2 px-4">No</td>
                  <td className="py-2 px-4">No</td>
                  <td className="py-2 px-4">Yes (every request)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Best Use Case</td>
                  <td className="py-2 px-4">User preferences, theme</td>
                  <td className="py-2 px-4">Form data, temp state</td>
                  <td className="py-2 px-4">Auth tokens, tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-blue-800">Try It Out!</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Save values to each storage type</li>
            <li>
              ✅ Refresh the page - localStorage persists, sessionStorage
              persists (same tab)
            </li>
            <li>
              ✅ Open a new tab - localStorage persists, sessionStorage is empty
            </li>
            <li>
              ✅ Close and reopen browser - localStorage persists,
              sessionStorage is gone
            </li>
            <li>✅ Check cookies in DevTools → Application → Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StorageDemo;
