import Timer from "../../components/Timer";

const { useState, useEffect } = require("react");

function ShowTimer() {
  const [showTimer, setShowTimer] = useState(false);

  const handleToggleButton = (event) => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={handleToggleButton}>Toggle Timer</button>
    </div>
  );
}

export default ShowTimer;
