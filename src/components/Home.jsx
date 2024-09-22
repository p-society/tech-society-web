import React from 'react';
import './Home.css'; // Your CSS file
import Imgi from './imgi.jsx';

const Home = () => {
    return (
        <>
            <div className="mb">
         
                
             
            </div>
            <div className="fd">
                    <h2>TechSoc IIIT BHUBANESWAR: </h2>
                    <p>
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
