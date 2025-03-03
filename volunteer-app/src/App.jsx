import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/opportunities" element={<Opportunity />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
