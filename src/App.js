import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle";
import ResultPage from "./pages/ResultPage.js/ResultPage";
import SimulatorPage from "./pages/SimulatorPage/SimulatorPage";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage/>} />
            <Route path="/simulator" element={<SimulatorPage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
