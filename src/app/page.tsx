import { restaurants } from "@/utils/restaurants";
import Layout from "@/common/Layout";
import RestaurantPost from "@/components/RestaurantPost";
import ActionLabel from "@/components/ActionLabel";
import AllLocations from "@/components/AllLocations";
import OfficialWebsites from "@/components/OfficialWebsites";

export default function Home() {
    return (
        <Layout
            className="flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-[113px]"
            childrenLeft={
                <div className="p-2.5 sm:p-5 xl:p-[30px] bg-white rounded-md shadow-md">
                    <h1 className="w-full pt-1.5 sm:pt-0 text-left text-lg sm:text-2xl font-bold text-tertiary border-b border-primary pb-2.5 sm:pb-5">Our <span className="text-primary">Restaurants</span></h1>
                    <div className="grid md:grid-cols-2  2xl:grid-cols-3 gap-5 xl:gap-[30px] mt-4">
                        {restaurants.map((restaurant) => (
                            <RestaurantPost key={restaurant.slug} {...restaurant} />
                        ))}
                    </div>
                </div>
            }
            childrenRight={
                <>
                    <ActionLabel />
                    <AllLocations />
                    <OfficialWebsites/>
                </>
            }
        />
    );
}
