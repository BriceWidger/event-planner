// HomePage.jsx
import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeMainPicture from "./HomeMainPicture";
import CountDownClock from "./CountDownClock";
import KeynoteSpeakers from "./speakers/KeynoteSpeakers";
import DontMissOut from "./DontMissOut";
import Schedule from "./schedule/Schedule";
import ConferenceLocationContainer from "./conferenceLocation/ConferenceLocationContainer";
import Sponsors from "./sponsers/Sponsors";
import NewsAndUpdates from "./NewsAndUpdates";
import HomeFooter from "./HomeFooter";

function HomePage() {
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
        <ConferenceLocationContainer />
        <Sponsors />
        <NewsAndUpdates />
        <HomeFooter />
      </main>
    </div>
  );
}

export default HomePage;
