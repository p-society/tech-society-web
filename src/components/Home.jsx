import React from 'react';
import './Home.css'; // Your CSS file
import Imgi from './imgi.jsx';

const Home = () => {
    return (
        <>
            <div className="mb">



            </div>
            <div className="fd">
                <h2 className='mx-auto mt-8 text-center leading-relaxed text-yellow-600 text-weight-900 text-3xl font-bold  '>WHAT IS TECH-SOCIETY? </h2>
                <p className='mx-auto mt-0 max-w-5xl text-center leading-relaxed text-black-500 dark:text-black-900 text-xl'>
                    The main div uses display: flex to align both child divs (left and right)
                    horizontally. `justify-content: space-between` ensures the left div is aligned
                    to the left and the right div to the right. `align-items: flex-start` aligns
                    both divs at the top, but you can manually shift the right div lower by adding
                    margin-top to it.
                </p>
                <button className='jd'>Know More</button>
            </div>
        </>
    );
};

export default Home;
