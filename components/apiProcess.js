import React from 'react'
import Image from 'next/image'
const steps = [
    { icon: '/assets/upload.png', desc: 'Upload a selfie or portrait photo taken by a smartphone' },
    { icon: '/assets/checkbox.png', desc: 'Our API detects the face in the photo and identifies key facial landmarks' },
    { icon: '/assets/crop.png', desc: 'The photo is cropped according to the selected passport or visa document standards' },
    { icon: '/assets/background.png', desc: 'The background is removed and replaced with the required background color (white or light grey)' },

]
export default function ApiProcess() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center sm:block lg:px-8">
            <h2 className="text-2xl font-semibold  ">Photo Maker API Process</h2>
            <p className='text-sm font-medium text-gray-500'>4 easy steps to get a compliant photo</p>
            <div className=' mt-12 lg:flex   lg:gap-x-24 '>

                <div className="mt-8 sm:mt-24 lg:mt-0 lg:flex ">
                    <div className='flex space-x-2 justify-center'>
                        <div>
                            <Image src="/assets/left.png" height={300} width={300} className='h-[250px] w-auto sm:h-[450px] sm:w-[290px]' />
                        </div>
                        <div>
                            <Image src="/assets/right.png" height={300} width={300} className=' h-[220px] w-auto sm:h-[396px] sm:w-[290px]' />
                            <p className='w-28 sm:w-56 mt-2 text-[6px] sm:text-xs text-gray-600'>The final passport/visa-compliant photo is generated and ready
                                for download or further validation</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-md mt-12 lg:m-0 lg:flex-auto">
                    {steps.map((item) => (
                        <div className='flex space-x-3 my-8 max-w-sm' key={item.icon}>
                            <Image src={item.icon} className='h-6 w-6 mt-2' height={40} width={40} />
                            <p className='text-xs sm:text-sm w-60' >{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

           
        </div>
    )
}
