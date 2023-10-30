import "./App.css";
import First from "./pages/First";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Second from "./pages/Second";
import Third from "./pages/third";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/2000-2003" element={<First />} />
        <Route path="/2004-2006" element={<Second />} />
        <Route path="/2007-2010" element={<Third />} />
      </Routes>
    </Router>
  );
}

export default App;
