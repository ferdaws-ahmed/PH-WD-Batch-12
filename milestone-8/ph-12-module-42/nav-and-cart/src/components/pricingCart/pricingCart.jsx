


import React, { use } from 'react'
import Cart from './cart';

export default function PricingCart({pricingPromise}) {
    const pricingData = use(pricingPromise);
    
  return (
   <div className='sm:px-10 justify-center mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch'>
       {
        pricingData.map(cartData => <Cart key={cartData.id} cartData ={cartData}></Cart>)
       }
   </div>
  )
}
