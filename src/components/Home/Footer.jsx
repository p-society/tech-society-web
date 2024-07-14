import React from 'react'
import { assets } from '../../assets/Home-assets/assets'

function Footer() {
  return (
    <div className='bg-custom-black pt-2 flex px-6 pb-8'>
      <div className='basis-1/2' >
        <img src={assets.logo} alt="" className='w-36 '/>
        <div className='py-2 px-4'>
          <p className='text-custom-white font-light text-0.5'>Unlock the potential of the digital realm with us, where creativity meets technology.</p>
          <p className='text-custom-white font-light text-0.5 py-1'>©Copyright, 2023 </p>
          <p className='text-custom-white font-light text-0.5'>Tech Society IIIT Bhubanewar</p>
        </div>
      </div>

      {/**Links section */}

      <div className=' basis-1/2'>
        <h2 className='font-roboto font-semibold text-custom-white'>LINKS</h2>
        <div className='flex'>
          <div>
            <ul className='font-roboto text-custom-white text-0.7 font-thin basis-1/2'>
              <li className='py-0.5'><a href="">About</a></li>
              <li className='py-0.5'><a href="">Gallery</a></li>
              <li className='py-0.5'><a href="">Contact</a></li>
            </ul>
          </div>
          <div>
          <ul className='font-roboto text-custom-white text-0.7 font-thin pl-2 basis-1/2'>
              <li className='py-0.5'><a href="">Help and support</a></li>
              <li className='py-0.5'><a href="">Privacy policy</a></li>
              <li className='py-0.5'><a href="">Terms of uses</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
