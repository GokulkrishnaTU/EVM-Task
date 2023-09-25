import React from 'react'
import { MdArrowForwardIos } from 'react-icons/Md';
import { IoMdArrowDropright } from 'react-icons/Io';
import {       GrEdit
} from 'react-icons/Gr';

function TopBar() {
  return (

    <div>
    <div className='flex justify-between w-full px-20 gap-8'>
      <div className="w-[30%] h-32  flex gap-3 border-[5px] border-yellow-300 rounded-lg">
      



      <div class="flex-1 flex justify-between items-center  ">
        <div className='flex flex-col gap-1 px-3'>
          <span className='text-[10px]'>FROM</span>
          <div className=''>

          <h1 className='text-[10px] font-bold'>KOCHI</h1>
          <p className='text-[9px]'>EVM Wheel Kalamassery</p>


          </div >
          <div className='flex justify-between'>

          <h1 className='text-[9px] font-semibold'>15 DECEMBER</h1>
          <h1 className='text-[9px] flex justify-center font-bold'>12:30 <span>am</span> </h1>
          </div>
  
        </div>
        <div className='flex justify-center items-center'>
<IoMdArrowDropright className='h-20 w-14 text-yellow-200 ' />
        </div>
      </div>




      <div class="flex-1 flex justify-between items-center  ">
      <div className='flex flex-col gap-1 px-3'>
          <span className='text-[10px]'>FROM</span>
          <div className=''>

          <h1 className='text-[10px] font-bold'>TRIVANDRUM</h1>
          <p className='text-[9px]'>EVM Wheel Paalayam</p>


          </div >
          <div className='flex justify-between'>

          <h1 className='text-[9px] font-semibold'>15 DECEMBER</h1>
          <h1 className='text-[9px] flex justify-center font-bold'>12:30 <span>am</span> </h1>
          </div>
  
        </div>
        <div className='flex justify-end h-full p-4 rounded-lg'>
<       GrEdit
 className='h-4 w-4 bg-yellow-200 ' />
        </div>
      </div>



  
      </div>



      <div className="w-[70%] flex gap-10 border-2 h-32 border-gray-400 rounded-lg">

      <div class="flex-1   bg-yellow-300 clip-custom flex gap-5">
        
      <img src="images/polo.png" alt="" className='w-[150px] h-[100px]' />
      <div className='flex flex-col gap-1 justify-center items-center'>
        <h1 className='font-bold'>Volks wagan Polo</h1>
        <p className='font-semibold'>Petrol automatic</p>
      </div>

      </div>
      <div class="flex-1 flex  flex-row justify-around items-center    ">

        <h1 className='font-bold'>Protection & Extras</h1>
        <button><MdArrowForwardIos/></button>
      </div>


      <div class="flex-1/2 px-10 flex justify-center items-center   ">
        <h1 className='font-bold'>Review</h1>
      </div>

      </div>
      
    </div>



    <div className='px-20 py-10 flex justify-between'>


    <div className='flex flex-col gap-3'>

    <p className='text-[40px] font-bold'>Choose Your Plan</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-gray-500'>Grand Total</h1>
            <p className='text-[40px] font-bold'>RS.3900</p>
        </div>

     
    </div>
    </div>
  )
}

export default TopBar
