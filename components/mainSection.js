import React from 'react'
import Image from 'next/image'
export default function MainSection() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 ">
            <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto">

                <h2 className="text-base font-semibold tracking-tight text-darkblue sm:text-lg">
                    Propel Your Services with Snap2Pass
                </h2>
                <h1 className="mt-2 max-w-sm  font-bold tracking-tight text-gray-900 sm:text-2xl">
                    Your Go-To Partner for Real-Time,
                    Hassle-Free Visa and Passport Photos
                </h1>
                <p className="mt-2 text-base leading-8 text-gray-500 hidden sm:block">
                    Revolutionize your customers`&apos;` travel experience
                    with our innovative, smart, and cost-effective solution.
                </p>
                <div className="mt-8  sm:hidden">

                    <Image src="/assets/mobile_right.png" height={400} width={400} />
                </div>
                <div className="mt-6 ">
                    <button

                        className="rounded-md w-full sm:w-36 bg-darkblue px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Try it now
                    </button>

                </div>
                <div className='mt-9 space-y-3 '>
                    <div className='flex justify-center sm:justify-start p-2 bg-white rounded-md'>
                        <div className='mr-3 mt-1'>
                            <Image src='/assets/camera.png' className='h-6 w-6 sm:w-8' height={30} width={30} />
                        </div>
                        <div >
                            <h3 className='text-darkblue'>Photo Maker</h3>
                            <p className='text-gray-500  text-sm hidden sm:block'>
                                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start p-2 bg-white rounded-md'>
                        <div className='mr-3 mt-1'>
                            <Image src='/assets/check.png' className='h-6 w-6 sm:w-8 ' height={30} width={30} />
                        </div>
                        <div>
                            <h3 className='text-darkblue'>Validation</h3>
                            <p className='text-gray-500  text-sm hidden sm:block'>
                                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Image src="/assets/illustration.png" height={600} width={600} className='hidden sm:block' />

            </div>
        </div>
    )
}
