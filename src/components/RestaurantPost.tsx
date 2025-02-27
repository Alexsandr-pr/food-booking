import { Restaurant } from '@/types'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'





const RestaurantPost = ({
    slug,
    name,
    preview,
    location,
    timeframe,
    times
}: Restaurant) => {

    const threeTimes = times.slice(0, 3);

    return (
        <Link href={`/restaurants/${slug}`} className='p-[5px] md:p-2.5 xl:p-[14px] pb-5 hover:bg-white hover:rounded-md hover:shadow-md transition-all duration-300 max-h-fit'>
            <div className="relative w-full min-h-[224px] mb-2.5 md:mb-[14px] overflow-hidden rounded-md">
                <Image src={preview} alt={name} fill className="object-cover rounded-md hover:scale-110 transition-all duration-300" />
            </div>
            <div className="card-content">
                <h2 className="text-base lg:text-lg font-bold text-tertiary mb-2.5 md:mb-5">{name}</h2>
                <p className="text-sm text-tertiary font-normal mb-[8px] md:mb-5" dangerouslySetInnerHTML={{ __html: location }} />
                <p className="text-sm text-tertiary font-normal mb-2.5 md:mb-5"><strong>{timeframe.open}</strong> AM - <strong>{timeframe.close}</strong> PM</p>
                <ul className="grid grid-cols-3 gap-2 lg:gap-5">
                    {threeTimes.map((time) => (
                        <li key={time.time} className='w-full'>
                            <button className={` text-white w-full text-xs md:text-sm lg:text-base font-inter font-bold py-2.5 px-1 lg:px-5 rounded-md   ${time.isOpen ? "bg-primary hover:bg-primary/80 transition-all duration-300" : "bg-sub cursor-default"}`}>
                                {time.time.split(" ")[0]}   
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}

export default RestaurantPost
