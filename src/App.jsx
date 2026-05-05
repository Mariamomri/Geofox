// import { useState } from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Resultats from "./pages/Resultats";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resultats" element={<Resultats />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
