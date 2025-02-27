import { websites } from '@/utils/websites'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OfficialWebsites = () => {
    return (
        <div className='py-5 px-7 bg-white rounded-md shadow-md pb-10'>
            <h2 className='text-xl font-bold text-tertiary pb-6 text-center border-b border-primary mb-6' >Official Websites</h2>
            <ul className='grid gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12'>
                {websites.map((website) => (
                    <li key={website.name}>
                        <div className='flex items-center gap-5'>
                            <Image src={website.image} alt={website.name} width={50} height={50} />
                            <div className="">
                                <div className='mb-1.5 text-sm text-secondary font-bold'>{website.name}</div>
                                <Link target='_blank' href={website.url} className='flex items-center gap-2.5 text-primary text-sm underline'>
                                    <Image src="/assets/go-to-site.svg" alt="go to site" width={20} height={20} />
                                    Go to Site
                                </Link>
                            </div>
                        </div>
                    </li>   
                ))}
            </ul>
        </div>
    )
}

export default OfficialWebsites
