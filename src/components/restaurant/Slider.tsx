"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

export default function Slider({ images }: { images: string[] }) {
    return (
        <div className="relative w-full">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next-button',
                    prevEl: '.prev-button',
                }}
                className="w-full"
            >
                {images.map((image) => (
                    <SwiperSlide
                        key={image}
                        className="w-full h-auto aspect-auto overflow-hidden relative"
                    >
                        <div className="absolute inset-2 z-20 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-transparent border border-primary rounded-md"></div>
                        <Image
                            className="w-full h-full object-cover"
                            src={image}
                            alt="restaurant image"
                            width={1000}
                            height={400}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кнопка "Prev" */}
            <button className="prev-button absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(-180 30 30)" fill="white" fillOpacity="0.33" />
                    <path d="M21.3332 22.6117L21.3333 11.3884C21.3333 10.5326 20.3908 10.0126 19.6649 10.4784L10.8466 16.0901C10.6922 16.1878 10.565 16.3229 10.4769 16.483C10.3888 16.643 10.3426 16.8228 10.3426 17.0055C10.3426 17.1882 10.3888 17.3679 10.4769 17.528C10.565 17.688 10.6922 17.8232 10.8466 17.9209L19.6649 23.5217C19.8283 23.6274 20.0172 23.687 20.2117 23.6943C20.4061 23.7016 20.599 23.6562 20.7698 23.5631C20.9406 23.4699 21.0832 23.3323 21.1823 23.1649C21.2815 22.9974 21.3336 22.8063 21.3332 22.6117Z" fill="black" />
                    <path d="M22 20.355L20.4228 22L13.7114 15L20.4228 8L22 9.645L16.877 15L22 20.355ZM15.2886 20.355L13.7114 22L7 15L13.7114 8L15.2886 9.645L10.1655 15L15.2886 20.355Z" fill="white" />
                </svg>
            </button>

            {/* Кнопка "Next" */}
            <button className="next-button absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect width="30" height="30" rx="15" fill="white" fillOpacity="0.33" />
                    <path d="M8.66675 7.38827V18.6116C8.66675 19.4674 9.60925 19.9874 10.3351 19.5216L19.1534 13.9099C19.3078 13.8122 19.435 13.6771 19.5231 13.517C19.6112 13.357 19.6574 13.1772 19.6574 12.9945C19.6574 12.8118 19.6112 12.6321 19.5231 12.472C19.435 12.312 19.3078 12.1768 19.1534 12.0791L10.3351 6.47827C10.1717 6.37258 9.98279 6.31296 9.78832 6.30569C9.59386 6.29841 9.40103 6.34376 9.2302 6.43695C9.05936 6.53013 8.91684 6.6677 8.81767 6.83513C8.7185 7.00257 8.66636 7.19367 8.66675 7.38827Z" fill="black" />
                    <path d="M8 9.645L9.57718 8L16.2886 15L9.57718 22L8 20.355L13.123 15L8 9.645ZM14.7114 9.645L16.2886 8L23 15L16.2886 22L14.7114 20.355L19.8345 15L14.7114 9.645Z" fill="white" />
                </svg>
            </button>
        </div>
    )
}
