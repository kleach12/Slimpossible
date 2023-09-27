import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Dashboard } from "./pages/Dashboard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // setData(data)
      });
  }, []);

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        
        {/* This will be the top dashboard */}
        <Header/>
        {/* This will be the side dashboard */}
        <Navbar/>
        {/* This will be the main dashboard */}
       {/* <Dashboard/> */}
      </header>
    </div>
  );
}

export default App;
