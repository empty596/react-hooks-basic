import React from "react";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock(props) {
  const { timeString } = useClock();
  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
}

export default Clock;
