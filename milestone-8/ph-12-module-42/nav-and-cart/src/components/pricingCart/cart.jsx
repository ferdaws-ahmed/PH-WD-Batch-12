


import React from 'react'

export default function Cart({cartData}) {
  return (
    <div className='hover:shadow-xl duration-500 shadow-white h-full mx-auto '>
       <div className="card w-96 bg-base-100 shadow-sm h-full flex flex-col">
  <div className="card-body flex flex-col justify-between">
    {
  cartData.popular && (
    <span className="badge badge-xs badge-warning mb-2">
      {cartData.popular}
    </span>
  )
}
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{cartData.name}</h2>
      <span className="text-xl">{cartData.price}</span>
    </div>
    <div className='flex-grow'>
        <ul className="mt-6 flex flex-col gap-2 text-xs ">
      
      {
        cartData.features.map((feature,index)=> <li key={index} className='flex  items-start'>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>{feature}</span>
      </li>)
      }
      
      
     
    </ul>
    </div>
    
    <div className="mt-6">
      <button className="btn btn-primary btn-block active:bg-gray-100 active:text-black">Subscribe</button>
    </div>
  </div>
</div>
    </div>
  )
}
