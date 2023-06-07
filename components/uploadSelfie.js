import React from 'react'

export default function UploadSelfie() {
  return (
    <div className=' lg:mx-auto sm:mx-4 max-w-7xl mx-4 rounded-xl bg-slate-100 cursor-pointer p-3 sm:px-8 sm:py-4 my-10 md:items-center md:flex md:justify-between' >
    <div className='max-w-md'>
        <h3 className='text-darkblue text-xl sm:text-2xl font-bold'>Do you want to try it?</h3>
        <p className='sm:text-base mt-2'>Upload a selfie or a portrait and get a compliant visa or passport photo in a few seconds!</p>
    </div>
    <div className='sm:w-1/2 mt-8 lg:mt-0 '>
        <a className='bg-darkblue flex items-center sm:w-[80%] rounded-md text-sm sm:text-base justify-center font-medium sm:text-semibold text-white px-4 py-2 space-x-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>

            Pick a file to get started
        </a>
    </div>
</div>
  )
}
