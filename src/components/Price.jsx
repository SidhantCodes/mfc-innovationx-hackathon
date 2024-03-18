import React from 'react'
import PriceCardFREE from './PriceCardFREE'
import PriceCardCreators from './PriceCardCreators'
import PriceCardBiz from './PriceCardBiz'
const Price = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className="heading font-bold  text-[40px]">
        Pricing
      </div>
      <div className="desc text-center font-outfit font-light text-[24px] mt-5">
        Simple, flexible pricing options designed to match your budget <br /> and requirements, without hidden fees or surprises.
      </div>
      <div className="priceList flex gap-x-10 mt-5">
        <PriceCardFREE />
        <PriceCardCreators />
        <PriceCardBiz />
      </div>
    </div>
  )
}

export default Price
