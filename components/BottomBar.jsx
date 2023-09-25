import React from 'react'
import { RiArrowRightDoubleFill } from 'react-icons/Ri';


function BottomBar() {
  return (
    <div className='px-20 py-10 flex justify-between'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-gray-500'>Grand Total</h1>
            <p className='text-[40px] font-bold'>RS.3900</p>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex gap-5'>
            
            <input type="checkbox"  className='text-violet-600' style={{color:"red"}}/>
            <h1>No Protection</h1>
          </div>

            <button className='font-bold h-[60px] bg-yellow-400 px-12 rounded-lg flex justify-between gap-10 items-center'> Checkout & Review <span className=''><RiArrowRightDoubleFill className='w-4 h-4 bg-white'/></span></button>
        </div>
    </div>
  )
}

export default BottomBar
