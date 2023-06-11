import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import tickSound from "../assets/sounds/tick.mp3";
import completeSound from "../assets/sounds/complete.mp3";
import "../styles/timer.css";

const Timer = ({ time, setIsCompleted }) => {
  const tick = new Audio(tickSound);
  const complete = new Audio(completeSound);

  function tickPlay() {
    tick.play();
    console.log("tick");
  }

  function handleComplete() {
    tick.pause();
    tick.currentTime = 0;
    complete.play();
    setIsCompleted(true);
  }

  return (
    <FlipClockCountdown
      to={new Date().getTime() + time}
      showSeparators={false}
      labelStyle={{
        textTransform: "uppercase",
        letterSpacing: "4px",
        color: "var(--grayish-blue)",
      }}
      digitBlockStyle={{ color: "var(--soft-red)", background: "#2d2e45" }}
      dividerStyle={{ height: 0 }}
      onTick={tickPlay}
      onComplete={handleComplete}
      className="flip-clock"
    />
  );
};

export default Timer;
