import React from 'react'
import { assets } from '../../assets/Home-assets/assets'
import { Achieve } from '../../assets/Home-assets/achieve-card'


function Achievements() {
  return (
    <div className='bg-custom-black py-3 lg:py-10'>
      <h1 className='text-center font-roboto text-custom-blue font-semibold text-3xl lg:text-5xl'>Achievements</h1>
      <div className='flex justify-center px-8 py-4'>
        <Achieve icons = {assets.mask} dash={590} desc={'Network'}  > </Achieve>
        <Achieve icons = {assets.icon4} dash={9} desc={'Years of Experience'}  > </Achieve>
        <Achieve icons = {assets.icon1} dash={60} desc={'Online/Offline Contest'}  > </Achieve>
        <Achieve icons = {assets.icon3} dash={200} desc={'Members'}  > </Achieve>
      </div>
      
    </div>
  )
}

export default Achievements
