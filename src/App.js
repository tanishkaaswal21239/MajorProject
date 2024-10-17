import React from 'react';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import './index.css';

function App() {
  return (
    <div className="bg-green-700 text-white min-h-screen">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
