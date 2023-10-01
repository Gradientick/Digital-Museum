import "./App.css";
import FirstDecade from "./pages/FirstDecade";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/f" element={<FirstDecade />} />
      </Routes>
    </Router>
  );
}

export default App;
