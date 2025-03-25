import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountDownClock.css";

const CountDownClock = () => {
  const getDynamicDate = () => {
    const now = new Date();
    now.setDate(now.getDate() + 20);
    now.setHours(now.getHours() + 5);
    return now;
  };

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / (1000 * 60)) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    return { d: 0, h: 0, m: 0, s: 0 };
  };

  const [targetDate] = useState(getDynamicDate());
  const [cd, setCD] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCD(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const fmtNum = (n) => n.toString().padStart(2, "0");

  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#e9e9e9",
          padding: "34px 0",
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="row stop-expanding justify-content-center text-center"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <div className="clock-digit-container">
            <div>
              <div className="clock-digit">
                <span>{fmtNum(cd.d)[0]}</span>
                <span>{fmtNum(cd.d)[1]}</span>
              </div>
              <div>days</div>
            </div>
            <div>
              <div className="clock-digit">
                <span>{fmtNum(cd.h)[0]}</span>
                <span>{fmtNum(cd.h)[1]}</span>
              </div>
              <div>hours</div>
            </div>
            <div>
              <div className="clock-digit">
                <span>{fmtNum(cd.m)[0]}</span>
                <span>{fmtNum(cd.m)[1]}</span>
              </div>
              <div>minutes</div>
            </div>
            <div>
              <div className="clock-digit">
                <span>{fmtNum(cd.s)[0]}</span>
                <span>{fmtNum(cd.s)[1]}</span>
              </div>
              <div>seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownClock;
