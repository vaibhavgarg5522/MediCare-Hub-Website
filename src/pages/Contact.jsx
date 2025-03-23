import React from 'react'
import { assets } from "../assets/assets";



const Contact = () => {
  return (
    <div>
    
    <div className='text-center text-2xl text-gray-500'>
    <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
   </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
    <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />

    <div className='flex flex-col justify-center items-start gap-6'>
      <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
      <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
      <p className='text-gray-500'>Tel: (425) 555-5353 <br />abc@gmail.com
      </p>
      <p className='text-gray-600 font-semibold text-lg'>Carrers At Prescripto</p>
      <p className='text-gray-500'>Learn more about our Teams and Job Opening</p>
      <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transiton-all duration-500'> Explore job</button>
    </div>
      

    </div>
    
    
    </div>
  )
}

export default Contact