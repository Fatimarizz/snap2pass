import React from "react"
const actions = [
    {
        title: 'Pose',
        icon: '/assets/face-scan.png',
        desc: 'Head straight, no tilt, look directly to the camera'
    },
    {
        title: 'Sharpness',
        icon: '/assets/focus.png',
        desc: 'No blurriness in the photo.'
    },
    {
        title: 'Brightness',
        icon: '/assets/SunDim.png',
        desc: 'The photo should not be dark.'

    },
    {
        title: 'Forign Objects',
        icon: '/assets/hat.png',
        desc: 'No sunglasses, eyeglasses, hats, caps, or other undesired objects.'

    },
    {
        title: 'Expression',
        icon: '/assets/smile.png',
        desc: 'Mouth closed, no smiling.'

    },
    {

        title: 'Ear expression',
        icon: '/assets/hearing.png',
        desc: 'Ears should be visible under your hair.'

    },
    {

        title: 'Background Color',
        icon: '/assets/trasnparnet.png',
        desc: 'Light Background'

    },
]

export default function ValidationApiProcess() {
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
                            <a href={action.href} className="focus:outline-none">
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
