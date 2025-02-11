// HomePage.jsx
import React from "react";
import HomeNavbar from "./homeNavbar/HomeNavbar";
import HomeMainPicture from "./homeMainPictureComponent/HomeMainPictureComponent";
import CountDownClock from "../countDownClock/CountDownClock";
import KeynoteSpeakers from "./speakers/KeynoteSpeakers";
import DontMissOut from "./DontMissOut";
import Schedule from "./schedule/Schedule";
import ConferenceLocationContainer from "./conferenceLocation/ConferenceLocationContainer";
import Sponsors from "./sponsors/Sponsors";
import NewsAndUpdates from "./newsAndUpdates/NewsAndUpdatesContainer";
import HomeFooter from "./footer/Footer";

function HomePage() {
  return (
    <div className="app-container">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
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
