import React from 'react'
import { assets } from '../../assets/Home-assets/assets'

function Footer() {
  return (
    <div className='bg-custom-black pt-2 flex px-6 pb-8 justify-center lg:px-48'>
      <div className='basis-1/2 m-auto' >
        <img src={assets.logo} alt="" className='w-36 lg:w-64 '/>
        <div className='py-2 px-4'>
          <p className='text-custom-white font-light text-0.5 lg:text-base'>Unlock the potential of the digital realm with us, where creativity meets technology.</p>
          <p className='text-custom-white font-light text-0.5 lg:text-base py-1'>©Copyright, 2023 </p>
          <p className='text-custom-white font-light text-0.5 lg:text-base'>Tech Society IIIT Bhubanewar</p>
        </div>
      </div>

      {/**Links section */}

      <div className=' basis-1/2 lg:translate-x-36 pl-10 sm:pl-0'>
        <h2 className='font-roboto font-semibold text-custom-white lg:text-2xl'>LINKS</h2>
        <div className='flex'>
          <div>
            <ul className='font-roboto text-custom-white text-0.7 font-thin basis-1/2 '>
              <li className='py-0.5 lg:text-base lg:hover:text-white'><a href="">About</a></li>
              <li className='py-0.5 lg:text-base lg:hover:text-white'><a href="">Gallery</a></li>
              <li className='py-0.5 lg:text-base lg:hover:text-white'><a href="">Contact</a></li>
            </ul>
          </div>
          <div>
          <ul className='font-roboto text-custom-white text-0.7 font-thin pl-2 basis-1/2 lg:translate-x-10'>
              <li className='py-0.5 lg:text-base lg:hover:text-white'><a href="">Help and support</a></li>
              <li className='py-0.5 lg:text-base lg:hover:text-white'><a href="">Privacy policy</a></li>
              <li className='py-0.5 lg:text-base lg:hover:text-white'><a href="">Terms of uses</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
