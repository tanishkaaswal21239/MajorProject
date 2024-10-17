import React from 'react';
import './LandingPage.css';
const LandingPage = () => {
  return (
    <div className='bg-custom-image'>
    <main className="flex flex-col items-center justify-center text-center p-10">
      <h2 className="text-4xl font-bold mb-4 mt-16 ">Digital rails for <span className="text-yellow-500">climate finance</span></h2>
      <p className="mb-20 mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl urna, aliquet eu tincidunt sed, molestie eget nisl. Mauris sit amet malesuada eros. Morbi vitae tristique arcu. In mollis, mi id sagittis tincidunt, dolor ligula gravida tortor, a lacinia neque purus sit amet odio. Mauris molestie porta felis sit amet interdum. Sed eget lacus nisl. Curabitur nisl magna, ultricies non lobortis vitae, gravida rhoncus mi.

Integer id ex ut lectus congue sodales eget at lectus. Maecenas in sapien at urna dictum lobortis. Maecenas aliquet aliquam purus et interdum. Morbi in auctor justo. Nunc scelerisque nunc condimentum felis tincidunt, id posuere magna vulputate. Curabitur fringilla est ut molestie auctor. Phasellus in velit at ex rhoncus convallis in nec nisi. Etiam porta gravida enim id hendrerit.</p>
      <div className="flex space-x-4">
        <a href="/" className="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600">Learn more</a>
      </div>
    </main>
    </div>
  );
};

export default LandingPage;
