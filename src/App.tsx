import React from 'react';
import './App.css';
import Hero from "./components/hero/Hero";
import History from "./components/history/History";
import About from "./components/about/About";
import Review from "./components/review/review";
import JoinUs from "./components/joinus/join-us";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="bg-neutral-900 text-white">
        <Hero />
        <About />
        <History />
        <Review />
        <JoinUs />
        <Footer />
    </div>
  );
}

export default App;
