"use client"
import { restaurants } from '@/utils/restaurants';
import Image from 'next/image'
import React, { useState } from 'react'
import ModalWrapper from '../modal/ModalWrapper';


const Menu = ({
    slug
}: {
    slug: string
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

    if (!restaurant) {
        return <div>Restaurant not found</div>;
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="flex gap-2.5 items-center">
                <Image src="/assets/menu.svg" alt="menu icon" width={20} height={20} />
                <span className="text-sm mt-0.5 underline">Show Menu</span>
            </button>
            {isOpen && (
                <ModalWrapper>
                    <div className="max-w-[530px] w-[530px] py-5 px-3 sm:px-8 pb-10 bg-white rounded-md">
                        <div className="flex items-center justify-between gap-4 pb-5 border-b border-primary">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setIsOpen(false)} className='w-5 h-5 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none" className='-mt-0.5'>
                                        <path d="M13 5.41L8.66981 10L13 14.59L11.6604 16L6 10L11.6604 4L13 5.41Z" fill="#5E5E5E" />
                                    </svg>
                                </button>
                                <h2 className="text-base sm:text-2xl font-bold text-tertiary"><span className='text-primary'>{restaurant.name.split(' ')[0]}</span> {restaurant.name.split(' ').slice(1).join(' ')}<span className='font-normal'> |</span></h2>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <Image src="/assets/menu.svg" alt="menu icon" width={25} height={25} />
                                <span className="text-sm mt-0.5">Menu</span>
                            </div>
                        </div>
                        <ul style={{ backgroundImage: `url("/assets/modal_bg.png")` }} className="w-full max-h-[300px] h-auto bg-cover bg-center bg-no-repeat rounded-md mt-5 flex flex-col gap-6">
                            {restaurant.menu.map((menu) => (
                                <li key={`menu-${menu.type}`}>
                                    <div className='flex items-start gap-2.5'>
                                        <Image src={`/assets/menu/${menu.type}.svg`} alt={menu.type} width={20} height={20} className='mt-px'/>
                                        <div className="">
                                            <h3 className='mb-1 text-sm text-tertiary font-bold'>{menu.name}</h3>
                                            <a type='button' href={menu.download_link} className='flex items-center gap-2.5 text-primary text-sm underline italic'>
                                                <Image src="/assets/go-to-site.svg" alt="go to site" width={20} height={20} />
                                                Download Menu 
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ModalWrapper>
            )}
        </>
    )
}

export default Menu
