// App.jsx
import React from "react";
import HomeNavbar from "./components/HomeNavbar";
import HomeMainPicture from "./components/HomeMainPicture";
import CountDownClock from "./components/CountDownClock";
import KeynoteSpeakers from "./components/KeynoteSpeakers";
import DontMissOut from "./components/DontMissOut";
import Schedule from "./components/Schedule";
import ConferenceLocation from "./components/ConferenceLocation";

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
        <DontMissOut />
        <Schedule />
        <ConferenceLocation />
      </main>
    </div>
  );
}

export default App;
