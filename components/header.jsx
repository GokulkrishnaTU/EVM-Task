import React from 'react'
import { BsPersonCircle } from 'react-icons/Bs';
import { GiHamburgerMenu } from 'react-icons/Gi';


function Header() {
  return (
    <div className='flex justify-between px-20 py-8'>
        <div>
<img src="/images/logo.png" alt="" className='w-40 h-20' />
        </div>
        <div className='flex justify-center gap-6'>
            <h1>Tariff</h1>
            <h1>FAQs</h1>
<BsPersonCircle className='h-6 w-6'/>
<GiHamburgerMenu className='h-6 w-6'/>
        </div>
      
    </div>
  )
}

export default Header
