import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>

    
  );
}

export default App;
