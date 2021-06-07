import { useEffect, useState } from "react";

useClock.propTypes = {};

function formatTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const timeClock = setInterval(() => {
      const now = new Date();
      const newTime = formatTime(now);

      setTimeString(newTime);
    }, 1000);

    return () => {
      if (timeClock) {
        clearInterval(timeClock);
      }
    };
  });
  return { timeString };
}

export default useClock;
