import React from 'react';

// FeatureCard Component to represent each feature
const FeatureCard = ({ title, description, image, alt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-left">
      <h3 className="text-xl font-semibold text-teal-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#learn-more" className="text-pink-600 font-medium hover:underline">Learn more →</a>
      <img src={image} alt={alt} className="mt-4 rounded-lg" />
    </div>
  );
};

// Main Feature component representing the whole "What we offer" section
const Feature = () => {
  return (
    <section className="py-12 px-6 bg-emerald-600">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-950 mb-4">What we offer</h2>
        <p className="text-lg text-gray-600">
          Our product suite provides key insights and tooling for project developers, credit buyers, and everyone in between.
          All carbon market actors can use our tools to smoothly navigate the complex landscape of climate finance.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          title="Instant settlements"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl urna, aliquet eu tincidunt sed, molestie eget nisl. Mauris sit amet malesuada eros."
        />
        <FeatureCard 
          title="Data transparency"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl urna, aliquet eu tincidunt sed, molestie eget nisl. Mauris sit amet malesuada eros."
        />
        <FeatureCard 
          title="Verified retirements"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl urna, aliquet eu tincidunt sed, molestie eget nisl. Mauris sit amet malesuada eros."
        />
      </div>
    </section>
  );
};

export default Feature;
