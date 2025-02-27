"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import MobileMenu from './MobileMenu'

const links = [
    {
        route:"/",
        label:"Home"
    },
    {
        route:"/contact",
        label:"Contact Us"
    },
    {
        route:"/sign-out",
        label:"Sign Out"
    }
]


const Header = () => {

    const pathname = usePathname();

    return (
        <header className='w-full font-inter h-[50px] md:h-[70px] lg:h-[110px] fixed top-0 left-0 z-50 bg-white shadow-md'>
            <div className="container h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="text-secondary text-base sm:text-2xl lg:text-3xl font-normal mr-auto">
                        Welcome to <span className='text-primary'>Table<strong>Booky</strong></span>
                    </div>
                    <div className="hidden lg:flex items-center gap-10 lg:gap-20 xl:gap-[200px]">
                        <nav className='flex'>
                            <ul className="flex items-center">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.route} className={`text-base font-inter font-bold py-2.5 px-5 ${pathname === link.route ? ' text-primary' : ' text-tertiary '}`}>
                                            <span className={`relative after:absolute after:-bottom-3 after:left-1/2 after:w-full after:translate-x-[-50%] after:rounded-[30px] after:h-1 after:bg-primary after:transition-all after:duration-300 after:ease-in-out ${pathname === link.route ? ' after:block' : ' after:hidden'}`}>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="relative pl-6">
                                <span className='w-2 h-2 bg-primary absolute -right-[3px] -top-[0.5px] rounded-full'></span>
                                <span className='w-[1px] h-[50px] bg-primary block'></span>
                                <span className='w-2 h-2 bg-primary absolute -right-[3px] -bottom-[0.5px] rounded-full'></span>
                            </div>
                        </nav>
                        <div className="xl:pr-[85px] flex items-center gap-8">
                            <span className='text-tertiary text-base font-inter'>
                                <strong>Bob</strong> Smith
                            </span>
                            <Image
                                className='rounded-full border-primary border-[1px]'
                                src="/assets/user.png"
                                alt="user"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}

export default Header
