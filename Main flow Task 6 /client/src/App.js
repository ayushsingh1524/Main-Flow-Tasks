import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login-Page";
import SignUp from "./Pages/SignUp-Page";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
