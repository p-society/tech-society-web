import React from 'react'
import { assets } from '../../assets/Home-assets/assets'
import { achieve } from '../../assets/Home-assets/achieve-card'

function Achievements() {
  return (
    <div className='bg-custom-black py-3'>
      <h1 className='text-center font-roboto text-custom-blue font-semibold text-3xl'>Achievements</h1>
      <div>
        <achieve icons = {assets.icon1}></achieve>
      </div>
    </div>
  )
}

export default Achievements
