import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CountDownClock = () => {
  const [cd, setCD] = useState({ d: 2, h: 20, m: 1, s: 26 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      let { d, h, m, s } = cd;
      if (s > 0) s--;
      else if (m > 0) m--, (s = 59);
      else if (h > 0) h--, (m = 59), (s = 59);
      else if (d > 0) d--, (h = 23), (m = 59), (s = 59);
      setCD({ d, h, m, s });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [cd]);

  const fmtNum = (n) => n.toString().padStart(2, "0");

  return (
    <div
      className="content-block content-block-countdown content-block-theme39-countdown-1 active"
      style={{
        backgroundColor: "#e9e9e9",
        padding: "17px 0",
        height: 154,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container text-center">
        <div
          className="row d-flex justify-content-center"
          style={{ flexWrap: "wrap" }}
        >
          {["days", "hours", "minutes", "seconds"].map((label, i) => (
            <div
              key={i}
              className="col-md-2 col-xs-3 mb-2"
              style={{
                textAlign: "center",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="h1"
                style={{
                  fontSize: 60,
                  margin: 0,
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {fmtNum(
                  cd[
                    label === "days"
                      ? "d"
                      : label === "hours"
                      ? "h"
                      : label === "minutes"
                      ? "m"
                      : "s"
                  ]
                )}
              </div>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins, sans-serif",
                  display: "block",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountDownClock;
