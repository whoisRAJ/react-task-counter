import React, { useState, useEffect } from "react";
import "./style.css";

export default function Script() {
  const [count, setCount] = useState(1000);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timer) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="Script">
      <h1>${count}</h1>
      <button id="btn1" onClick={() => setTimer(true)}>
        START
      </button>
      <button id="btn2" onClick={() => setTimer(false)}>
        STOP
      </button>
    </div>
  );
}
