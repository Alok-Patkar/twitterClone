import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Trends from "./Components/Trends";
import Tweets from "./Components/Tweets";

function App() {
  return (
    <div className="twitter">
      <SideBar />
      <Tweets />
      <Trends />
    </div>
  );
}

export default App;
