import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
        {/* {---------leftSide--------------} */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:2/3 text-gray-600 leading-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat asperiores vitae minus incidunt ipsa reiciendis, cupiditate at sint dignissimos mollitia sequi. Doloremque, adipisci?</p>
        </div>

        {/* {---------CenterSide--------------} */}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
        </div>

        {/* {-----RightSide--------------} */}
        <div>
           <p className='text-xl font-medium mb-5'>Get in touch</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-545-554-5545</li>
            <li>abc@gmail.com</li>
           </ul>
        </div>
      </div>
      {/* {-----------lastsection--------} */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>copyright 2025@prescripto -All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer