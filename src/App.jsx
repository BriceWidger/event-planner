// App.jsx
import React from "react";
import HomeNavbar from "./components/HomeNavbar";
import HomeMainPicture from "./components/HomeMainPicture";
import CountDownClock from "./components/CountDownClock";
import KeynoteSpeakers from "./components/KeynoteSpeakers";

function App() {
  return (
    <div className="app-container">
      <header>
        <HomeNavbar />
      </header>
      <main>
        <HomeMainPicture />
        <CountDownClock />
        <KeynoteSpeakers />
      </main>
    </div>
  );
}

export default App;
