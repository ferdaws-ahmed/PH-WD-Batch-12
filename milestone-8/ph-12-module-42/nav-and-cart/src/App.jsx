
import { Suspense } from 'react'
import './App.css'
import NavBar from './components/navbar/navbar'
import PricingCart from './components/pricingCart/pricingCart'

import First from './components/rechart/firstRechart';

const pricingPromise = fetch('pricingCart.json').then(res=>res.json());
 

function App() {
  

  return (
    <>
      
      <header>
        <NavBar ></NavBar>
      </header>

      <main>
             <Suspense fallback={<div className='flex justify-center mt-20'><span className=" loading loading-spinner text-error "></span></div>}>

                  <PricingCart pricingPromise={pricingPromise}></PricingCart>
             </Suspense>
            
             <First></First>
             
      </main>

    </>
  )
}

export default App
