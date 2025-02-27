import React from 'react'

const HereToFind = ({
    iframeSrc
}: {
    iframeSrc: string
}) => {
    return (
        <div className='p-5 bg-white rounded-md shadow-md'>
            <h2 className='text-xl font-bold text-tertiary pb-6 text-center border-b border-primary mb-6' >Here to Find</h2>
            <div className="w-full h-[367px]">
                <iframe src={iframeSrc} className='w-full h-full' allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default HereToFind
