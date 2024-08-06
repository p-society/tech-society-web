import React from 'react'
import Carousel from '../../assets/Home-assets/carousel'

function Events() {
  return (
    <div className='bg-custom-black py-6 lg:py-16 '>
      <h1 className='text-center font-roboto text-custom-blue font-semibold text-3xl lg:text-5xl'>Events</h1>
      <p className='text-center text-custom-white text-0.7 px-12 lg:text-base max-w-4xl m-auto lg:py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab at minus iste dolores! Odit saepe voluptate sequi rerum, reiciendis dolorum neque sunt quibusdam officiis dolore consequatur voluptas. Nulla, iusto doloremque!</p>
      <div className=''>
        <div>
            {/** The MUI is not ready so please change it here */}
        </div>
        <div className='mt-10 px-16 max-w-6xl m-auto '>
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  )
}

export default Events
