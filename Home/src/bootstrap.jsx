import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EventBus } from './hooks/useEventBus'; // Import EventBus if needed

// Initialize event listeners before rendering
const initializeEventListeners = () => {
  const eventBus = EventBus.getInstance();

  // Global error handler for events
  window.addEventListener('error', (error) => {
    eventBus.publish('CHILD_ERROR', {
      message: error.message,
      stack: error.error?.stack || 'No stack available',
    });
  });
};

const mount = () => {
  initializeEventListeners();

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

mount();
