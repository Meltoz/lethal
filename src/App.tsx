import React from 'react';
import './App.css';
import Hero from "./components/Hero/Hero";
import History from "./components/history/History";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
        <Hero />
        <History />
    </div>
  );
}

export default App;
