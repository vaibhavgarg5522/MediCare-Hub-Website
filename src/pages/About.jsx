import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
<div className='text-center text-2xl pt-10 text-gray-500'>
<p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
</div>

<div className='my-10 flex flex-col md:flex-row gap-12 '>
  <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
  <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam corrupti tempora at dicta molestiae iusto ratione provident laborum eveniet quos similique deserunt cum illum doloremque eligendi et, rerum aut ipsum placeat unde commodi minima.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo magnam itaque nostrum ea cum sequi exercitationem amet impedit suscipit eveniet repudiandae earum omnis alias, laudantium enim at iusto neque totam qui officiis!</p>
    <b className='text-gray-800'>Our Vision</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo illo ratione facere repellat cumque animi, labore rem, blanditiis aliquam atque? Ratione debitis sequi illo aperiam laboriosam vel explicabo. Corporis nisi quia distinctio fuga.</p>
  </div>
</div>

<div className='text-xl my-4'>
  <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
</div>


<div className='flex flex-col md:flex-row mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transiton-all duration-300 text-gray-600 cursor-pointer'>
<b>Efficiency:</b>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quo et?</p>
  </div>


  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transiton-all duration-300 text-gray-600 cursor-pointer'>
  <b>Convenience:</b>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aperiam?</p>
  </div>


  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transiton-all duration-300 text-gray-600 cursor-pointer'>
  <b>Personalization:</b>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia mollitia autem?</p>
  </div>
</div>

    </div>
  )
}

export default About