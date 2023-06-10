import React, { useContext, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Reviews from '@/components/reviews';

const MainSection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto">
          <h2 className="text-base font-semibold tracking-tight text-darkblue sm:text-lg">
            Propel Your Services with Snap2Pass
          </h2>
          <h1 className="mt-2 max-w-sm font-bold tracking-tight text-gray-900 sm:text-2xl">
            Your Go-To Partner for Real-Time, Hassle-Free Visa and Passport Photos
          </h1>
          <p className="mt-2 text-base leading-8 text-gray-500 sm:hidden">
            Revolutionize your customers&apos; travel experience with our innovative, smart, and cost-effective solution.
          </p>
          <div className="mt-8 sm:hidden">
            <Image src="/assets/mobile_right.png" height={400} width={400} alt="" />
          </div>
          <div className="mt-6">
            <button
              className="rounded-md w-full sm:w-36 bg-darkblue px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Try it now
            </button>
          </div>
          <div className="mt-9 space-y-3">
            <div className="flex justify-center sm:justify-start p-2 bg-white rounded-md">
              <div className="mr-3 mt-1">
                <Image src="/assets/camera.png" className="h-6 w-6 sm:w-9" height={30} width={30} alt="" />
              </div>
              <div>
                <h3 className="text-darkblue">Photo Maker</h3>
                <p className="text-gray-500 text-sm hidden sm:block">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                </p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start p-2 bg-white rounded-md">
              <div className="mr-3 mt-1">
                <Image src="/assets/check.png" className="h-6 w-6 sm:w-9" height={40} width={40} alt="" />
              </div>
              <div>
                <h3 className="text-darkblue">Validation</h3>
                <p className="text-gray-500 text-sm hidden sm:block">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 sm:flex sm:justify-center lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <Image src="/assets/illustration.png" height={600} width={600} className="hidden sm:block" alt="" />
        </div>
      </div>
    </>
  );
}

const About = () => {
  return (
    <div className="sm:my-8 mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:items-center lg:gap-x-10">
      <div className="w-full sm:w-1/2">
        <h1 className="text-3xl sm:text-5xl font-bold">About</h1>
      </div>
      <div className="lg:w-1/2 my-4 lg:my-0 text-gray-600">
        <p>
          Welcome to Snap2Pass, your comprehensive solution for real-time,
          <span className="text-darkblue font-semibold"> compliant visa</span> and{" "}
          <span className="text-darkblue font-semibold">passport photos </span>. Tailored
          <span className="text-darkblue font-semibold"> for travel agencies </span> and{" "}
          <span className="text-darkblue font-semibold">immigration lawyers </span>, we provide easy-to-integrate tools like a user-friendly
          widget and a streamlined API to augment your existing CRM system. With Snap2Pass, your customers can effortlessly request and receive photos,
          meeting over <span className="text-darkblue font-semibold">200</span> different visa and passport specifications across
          <span className="text-darkblue font-semibold">100+ countries </span>, all within seconds.
        </p>
      </div>
    </div>
  );
};


