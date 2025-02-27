import Layout from "@/common/Layout";
import ActionLabel from "@/components/ActionLabel";
import HereToFind from "@/components/HereToFind";
import OfficialWebsites from "@/components/OfficialWebsites";
import Description from "@/components/restaurant/Description";
import Menu from "@/components/restaurant/Menu";
import Slider from "@/components/restaurant/Slider";
import { restaurants } from "@/utils/restaurants";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({
    params
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;

    const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

    if (!restaurant) {
        return {
            title: "Restaurant not found"
        }
    }

    return {
        title: restaurant.name,
        description: restaurant.description
    }
}

const Page = async ({
    params
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;

    const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);


    if (!restaurant) {
        return <div>Restaurant not found</div>;
    }

    return (
        <Layout
            className="flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-[113px]"
            childrenLeft={
                <div className="p-2.5 sm:p-5 xl:p-[30px] bg-white rounded-md shadow-md">
                    <div className="w-full border-b border-primary pb-2.5 sm:pb-5">
                        <Link href="/" className="text-left text-xl font-bold text-tertiary flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13 5.41L8.66981 10L13 14.59L11.6604 16L6 10L11.6604 4L13 5.41Z" fill="#5E5E5E" />
                            </svg>
                            Go Back
                        </Link>
                    </div>
                    <div className="mt-[30px]">
                        <div className="mb-5 md:mb-[30px] max-w-fit relative">
                            <Slider images={restaurant.images} />
                        </div>
                        <h1 className="w-full pt-1.5 sm:pt-0 text-left text-base sm:text-lg md:text-2xl font-bold text-tertiary border-b border-primary pb-2.5 sm:pb-4">
                            <span className='text-primary'>{restaurant.name.split(' ')[0]}</span> {restaurant.name.split(' ').slice(1).join(' ')} 
                        </h1>
                        <div className="flex gap-5 mt-4 flex-col md:flex-row">
                            <div className="md:w-2/5 xl:w-2/6 flex flex-col gap-2.5">
                                <div className='flex items-start gap-2.5'>
                                    <Image src="/assets/location.svg" alt="location icon" width={20} height={20} />
                                    <span dangerouslySetInnerHTML={{ __html: restaurant.location }} className='text-sm' />
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <Image src="/assets/time.svg" alt="time icon" width={20} height={20} />
                                    <span className="text-sm mt-0.5"><strong>{restaurant.timeframe.open} </strong>AM - <strong>{restaurant.timeframe.close} </strong>PM</span>
                                </div>
                                <Menu slug={restaurant.slug} />
                            </div>
                            <div className="md:w-3/5 xl:w-4/6 flex gap-2.5 md:gap-4">
                                <div className="w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M3.4375 15.3125H16.5625M3.4375 10.3125H16.5625M3.4375 5.3125H16.5625" stroke="#F49B33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <Description description={restaurant.description} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-lg font-bold text-tertiary mb-2.5 md:mb-5">Available Time Slots</h2>
                            <ul className=" w-full grid gap-2 sm:gap-4 grid-flow-row grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
                                {restaurant?.times.map((time) => (
                                    <button
                                        key={time.time}
                                        className={`text-white text-xs md:text-sm lg:text-base font-inter font-bold py-2.5 px-1 lg:px-3 rounded-md ${time.isOpen ? "bg-primary hover:bg-primary/80 transition-all duration-300" : "bg-sub cursor-default"}`}
                                    >
                                        {time.time}
                                    </button>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            }
            childrenRight={
                <>
                    <ActionLabel />
                    <HereToFind iframeSrc={restaurant?.map_location} />
                    <OfficialWebsites />
                </>
            }
        />
    )
}

export default Page
