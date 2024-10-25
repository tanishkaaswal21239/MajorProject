import React from 'react';
import './LandingPage.css';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';
const LandingPage = () => {
  return (
    <div>
    <main className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-emerald-50  via-emerald-100 to-emerald-50 h-screen">
      <h1 className="text-5xl font-semibold text-emerald-800 mr-50"> GreenXchange</h1>
      <h2 className="text-2xl mb-4 mt-2 text-black">Digital pathways for <span className="text-emerald-700 text-2xl font-semibold font-mono">green credits</span></h2>
      <p className=" text-black mb-20 mt-11 mr-20 ml-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl urna, aliquet eu tincidunt sed, molestie eget nisl. ultricies non lobortis vitae, gravida rhoncus mi.
        </p>
      <div className="flex space-x-4">
      <a href="/" className="bg-emerald-500 text-white rounded-full px-6 py-3 hover:bg-emerald-300">Learn more ↓ </a>
      </div>
    </main>
    <div>
        <Feature/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
