import React from 'react'
import { assets } from '../../assets/Home-assets/assets'

function Sponsors() {
  return (
    <div className='bg-custom-black px-12 pb-6 lg:pt-16 lg:pb-28'>
      {/* Sponsors section  */}
      <h1 className='text-center font-roboto text-custom-blue font-semibold text-3xl lg:text-5xl'>Sponsors</h1>
      <div className='lg:flex lg:justify-center'>
        <div className=' flex justify-center h-24 -translate-x-4'>
          <img src={assets.sponsor1} alt="" className='lg:w-fit lg:h-36 lg:translate-x-4' />
        </div>
        <div className=' flex justify-center h-24'><img src={assets.sponsor2} alt="" className='lg:w-88 lg:h-36 ' /></div>
      </div>
    </div>
  )
}

export default Sponsors
