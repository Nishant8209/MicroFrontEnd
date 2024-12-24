import React, { useEffect, useState } from "react";

const MicrofrontendA = ({ eventBus }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Subscribe to the "hostEvent"
    const listener = (data) => {
      setMessage(data); // Update the message state when the event is received
    };

    eventBus.on("hostEvent", listener);

    // Cleanup to avoid memory leaks when the component unmounts
    return () => {
      eventBus.off("hostEvent", listener);
    };
  }, [eventBus]);

  // Emit a "ChildEvent" when the button is clicked
  const handleButtonClick = () => {
    eventBus.emit("ChildEvent", "Data from Child App");
  };

  return (
    <div>
      {/* Display the received message or a waiting message */}
      <p>
        {message ? `Microfrontend A received: ${message}` : "Waiting for event..."}
      </p>
      <button onClick={handleButtonClick}>Emit Event from Child</button>
    </div>
  );
};

export default MicrofrontendA;
