import React from 'react'
import Page from '../components/Team/Page'
import Navbar from '../components/Home/Navbar'

function Team() {
  return (
    <div className='h-full pb-8 md:pb-16 lg:pb-20 bg-custom-black pt-[5%] md:pt-[3%] lg:pt-[2%] px-[5%]'>
      <Navbar />
      <Page />
    </div>
  )
}

export default Team
