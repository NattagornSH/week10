import "./App.css";
import { useAuth } from "./hooks/useAuth";
import LoginForm from "./components/LoginForm";
import WelcomePage from "./components/WelcomePage";

function App() {
  const { isLoggedIn, userEmail, login, logout } = useAuth();

  if (isLoggedIn) {
    return <WelcomePage userEmail={userEmail} onLogout={logout} />;
  }

  return <LoginForm onLogin={login} />;
}

export default App;
