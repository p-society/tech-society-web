import React from 'react'

function Hero() {
  return (
    <div className='bg-custom-black px-12'>
      <div className='flex justify-center pt-8 pb-6'>
          <img src="" className='bg-slate-200 h-40 w-72' alt="Here pic" />
      </div>

      {/**Giving text size of 0.7rem because it is looking good */}

      <div className='text-white text-0.7 font-inter pb-10'>
        <p className='text-center'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default Hero
