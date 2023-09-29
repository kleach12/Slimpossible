import "./App.css";
// import { useState, useEffect } from "react";
import { Dashboard } from "./pages/Dashboard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Friends from "./pages/Friends";
function App() {
  return (
    <div className="App">
      {/* This will be the top dashboard */}
      <Header />
      {/* This will be the side dashboard */}
      <Navbar />
      {/* This will be the main dashboard */}
      {/* <Dashboard/> */}
      {/* {This will be the page where the user can see their friends and add new friends} */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
