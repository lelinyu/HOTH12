import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home}/>
      </Routes>
      </Router>
      <h1 className = "top-left"> Welcome to the Webpage </h1>
    </div>
    </>
  );
}

export default App;
