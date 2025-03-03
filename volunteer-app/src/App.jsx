import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Opportunity from "./pages/Opportunity";
import Saved from "./pages/Saved";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <div className = "App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={Home}/>
        <Route path="/opportunities" element={<Opportunity />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
