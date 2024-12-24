
import React from 'react';
import eventBus from '../eventBus';
import MicrofrontendA from '../../../Home/src/components/MicrofrontendA';

const Test = () => {
  const handleButtonClick = () => {

    eventBus.emit('hostEvent', 'Data from Host App');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Emit Event from Host</button>
      <MicrofrontendA eventBus={eventBus} />
    
    </div>
  );
};

export default Test;
