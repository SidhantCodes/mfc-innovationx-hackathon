import React from 'react'
import search from '/search.png'
const PriceCardFREE = () => {
  return (
    <div className='bg-[#efebff] w-72 h-96 flex flex-col rounded-3xl items-center justify-center'>
      <h2 className='font-outfit font-bold text-[28px] p-5 text-center'>Free</h2>
      <div className="img ">
        <img src={search} className='h-[85px] my-5'/>
      </div>
      <div className="desc font-outfit font-semibold text-[18px] text-center">
        Ensure your URL is safe <br /> from Explicit content
      </div>
      <div className="free bg-[#0069ff] font-bold text-white w-72 h-full m text-center text-[30px] mt-16 round">
        <h1>Free</h1>
      </div>
      
    </div>
  )
}

export default PriceCardFREE
