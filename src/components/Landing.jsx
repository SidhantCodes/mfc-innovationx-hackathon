import React from 'react'
import landing from "/landing.png"
import Price from './Price'
const Landing = () => {
  return (
    <>
    <div className='flex items-center justify-around mx-5 mt-10'>
      <div className="content">
        <h1 className='font-bold text-[45px]'>Securing Online Spaces: <br /> Free from Explicit and Abusive Content</h1>
        <h4 className='font-medium text-[28px]'>
          Safeguarding online spaces with rapid detection and filtering of explicit and abusive content, fostering a secure digital environment for all users.
        </h4>
        <div className="getStarted">
          <button className='text-white bg-[#0069ff] px-8 py-2 text-[18px] rounded-full mt-3 btnHover hover:bg-white hover:text-[#0069ff] hover:ring-2'>Get Started</button>
        </div>
      </div>
      <div className="img">
        <img src={landing} className='w-[1040px]' />
      </div>
    </div>
    {/* pricing */}
    <Price />
    </>
  )
}

export default Landing
