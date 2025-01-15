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
    <div>
      <style>
        {`
          @media (min-width: 790px) {
            .row.stop-expanding {
              max-width: 790px;
              margin: 0 auto;
            }
          }
        `}
      </style>
      <div className="container-fluid" style={{ backgroundColor: "#e9e9e9", padding: "17px 0" }}>
        <div className="row stop-expanding justify-content-center text-center">
          <div className="col-md-2 col-md-offset-2 col-xs-3" style={{ width: '25%' }}>
            <div className="h1" style={{ fontSize: 60 }}>
              {fmtNum(cd.d)}
            </div>
            days
          </div>
          <div className="col-md-2 col-md-offset-2 col-xs-3" style={{ width: '25%' }}>
            <div className="h1" style={{ fontSize: 60 }}>
              {fmtNum(cd.h)}
            </div>
            hours
          </div>
          <div className="col-md-2 col-md-offset-2 col-xs-3" style={{ width: '25%' }}>
            <div className="h1" style={{ fontSize: 60 }}>
              {fmtNum(cd.m)}
            </div>
            minutes
          </div>
          <div className="col-md-2 col-md-offset-2 col-xs-3" style={{ width: '25%' }}>
            <div className="h1" style={{ fontSize: 60 }}>
              {fmtNum(cd.s)}
            </div>
            seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownClock;