// eventBus.js
class EventBus {
    constructor() {
     
      this.events = {};
    }
  
    // Subscribe to an event
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Emit an event
    emit(event, ...args) {
      console.log('event',args);
      if (this.events[event]) {
        this.events[event].forEach(listener => listener(...args));
      }
    }
  
    // Unsubscribe from an event
    off(event, listener) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
    
  }
  
  const eventBus = new EventBus();
  export default eventBus;
  