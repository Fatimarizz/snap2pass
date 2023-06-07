import React from 'react'

export default function About() {
  return (
    <div className='sm:my-8 mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:items-center lg:gap-x-10'>
        <div className='w-1/2 '>
            <h1 className='text-3xl sm:text-5xl font-bold'>About</h1></div>
        <div className='sm:w-1/2 my-4 sm:my-0 text-gray-600'>
            <p>Welcome to Snap2Pass, your comprehensive solution for real-time, 
                <span className='text-darkblue font-semibold'>compliant visa</span> and  <span className='text-darkblue font-semibold'>passport photos </span>. Tailored 
                <span className='text-darkblue font-semibold'>for travel agencies </span> and  <span className='text-darkblue font-semibold'>immigration lawyers </span>, we provide easy-to-integrate tools like a user-friendly
                 widget and a streamlined API to augment your existing CRM system. With Snap2Pass, your customers can effortlessly request and receive photos, 
                 meeting over  <span className='text-darkblue font-semibold'> 200</span> different visa and passport specifications across 
                 <span className='text-darkblue font-semibold'>100+ countries </span>, all within seconds.</p>
        </div>
    </div>
  )
}
