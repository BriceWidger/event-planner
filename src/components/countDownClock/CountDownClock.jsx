import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CountDownClock.css";

const CountDownClock = () => {
  const [cd, setCD] = useState({ d: 2, h: 20, m: 1, s: 26 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { d, h, m, s } = cd;
      if (s > 0) {
        setCD({ ...cd, s: s - 1 });
      } else if (m > 0) {
        setCD({ ...cd, m: m - 1, s: 59 });
      } else if (h > 0) {
        setCD({ ...cd, h: h - 1, m: 59, s: 59 });
      } else if (d > 0) {
        setCD({ ...cd, d: d - 1, h: 23, m: 59, s: 59 });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [cd]);

  const fmtNum = (n) => n.toString().padStart(2, "0");

  return (
    <div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#e9e9e9", padding: "34px 0" }}
      >
        <div className="row stop-expanding justify-content-center text-center">
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