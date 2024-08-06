import React, { useState } from 'react'
import { assets } from '../../assets/Home-assets/assets'
import { Card } from '../../assets/Home-assets/about-card'

function About() {

  return (
    <div className='bg-custom-black py-6'>
      <h1 className='text-center font-roboto text-custom-blue font-semibold text-3xl lg:text-5xl lg:pb-10'>Who are we?</h1>
      <div className='flex'>
        

        {/**Check the about card in the home jsx for the card details */}

        <Card imgSrc={assets.icon1} card_title="mission" descirption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero placeat vero ex omnis quidem voluptatum facilis temporibus voluptate deserunt." ></Card>
        <Card imgSrc={assets.icon2} card_title="value" descirption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero placeat vero ex omnis quidem voluptatum facilis temporibus voluptate deserunt."></Card>
        <Card imgSrc={assets.icon3} card_title="vision" descirption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero placeat vero ex omnis quidem voluptatum facilis temporibus voluptate deserunt."></Card>
      </div>
    </div>
  )
}

export default About
