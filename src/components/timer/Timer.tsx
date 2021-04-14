import React, { useState, useEffect } from "react";

export function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRun, setIsRun] = useState(false);
  useEffect(() => {
    if (isRun) {
      let timer = setInterval(() => {
        if (seconds > 58) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else setSeconds(seconds + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds, isRun]);
  //console.log(seconds);
  function clickHandler(): void {
    setIsRun(!isRun);
  }
  function clickHandlerRefresh(): void {
    setMinutes(0);
    setSeconds(0);
    setIsRun(false);
  }
  return (
    <>
      <div>
        {`${(minutes < 10 && "0" + minutes) || minutes}
            :
        ${(seconds < 10 && "0" + seconds) || seconds}`}
      </div>
      <button onClick={clickHandler} disabled={isRun}>
        start
      </button>
      <button onClick={clickHandler} disabled={!isRun}>
        stop
      </button>
      <button onClick={clickHandlerRefresh}>refresh</button>
    </>
  );
}
