import React from 'react'



const data =[
  {
        icon:"/coverage/one.png",
        name :"Additional Driver"
    },
    {
        icon:"/coverage/one1.png",
        name :"Mobile Charger"
    },
      {
        icon:"/coverage/two1.png",
        name :"Satelite Navigation"
    },
      {
        icon:"/coverage/three1.png",
        name :"Luggage Holder"
    },
      {
        icon:"/coverage/four1.png",
        name :"Scratch Guard Policy"
    },
    {
        icon:"/coverage/five1.png",
        name :"Unlimited KMs"
    },
]

function Coverage() {
  return (
    <div className='flex-col gap-2 w-full px-20 justify-center  '>

      <h1 className='font-bold py-5 text-center'>Additional Couerage</h1>

      <div className='flex justify-evenly gap-3 w-full px-10 bg-gray-300 p-6 rounded-md flex-wrap'>


        {data.map(item=>(


<div className=' felx-col border-[1px] border-gray-800 rounded-[25px] p-5 bg-white justify-center items-center max-w-[160px] gap-5'>

        <div className=' flex justify-center items-center'>
            <img src={item.icon} alt=""  className=' w-[60px] h-[60px] object-contain'/>
        </div>
        <div className='flex justify-between gap-4'>
            <h1 className=''>{item.name}</h1>
            <input className=' ' type="checkbox" name="" id="" />

        </div>
</div>
        ))

}
</div>

    </div>
  )
}

export default Coverage
