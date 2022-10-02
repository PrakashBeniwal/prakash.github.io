import React from 'react'

const Home = () => {



  return (
    < >
    <div className=' text-center'>
 <h1 className='  mt-11 text-2xl font-bold'> MANAGE YOUR PRICING</h1>

 <p> Add all of your plans you wish to see in your pricing page here. more▽</p>

 <div className='font-semibold'>
 <button className='border-2 border-slate-800 rounded-2xl mt-2 px-2 mx-2 bg-white'>Generate Pricing Page</button>
 <button className='border-2 border-slate-800 rounded-2xl mt-2 px-2 mx-2 bg-white'>Add/Edit Plans</button>

 <button className='border-2 border-slate-800 rounded-2xl mt-2 px-2 mx-2 bg-white'>... more</button>
 </div>

 <div className=' mt-7 lg:text-xl bg-cyan-200 mx-7 md:mx-auto md:w-[50%] md:text-lg lg:w-[40%] p-2 border-cyan-300 border-2 flex flex-col'>
  <span className='font-bold'>
  You are all set for your first experiment!
  </span>
  <span className='font-semibold'>
  Click on the ‘New Experiment’ button to get started
  </span>
 </div>
 

 <div className=' flex md:justify-center '>
 <div className='flex justify-center flex-col mt-7 md:w-[70%] bg-white p-2 rounded font-bold'>
  <div className='flex space-x-7 justify-between px-8 py-5'>
    <div className='text-2xl text-green-700 font-bold'>‘Starter Plan’ <div className='text-base font-semibold'> Starter Plan v2-JUL2021</div></div>
    <div className='text-2xl text-green-700 font-bold'>‘Professional Plan’ <div className='text-base font-semibold'> Pro Plan v2-JUL2021</div></div>
    <div className='text-2xl text-green-700 font-bold'>‘Enterprise Plan’ <div className='text-base font-semibold'> Enterprise Plan v2-JUL2021
</div></div>
 
  </div>
  <div className=' flex justify-between py-1 text-xs lg:bg-cyan-100 md:bg-yellow-200 pl-12 sm:pl-20  md:pl-24 lg:pl-28 p-2  lg:pr-10 bg-gray-300'>
    <div>MONTHLY</div>
    <div>YEARLY</div>
    <div>MONTHLY</div>
    <div>YEARLY</div>
    <div>MONTHLY</div>
    <div>YEARLY</div>
  </div>

  <div className=' py-5 flex justify-between  md:px-4 p-2 lg:pr-20  '>
  <div>USD</div>
    <div>$79</div>
    <div>$799</div>
    <div>$99</div>
    <div>$999</div>
    <div>$129</div>
    <div>$1299</div>
  </div>

  <div className='flex py-5 justify-between bg-cyan-100 md:px-4 p-2 lg:pr-20 '>
  <div>EUR</div>
    <div>$69</div>
    <div>$699</div>
    <div>$89</div>
    <div>$899</div>
    <div>$99</div>
    <div>$999</div>
  </div>

  <div className='flex justify-between py-5 md:px-4 p-2 lg:pr-20 '>
  <div>GBP</div>
    <div>$99</div>
    <div>$999</div>
    <div>$129</div>
    <div>$129</div>
    <div>$189</div>
    <div>$1899</div>
  </div>
 </div>
 
 </div >
 <div className=' my-7 bg-yellow-200 p-2 rounded-xl px-7 font-semibold text-amber-900 md:mx-40 lg:mx-52'>

 <button >You have a wide price parity between your currencies <a className='text-blue-900' href="/">See more insights →</a> </button>
 </div>
 </div>
    </>
  )
}



export default Home;