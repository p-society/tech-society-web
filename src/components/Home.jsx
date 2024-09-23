import React from 'react';
import './Home.css'; // Your CSS file
import Imgi from './imgi.jsx';

const Home = () => {
  return (
    <>
      <div className="mb">



      </div>
      <div className="fd">
        <h2 className='mx-auto mt-16 text-center leading-relaxed text-blue-500 text-weight-900 text-3xl font-bold  '>WHAT IS TECH-SOCIETY? </h2>
        <p className='mx-auto mt-0 max-w-5xl text-center leading-relaxed text-black-500 dark:text-black-900 text-xl'>
          The main div uses display: flex to align both child divs (left and right)
          horizontally. `justify-content: space-between` ensures the left div is aligned
          to the left and the right div to the right. `align-items: flex-start` aligns
          both divs at the top, but you can manually shift the right div lower by adding
          margin-top to it.
        </p>
        <div className='mx-auto mt-2 mb-4 max-w-md text-center leading-relaxed'>
          <a href="#" role="button" class="inline-flex items-center rounded-full border-2 border-sky-500 text-sky-500 hover:border-sky-500 hover:bg-sky-400 hover:bg-opacity-10 hover:text-white focus:border-blue-700 focus:text-blue-700 active:bg-blue-700 active:text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short ml-2 transition-colors" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
            </svg>
          </a>
        </div>


      </div>
    </>
  );
};

export default Home;
