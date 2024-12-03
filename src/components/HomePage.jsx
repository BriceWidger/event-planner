// HomePage.jsx
import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeMainPicture from "./HomeMainPicture";
import CountDownClock from "./CountDownClock";
import KeynoteSpeakers from "./KeynoteSpeakers";
import DontMissOut from "./DontMissOut";
import Schedule from "./Schedule";
import ConferenceLocation from "./ConferenceLocation";
import Sponsors from "./Sponsors";
import NewsAndUpdates from "./NewsAndUpdates";
import Footer from "./Footer";

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
        <ConferenceLocation />
        <Sponsors />
        <NewsAndUpdates />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
