
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactUs() {
  return (
    <div className="relative isolate bg-white my-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lets talk about <br/> Love to here from you</h2>
           
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
        <form action="#" method="POST" className=" rounded-md shadow-md max-w-lg px-6 py-4 mx-4 md:mx-0  lg:px-6 lg:py-12">
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
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full  border-b-[0.4px] py-2 text-gray-900 shadow-b-sm  placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-start">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
