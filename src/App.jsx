import React, { useState } from "react";
import Timer from "./components/Timer";
import Social from "./components/Social";
import TimeForm from "./components/TimeForm";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [isGetTime, setGetTime] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);
  const [time, setTime] = useState(null);

  return (
    <div className="app">
      <main>
        <h2>WE'RE LAUNCHING SOON</h2>
        {isCompleted ? (
          <Button
            style={{ maxWidth: "500px" }}
            onClick={() => setGetTime(true)}
          >
            Get time
          </Button>
        ) : (
          <Timer time={time} setIsCompleted={setIsCompleted} />
        )}
        {isGetTime && (
          <TimeForm
            setVisible={setGetTime}
            setTime={setTime}
            setIsCompleted={setIsCompleted}
          />
        )}
      </main>
      <footer>
        <Social />
      </footer>
    </div>
  );
};

export default App;
