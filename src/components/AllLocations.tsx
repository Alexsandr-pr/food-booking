import { restaurants } from '@/utils/restaurants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllLocations = () => {
    return (
        <div className='py-5 px-7 bg-white rounded-md shadow-md'>
            <h2 className='text-xl font-bold text-tertiary pb-6 text-center border-b border-primary mb-6' >All Locations</h2>
            <ul className='grid gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1'>
                {restaurants.map((restaurant, index) => (
                    <li key={restaurant.slug}>
                        <Link href={`/restaurants/${restaurant.slug}`} className='flex items-center gap-2.5 hover:text-primary transition-colors duration-300'>
                            <Image src="/assets/location.svg" alt="location icon" width={20} height={20} />
                            <span dangerouslySetInnerHTML={{ __html: restaurant.location }} className='text-sm' />
                        </Link>
                        {index !== restaurants.length - 1 && <span className='bg-primary/20 w-full h-[1px] block mt-2.5 mb-5 ml-[30px] max-w-[80%]'></span>}
                    </li>
                ))}
            </ul>
            <span className='bg-primary w-[70%] h-[1px] block mx-auto mt-6'></span>
        </div>
    )
}

export default AllLocations
