import "./styles/style.css"
import "./styles/bodystyle.css"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio";
import Credits from "./components/Credits";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />}/>
        <Route path="/MyPortfolio" element={<Portfolio />}/>
        <Route path="/credits" element={<Credits />}/>
      </Routes>
    </div>
  );
}

export default App;
