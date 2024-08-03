import React from 'react'
import { assets } from '../../assets/Home-assets/assets'

function Hero() {
  return (
    <div className='bg-custom-black px-12 lg:flex lg:px-52 justify-center items-center lg:py-20' >
      <div className='items-center pt-8 lg:pt-4 pb-6 order-2 basis-1/2 lg:translate-x-10' >
          <img src={assets.heroimg} className='bg-slate-200 lg:h-96 m-auto rounded-3xl' alt="Here pic" />
      </div>

      {/**Giving text size of 0.7rem because it is looking good */}

      <div className='text-white text-0.8 font-inter pb-10 order-1 basis-1/2 translate-y-10 -translate-x-10'>
        <img src={assets.logo} className='-translate-y-10 -translate-x-4 invisible lg:visible w-96 ' alt="" />
        <p className='text-0.7 lg:text-base text-center lg:text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default Hero