const ApiProcess = () => {
  const steps = [
    { icon: '/assets/upload.png', desc: 'Upload a selfie or portrait photo taken by a smartphone' },
    { icon: '/assets/checkbox.png', desc: 'Our API detects the face in the photo and identifies key facial landmarks' },
    { icon: '/assets/crop.png', desc: 'The photo is cropped according to the selected passport or visa document standards' },
    { icon: '/assets/background.png', desc: 'The background is removed and replaced with the required background color (white or light grey)' },
  ];

  return (
    <div className="mx-auto  max-w-7xl px-6 py-12 flex flex-col md:flex md:flex-col md:items-center lg:items-start sm:block lg:px-8">
      <h2 className="text-3xl font-bold">Photo Maker API Process</h2>
      <p className="text-md font-medium text-gray-500">4 easy steps to get a compliant photo</p>
      <div className="mt-12 lg:flex lg:gap-x-24">
        <div className="lg:flex lg:mt-0">
          <div className=" flex space-y-0 space-x-6 md:justify-center">
            <div>
              <Image src="/assets/left.png" height={300} width={300} alt="" className="h-[300px] w-auto sm:h-[450px] sm:w-[270px]" />
            </div>
            <div>
              <Image src="/assets/right.png" height={300} width={300} alt="" className="h-[260px] w-auto sm:h-[396px] sm:w-[270px]" />
              <p className="w-36 sm:w-56 mt-2 text-[9px] sm:text-xs text-gray-600">
                The final passport/visa-compliant photo is generated and ready for download or further validation
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mt-12 sm:mx-0 lg:m-0 lg:flex-auto">
          {steps.map((item) => (
            <div className="flex space-x-3 my-8 lg:max-w-sm" key={item.icon}>
              <Image src={item.icon} alt="" className="h-6 w-6 mt-2" height={40} width={40} />
              <p className="text-sm sm:text-md w-64">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UploadSelfie = () => {
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
const WhatExactlyHappens = () => {
  return (
    <div className="mx-auto relative mt-12  max-w-7xl px-6 md:py-24 md:flex md:items-center md:gap-x-10 md:px-8">
      <div>
        <div className=" max-w-sm ">
          <h2 className="text-xl w-48 font-bold tracking-tight sm:text-2xl">
            What exaclty happends?
          </h2>
          <p className='mt-4'>You upload a photo and our validation API does everything for you to check if the photo is compliant for documents.</p>

        </div>
        <Image src='/assets/4.png' height={300} width={300} alt='' className='mt-12 h-[350px] w-[300px]' />
      </div>
      <div className='hidden md:block sm:absolute left-[25rem]'>
        <Image src='/assets/centerarrow.svg' height={100} width={100} alt='' className=' ' />
      </div>
      <div className='md:hidden'>
        <Image src='/assets/mobilearrow.svg' height={20} width={20} alt='' className='h-12 w-12' />
      </div>
      <div className="md:absolute left-[33rem]">
        <div className='md:flex top-0 space-x-2'>
          <div>
            <Image src='/assets/1.png' height={150} width={150} alt='' className='h-[350px] w-[300px] md:w-full md:h-56' />
          </div>
          <div className='flex mt-4 sm:mt-0'>
            <div>
              <Image src='/assets/firstarrow.svg' height={60} width={60} alt='' className='mt-3' />
            </div>
            <div className='space-x-3 space-y-3'>
              <div className='ml-3'>
                <ul>
                  <h4 className='font-semibold'>Background check</h4>
                </ul>
              </div>
              <div className=''>
                <h3 className='font-semibold'>Foreign object detection</h3>
                <ul className='list-disc ml-4 text-sm'>
                  <li className='list-disc'>hat</li>
                  <li className='list-disc'>glasses</li>
                </ul>
              </div>
              <div className=''>
                <h4 className='font-semibold'>Segmentation</h4>
                <ul className='list-disc ml-4 text-sm'>
                  <li>Hair</li>
                  <li>Ears</li>
                  <li>Clothing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex top-[16rem] mt-12 space-x-3'>
          <div>
            <Image src='/assets/2.png' height={150} width={150} alt='' className=' h-[350px] w-[300px] md:w-full md:h-56' />
          </div>
          <div className='flex mt-4 sm:mt-0 space-x-3'>
            <div>
              <Image src='/assets/secondarrow.svg' height={60} width={60} alt='' className='mt-3' />
            </div>
            <div className=''>
              <h4 className='font-semibold'>  Pose detection:</h4>
              <ul className='list-disc ml-4 text-sm'>
                <li>
                  Roll
                </li>
                <li>
                  Pitch
                </li>
                <li>
                  Yaw
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='md:flex  top-[31rem] mt-12  space-x-3'>
          <div>
            <Image src='/assets/3.png' height={150} width={150} alt='' className='h-[350px] w-[300px] md:w-full md:h-56' />
          </div>
          <div className='flex  mt-4 sm:mt-0 space-x-3'>
            <div>
              <Image src='/assets/thirdarrow.svg' height={60} width={60} alt='' className='mt-3' />
            </div>
            <div className='space-y-4 mt-1'>
              <h4 className='font-semibold'> Sharpness</h4>
              <h4 className='font-semibold'>  Brightness</h4>
              <h4 className='font-semibold'>  Facial Expression</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
const ValidationApiProcess = () => {
  const actions = [
    {
      id:"1",
      title: 'Pose',
      icon: '/assets/face-scan.png',
      desc: 'Head straight, no tilt, look directly to the camera'
    },
    {
      id:"2",
      title: 'Sharpness',
      icon: '/assets/focus.png',
      desc: 'No blurriness in the photo.'
    },
    {
      id:"3",
      title: 'Brightness',
      icon: '/assets/SunDim.png',
      desc: 'The photo should not be dark.'

    },
    {
      id:"4",
      title: 'Forign Objects',
      icon: '/assets/hat.png',
      desc: 'No sunglasses, eyeglasses, hats, caps, or other undesired objects.'

    },
    {
      id:"5",
      title: 'Expression',
      icon: '/assets/smile.png',
      desc: 'Mouth closed, no smiling.'

    },
    {
      id:"6",
      title: 'Ear expression',
      icon: '/assets/hearing.png',
      desc: 'Ears should be visible under your hair.'

    },
    {
      id:"7",
      title: 'Background Color',
      icon: '/assets/backgroundcolor.png',
      desc: 'Light Background'

    },
  ]

  return (
    <div className=" mx-auto max-w-7xl px-6 py-12 lg:px-8 bg-white  ">
      <div>
        <h2 className="text-2xl font-semibold  ">Validatipon API Process</h2>
        <p className='text-sm font-medium text-gray-500'>Our API checks the photo for the list of criteria, upload your photo and see if it can be used for documents.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-7 sm:grid sm:grid-cols-4 sm:gap-y-12">
        {actions.map((action) => (
          <div
            key={action.title}
          >
            <div>
              <img src={action.icon} className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="mt-3 max-w-[13rem]">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href={action.id} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {action.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="relative isolate bg-white mt-8 mb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lets talk about <br /> Love to here from you</h2>

            <div className="mt-8 sm:mt-24 md:flex md:justify-between text-base leading-7 text-gray-600">
              <div className="flex space-x-3 mb-3">
                <div className="flex-none">

                  <MapPinIcon className="h-7 w-6 text-gray-400" color='#3056D3' aria-hidden="true" />
                </div>
                <div>
                  <dd className='font-bold'>
                    Our Location

                  </dd>
                  <p> Chicago, USA</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <div className="flex-none">

                  <EnvelopeIcon className="h-7 w-6 text-gray-400" color='#3056D3' aria-hidden="true" />
                </div>
                <div>
                  <dd>
                    <a className=" font-bold hover:text-gray-900" href="mailto:hello@example.com">
                      How can we help?
                    </a>
                  </dd>
                  <p>info@snap2pass.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:flex justify-center'>
        <form action="#" method="POST" className=" rounded-md shadow-md sm:w-[70%] px-6 py-4 mx-4 md:mx-0  lg:px-6 lg:py-12">
          <div className="mx-auto max-w-xl lg:max-w-md  ">
            <h4 className='text-2xl font-semibold mb-4'>Send us Message </h4>
            <div className='space-y-8'>
              <div className='sm:col-span-2'>
                <label htmlFor="first-name" className="block text-sm font-normal leading-6 text-gray-700">
                  Full name*
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder='Adam Gelius'
                    autoComplete="given-name"
                    className="block w-full border-b-[0.4px] py-2 text-gray-900 shadow-b-sm focus:border-none placeholder:text-gray-400 placeholder:text-base sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-normal leading-6 text-gray-700">
                  Email*
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='example@yourmail.com'
                    autoComplete="email"
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-normal leading-6 text-gray-700">
                  Phone number*
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    placeholder='+885 1254 5211 552'
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-normal leading-6 text-gray-700">
                  Message*
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="message"
                    id="message"

                    placeholder='type your message here'
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-start">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
              >
                Send
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}



const Home = () => {

  return (
    <>
      <div className="">
        <MainSection />
        <About />
        <ApiProcess />
        <UploadSelfie />
        <ValidationApiProcess />
        <UploadSelfie />
        <WhatExactlyHappens />
        <Reviews />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
