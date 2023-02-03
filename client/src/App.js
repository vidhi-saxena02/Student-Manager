import React from "react";
import { Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import LoginPage from "./Pages/LoginPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Routing />} />
      </Routes>
    </div>
  );
};

export default App;
