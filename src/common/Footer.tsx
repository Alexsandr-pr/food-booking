import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const links = [
    {
        label: "Service",
        route: "/service"
    },
    {
        label: "About Us",
        route: "/about-us"
    },
    {
        label: "Contact Us",
        route: "/contact-us"
    },
    {
        label: "FAQs",
        route: "/faqs"
    },
    {
        label: "Sign In",
        route: "/sign-in"
    }
]

const Footer = () => {
    return (
        <footer className='w-full mt-8 xl:mt-[100px]'>
            <div className="flex py-10 xl:pt-[91px] xl:pb-[126px] px-4 bg-no-repeat relative">
                <div style={{ backgroundImage: "url('/assets/download_the_app.png')"}} className="w-full opacity-30 bg-cover bg-center h-full absolute top-0 left-0 inset-0"> </div>
                <div className="xl:ml-[55%] mx-auto xl:mr-[60px] relative z-10">
                    <div className="absolute hidden xl:block bottom-0 left-[5%] xl:left-[12%]">
                        <Image
                            src="/assets/left_hand.png"
                            alt="left hand"
                            width={492}
                            height={425}
                            className='md:max-w-[300px] lg:max-w-[400px] xl:w-auto'
                        />
                    </div>
                    <div className="">
                        <p className='text-tertiary uppercase text-2xl sm:text-3xl text-center xl:text-right mb-6 xl:mb-[52px]'><strong className='text-primary'>Download</strong> The App</p>
                        <div className="flex items-center gap-6 flex-wrap justify-center  xl:gap-14">
                            <Link href="/" className='bg-tertiary inline-flex items-center gap-2 text-white p-1.5 pr-5 text-base font-inter font-bold rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                                    <path d="M14.6419 14.2939C16.5069 13.2422 17.9206 12.4409 18.0425 12.3785C18.4323 12.1656 18.8349 11.6021 18.0425 11.1644C17.7867 11.0267 16.4092 10.2503 14.6419 9.24902L12.1919 11.7902L14.6419 14.2939V14.2939Z" fill="#FFD900" />
                                    <path d="M12.2024 11.7715L4.2041 19.7532C4.39184 19.7778 4.60379 19.7285 4.85367 19.5925C5.37831 19.3081 10.9399 16.3008 14.7143 14.247L12.2024 11.7715Z" fill="#F43249" />
                                    <path d="M12.2054 11.7715L14.7143 9.26274C14.7143 9.26274 5.42722 4.21983 4.86532 3.92214C4.65362 3.79738 4.41639 3.76033 4.2041 3.79738L12.2054 11.7715Z" fill="#00EE76" />
                                    <path d="M12.1919 11.7468L3.97832 3.78369C3.64498 3.85829 3.36328 4.14335 3.36328 4.72633V18.8043C3.36328 19.3378 3.58126 19.7222 3.99107 19.7592L12.1919 11.7468Z" fill="#00D3FF" />
                                </svg>
                                Get it On Android
                            </Link>
                            <Link href="/" className='bg-tertiary inline-flex items-center gap-2 text-white p-1.5 pr-5 text-base font-inter font-bold rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M14.9269 17.5039C14.1654 18.2502 13.334 18.1324 12.5336 17.7789C11.6866 17.4175 10.9095 17.4018 10.0159 17.7789C8.89695 18.2659 8.30639 18.1245 7.63812 17.5039C3.84607 13.5523 4.40555 7.53444 8.71046 7.31447C9.75949 7.36946 10.4899 7.89582 11.1038 7.94296C12.0207 7.75441 12.8988 7.21234 13.8779 7.28304C15.0513 7.37732 15.9371 7.84869 16.5199 8.69715C14.0955 10.1663 14.6705 13.3951 16.8929 14.2986C16.45 15.477 15.8749 16.6476 14.9192 17.5118L14.9269 17.5039ZM11.0261 7.26733C10.9095 5.51541 12.316 4.06988 13.9323 3.92847C14.1576 5.95535 12.114 7.46373 11.0261 7.26733Z" fill="white" />
                                </svg>
                                Get it On iOS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/assets/footer_bg.png')" }} className="flex bg-cover bg-center items-center flex-col gap-[30px] py-16 sm:py-14 px-4 ">
                <p className='text-white text-2xl sm:text-3xl'>Register for <span className='text-primary'>free</span></p>
                <p className='text-white text-lg  text-center'>Register with us and win <br /> amazing discount points on <strong className='text-primary'>table bookings</strong></p>
                <button className='bg-primary text-white text-base font-inter font-bold py-2.5 px-10 rounded-md hover:bg-primary/80 transition-all duration-300'>
                    Register
                </button>
            </div>
            <div className="bg-secondary py-10 sm:pt-[30px] sm:pb-5 px-4 flex items-center flex-col gap-5 sm:gap-[30px]">
                <div className="text-primary text-2xl sm:text-3xl font-inter">
                    Table<strong>Booky</strong>
                </div>
                <nav>
                    <ul className="flex items-center sm:gap-x-8 gap-2.5 sm:gap-y-5 justify-center flex-wrap flex-col sm:flex-row">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.route} className='text-white text-sm sm:text-lg font-inter font-normal hover:text-primary transition-all duration-300'>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-5">
                    <Link href="/" className='hover:scale-110 transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 3.40002C10.8334 3.40002 3.33337 10.8834 3.33337 20.1C3.33337 28.4334 9.43337 35.35 17.4 36.6V24.9334H13.1667V20.1H17.4V16.4167C17.4 12.2334 19.8834 9.93336 23.7 9.93336C25.5167 9.93336 27.4167 10.25 27.4167 10.25V14.3667H25.3167C23.25 14.3667 22.6 15.65 22.6 16.9667V20.1H27.2334L26.4834 24.9334H22.6V36.6C26.5274 35.9798 30.1037 33.9759 32.6833 30.9501C35.2628 27.9244 36.6756 24.0761 36.6667 20.1C36.6667 10.8834 29.1667 3.40002 20 3.40002Z" fill="#F49B33" />
                        </svg>
                    </Link>
                    <Link href="/" className='hover:scale-110 transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 2.5C10.3359 2.5 2.5 10.3359 2.5 20C2.5 29.6641 10.3359 37.5 20 37.5C29.6641 37.5 37.5 29.6641 37.5 20C37.5 10.3359 29.6641 2.5 20 2.5ZM28.4102 15.6914C28.4219 15.875 28.4219 16.0664 28.4219 16.2539C28.4219 21.9883 24.0547 28.5938 16.0742 28.5938C13.6133 28.5938 11.332 27.8789 9.41016 26.6484C9.76172 26.6875 10.0977 26.7031 10.457 26.7031C12.4883 26.7031 14.3555 26.0156 15.8438 24.8516C13.9375 24.8125 12.3359 23.5625 11.7891 21.8438C12.457 21.9414 13.0586 21.9414 13.7461 21.7656C12.7646 21.5662 11.8823 21.0331 11.2493 20.257C10.6162 19.4808 10.2714 18.5094 10.2734 17.5078V17.4531C10.8477 17.7773 11.5234 17.9766 12.2305 18.0039C11.6361 17.6078 11.1487 17.0711 10.8114 16.4415C10.4741 15.8119 10.2974 15.1088 10.2969 14.3945C10.2969 13.5859 10.5078 12.8477 10.8867 12.207C11.9762 13.5482 13.3357 14.6451 14.8768 15.4264C16.418 16.2078 18.1063 16.6561 19.832 16.7422C19.2188 13.793 21.4219 11.4062 24.0703 11.4062C25.3203 11.4062 26.4453 11.9297 27.2383 12.7734C28.2188 12.5898 29.1562 12.2227 29.9922 11.7305C29.668 12.7344 28.9883 13.582 28.0859 14.1172C28.9609 14.0234 29.8047 13.7812 30.5859 13.4414C29.9961 14.3086 29.2578 15.0781 28.4102 15.6914Z" fill="#F49B33" />
                        </svg>
                    </Link>
                    <Link href="/" className='hover:scale-110 transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M25.9688 19.5C25.9688 20.9504 25.3926 22.3414 24.367 23.367C23.3414 24.3926 21.9504 24.9688 20.5 24.9688C19.0496 24.9688 17.6586 24.3926 16.633 23.367C15.6074 22.3414 15.0312 20.9504 15.0312 19.5C15.0312 19.1883 15.0641 18.8839 15.1206 18.5885H13.2083V25.8747C13.2083 26.3815 13.6185 26.7917 14.1253 26.7917H26.8766C27.1194 26.7912 27.3522 26.6944 27.5238 26.5225C27.6953 26.3506 27.7917 26.1176 27.7917 25.8747V18.5885H25.8794C25.9359 18.8839 25.9688 19.1883 25.9688 19.5ZM20.5 23.1458C20.9789 23.1457 21.4531 23.0513 21.8955 22.8679C22.3379 22.6845 22.7398 22.4158 23.0784 22.0771C23.4169 21.7384 23.6854 21.3363 23.8686 20.8938C24.0517 20.4513 24.146 19.9771 24.1458 19.4982C24.1457 19.0193 24.0513 18.5451 23.8679 18.1027C23.6845 17.6603 23.4158 17.2584 23.0771 16.9198C22.7384 16.5813 22.3363 16.3127 21.8938 16.1296C21.4513 15.9464 20.9771 15.8522 20.4982 15.8523C19.531 15.8526 18.6035 16.237 17.9198 16.9211C17.2361 17.6052 16.8521 18.5328 16.8523 19.5C16.8526 20.4672 17.237 21.3946 17.9211 22.0784C18.6052 22.7621 19.5328 23.1461 20.5 23.1458ZM24.875 15.6719H27.0607C27.2059 15.6719 27.3452 15.6143 27.448 15.5118C27.5509 15.4093 27.6089 15.2702 27.6094 15.125V12.9393C27.6094 12.7938 27.5516 12.6542 27.4487 12.5513C27.3458 12.4484 27.2062 12.3906 27.0607 12.3906H24.875C24.7295 12.3906 24.5899 12.4484 24.487 12.5513C24.3841 12.6542 24.3263 12.7938 24.3263 12.9393V15.125C24.3281 15.4258 24.5742 15.6719 24.875 15.6719ZM20.5 2C15.8587 2 11.4075 3.84374 8.12563 7.12563C4.84374 10.4075 3 14.8587 3 19.5C3 24.1413 4.84374 28.5925 8.12563 31.8744C11.4075 35.1563 15.8587 37 20.5 37C22.7981 37 25.0738 36.5473 27.197 35.6679C29.3202 34.7884 31.2493 33.4994 32.8744 31.8744C34.4994 30.2493 35.7884 28.3202 36.6679 26.197C37.5473 24.0738 38 21.7981 38 19.5C38 17.2019 37.5473 14.9262 36.6679 12.803C35.7884 10.6798 34.4994 8.75066 32.8744 7.12563C31.2493 5.50061 29.3202 4.21157 27.197 3.33211C25.0738 2.45265 22.7981 2 20.5 2ZM29.6146 26.5893C29.6146 27.7031 28.7031 28.6146 27.5893 28.6146H13.4107C12.2969 28.6146 11.3854 27.7031 11.3854 26.5893V12.4107C11.3854 11.2969 12.2969 10.3854 13.4107 10.3854H27.5893C28.7031 10.3854 29.6146 11.2969 29.6146 12.4107V26.5893Z" fill="#F49B33" />
                        </svg>
                    </Link>
                </div>
                <p className='text-[#92989F] text-sm font-inter font-normal'>TableBooky.com | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
