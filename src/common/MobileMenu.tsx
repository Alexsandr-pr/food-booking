"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

const links = [
    {
        route:"/",
        label:"Home"
    },
    {
        route:"/contact",
        label:"Contact Us"
    }
]


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);
    
    return (
        <div className="lg:hidden">
            <button className="w-5 h-5 flex items-center justify-center" onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 4.6875C0 4.43886 0.098772 4.2004 0.274587 4.02459C0.450403 3.84877 0.68886 3.75 0.9375 3.75H19.0625C19.3111 3.75 19.5496 3.84877 19.7254 4.02459C19.9012 4.2004 20 4.43886 20 4.6875C20 4.93614 19.9012 5.1746 19.7254 5.35041C19.5496 5.52623 19.3111 5.625 19.0625 5.625H0.9375C0.68886 5.625 0.450403 5.52623 0.274587 5.35041C0.098772 5.1746 0 4.93614 0 4.6875H0ZM0 10C0 9.75136 0.098772 9.5129 0.274587 9.33709C0.450403 9.16127 0.68886 9.0625 0.9375 9.0625H19.0625C19.3111 9.0625 19.5496 9.16127 19.7254 9.33709C19.9012 9.5129 20 9.75136 20 10C20 10.2486 19.9012 10.4871 19.7254 10.6629C19.5496 10.8387 19.3111 10.9375 19.0625 10.9375H0.9375C0.68886 10.9375 0.450403 10.8387 0.274587 10.6629C0.098772 10.4871 0 10.2486 0 10H0ZM0.9375 14.375C0.68886 14.375 0.450403 14.4738 0.274587 14.6496C0.098772 14.8254 0 15.0639 0 15.3125C0 15.5611 0.098772 15.7996 0.274587 15.9754C0.450403 16.1512 0.68886 16.25 0.9375 16.25H19.0625C19.3111 16.25 19.5496 16.1512 19.7254 15.9754C19.9012 15.7996 20 15.5611 20 15.3125C20 15.0639 19.9012 14.8254 19.7254 14.6496C19.5496 14.4738 19.3111 14.375 19.0625 14.375H0.9375Z" fill="#2B2B2B"/>
                </svg>
            </button>
            
            <div className={`fixed top-0 left-0 w-full h-full flex justify-end z-[60] ${isOpen ? "translate-x-0 bg-modal_bg " : "translate-x-full bg-transparent"} transition-all duration-200`}>
                <div className="w-[45%] h-full bg-white flex flex-col justify-between">
                    <button className="w-5 h-5 flex items-center justify-center absolute top-4 right-5" onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 15L10 10M15 5L9.99905 10M9.99905 10L5 5M10 10L15 15" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <nav className='flex mt-10'>
                        <ul className="flex items-start flex-col gap-5">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.route} className={`text-base font-inter font-bold py-2.5 px-5 ${pathname === link.route ? ' text-primary' : ' text-tertiary '}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="p-4 pb-8 mt-auto">
                        <button className="text-base font-inter font-bold py-2.5">
                            Sign Out
                        </button>
                        <div className="relative my-8">
                            <span className='w-2 h-2 bg-primary absolute -bottom-[3px] -left-[0.5px] rounded-full'></span>
                            <span className='w-full h-[2px] bg-primary block'></span>
                            <span className='w-2 h-2 bg-primary absolute -bottom-[3px] -right-[0.5px] rounded-full'></span>
                        </div>
                        <div className="xl:pr-[85px] flex items-center gap-4">
                            <Image
                                className='rounded-full border-primary border-[1px]'
                                src="/assets/user.png"
                                alt="user"
                                width={50}
                                height={50}
                            />
                            <span className='text-tertiary text-base font-inter'>
                                <strong>Bob</strong> Smith
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default MobileMenu
