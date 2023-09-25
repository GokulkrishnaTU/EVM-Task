import React from 'react'
import { TiTick } from 'react-icons/Ti';


function Main() {
  return (
    <div className='my-16'>
        <div className='flex px-20 gap-10 flex-wrap'>
            <div className='flex flex-col gap-3 justify-between flex-1'>
            <div className='flex flex-col gap-1 justify-between '>

                <h1 className='text-[20px]'>volswagn <span className='text-gray-500 font-semibold'>Polo</span></h1>
                <p className='text-gray-500 font-semibold text-[20px]'>Petrol Automatic</p>
                </div >
                <img src="images/polo.png" alt="" />
                <p className='text-[20px]'>Total</p>
                <h1 className='text-[60px] font-bold'>Rs.2536</h1>

            </div>


            <div className='flex flex-col gap-6 border-[1px] rounded-lg bg-white p-8 pb-5 flex-1 relative '>

<div className='flex justify-start'>

  <h1 className='text-[35px] font-bold'>Basic</h1>
</div>

  <div className='flex flex-col gap-8 px-5'>
<div className=' flex flex-col justify-start gap-2 items-start '>


  <p>Security D0posit - <span className='font-bold'>3 Days Rentals</span></p>
  <p> <span className='font-bold'>120Km</span> per </p>
  <p>Non Refundable</p>
  <p>Non Amendable</p>
  <p>Damage Poliocy</p>

  </div>
<div className='pb-10'>
{/* <h1 className='text-[20px] font-bold '>35% Additional</h1> */}

</div>

</div>
<img src="images/yellow.png" alt="" className='absolute top-[-10px]  right-5'/>

<button className='bg-yellow-400 w-[80%] h-[40px] rounded-lg absolute bottom-[-20px] left-[10%] text-[20px] font-bold text-white'>Rs.3460</button>

</div>


            <div className='flex flex-col gap-6 border-[1px] rounded-lg bg-blue-100 p-8 pb-5 flex-1 relative '>

              <div className='flex justify-start'>

                <h1 className='text-[35px] font-bold'>Plus</h1>
              </div>

                <div className='flex flex-col gap-8 px-5'>
              <div className=' flex flex-col justify-start gap-2 items-start '>

              <p>Security D0posit - <span className='font-bold'>3 Days Rentals</span></p>
  <p> <span className='font-bold'>120Km</span> per </p>
                <p>Non Refundable</p>
                <p>Non Amendable</p>
                <p>Damage Poliocy</p>

                </div>
<div className='pb-10'>
<h1 className='text-[20px] font-bold '>35% Additional</h1>

</div>

              </div>

              <button className='bg-blue-600 w-[80%] h-[40px] rounded-lg absolute bottom-[-20px] left-[10%] text-[20px] font-bold text-white'>Rs.3460</button>
<img src="images/blue.png" alt="" className='absolute top-[-10px]  right-5'/>
            </div>




            <div className='flex flex-col gap-6 border-[1px] rounded-lg bg-green-200 p-8 pb-5 flex-1 relative '>

              <div className='flex justify-start'>

                <h1 className='text-[35px] font-bold'>Premium</h1>
              </div>

                <div className='flex flex-col gap-8 px-5'>
              <div className=' flex flex-col justify-start gap-2 items-start '>


                <p className='flex justify-start gap-2'> <span><TiTick className='text-green-700'/> </span> Security D0posit</p>
                <p className='flex justify-start gap-2'> <span><TiTick className='text-green-700'/> </span>120Km per </p>
                <p className='flex justify-start gap-2'> <span><TiTick className='text-green-700'/> </span>Non Refundable</p>
                <p className='flex justify-start gap-2'> <span><TiTick className='text-green-700'/> </span>Non Amendable</p>
                <p className='flex justify-start gap-2'> <span><TiTick className='text-green-700'/> </span>Damage Poliocy</p>
                <p className='flex justify-start gap-2'> <span><TiTick className='text-green-700'/> </span>Damage Poliocy</p>

                </div>
<div className='pb-10'>
<h1 className='text-[20px] font-bold '>35% Additional</h1>

</div>

              </div>

              <button className='bg-green-600 w-[80%] h-[40px] rounded-lg absolute bottom-[-20px] left-[10%] text-[20px] font-bold text-white'>Rs.3460</button>
              <img src="images/green.png" alt="" className='absolute top-[-10px] right-5'/>

            </div>



        </div>
      
    </div>
  )
}

export default Main
