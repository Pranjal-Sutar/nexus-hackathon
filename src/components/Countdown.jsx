import { Fragment, useEffect, useState } from "react";

const TARGET = new Date("2026-10-24T09:00:00").getTime();

function calculateTime() {
  const difference = Math.max(TARGET - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    ["days", "DAYS"],
    ["hours", "HRS"],
    ["minutes", "MIN"],
    ["seconds", "SEC"],
  ];

  return (
    <div className="countdown" role="timer" aria-live="off">
      {units.map(([key, label], index) => (
        <Fragment key={key}>
          {index > 0 && <b aria-hidden="true">:</b>}
          <div>
            <strong>{String(time[key]).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Countdown;