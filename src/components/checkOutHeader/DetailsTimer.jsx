import React, { useState, useEffect } from "react";

const DetailsTimer = () => {
  const [time, setTime] = useState(480); // 8 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <p
      className="text-center"
      style={{
        fontWeight: 800,
        fontSize: 13,
        marginBottom: 0,
        marginRight: 28,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#334999",
      }}
    >
      <img
        src="/images/clock-icon-blue.png"
        style={{ width: 12.5, height: 12.5, marginRight: 4 }}
      />
      {minutes}:{seconds.toString().padStart(2, "0")}
    </p>
  );
};

export default DetailsTimer;
