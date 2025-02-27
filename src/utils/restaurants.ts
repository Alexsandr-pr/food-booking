import { Restaurant } from "@/types";





const times = [
    {
        time: "10:30 AM",
        isOpen: true,
    },
    {
        time: "10:45 PM",
        isOpen: false,
    },
    {
        time: "11:30 AM",
        isOpen: true,
    },
    {
        time: "11:45 AM",
        isOpen: true,
    },
    {
        time: "12:00 PM",
        isOpen: true,
    },
    {
        time: "01:30 PM",
        isOpen: true,
    },
    {
        time: "02:30 PM",
        isOpen: true,
    },
    {
        time: "02:45 PM",
        isOpen: true,
    }
    
]

export const restaurants: Restaurant[] = [
    {
        slug: "sea-grill-north-miami-beach",
        name: "Sea Grill North Miami Beach",
        preview: "/assets/restaurants/preview/sea-grill-north-miami-beach.png",
        images: [
            "/assets/restaurants/sea-grill-north-miami-beach.png",
            "/assets/restaurants/sea-grill-of-merrick-park.png",
            "/assets/restaurants/villagio-restaurant-bar-lorenzo-avenue.png",
            "/assets/restaurants/carpaccio-american-dream.png",
            "/assets/restaurants/villagio-restaurant-bar-sawgrass-mills.png",
            "/assets/restaurants/villagio-restaurant-bar-plaza-real.png"
        ],
        location: "3913 NE 163rd St,<br/> North Miami Beach, FL 33160",
        timeframe: {
            open: "11:30",
            close: "11:00"
        },
        times: times,
        menu: [
            {
                type: "lunch",
                download_link: "",
                name: "Lunch (Monday-Friday 11am-4pm)",
            },
            {   
                type: "dinner",
                download_link: "",
                name: "Dinner Menu",
            },
            {
                type: "wine",
                download_link: "",
                name: "Wine, Desserts and Drinks",
            }
        ],
        description: "Sea Grill of North Miami Beach is a refined dining spot that specializes in fresh seafood and elevated Mediterranean-inspired dishes. Located in the upscale Merrick Park area, the restaurant offers a stylish interior with tasteful décor and inviting seating. The menu showcases premium seafood options—ranging from delicately grilled fish to succulent shellfish—along with enticing salads, pasta dishes, and signature Greek appetizers. With attentive service, a sophisticated ambiance, and an impressive wine list, Sea Grill of Merrick Park creates a memorable setting for both casual gatherings and special occasions alike.",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.136274645032!2d-80.08742142457972!3d26.354453976984356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21ce55fe447%3A0xd302606af8e09920!2sVillagio!5e0!3m2!1sen!2sua!4v1740681624279!5m2!1sen!2sua"
    },
    {
        slug: "sea-grill-of-merrick-park",
        name: "Sea Grill of Merrick Park",
        preview: "/assets/restaurants/preview/sea-grill-of-merrick-park.png",
        images: [
            "/assets/restaurants/sea-grill-of-merrick-park.png",
            "/assets/restaurants/sea-grill-north-miami-beach.png",
            "/assets/restaurants/villagio-restaurant-bar-lorenzo-avenue.png",
            "/assets/restaurants/carpaccio-american-dream.png",
            "/assets/restaurants/villagio-restaurant-bar-sawgrass-mills.png",
            "/assets/restaurants/villagio-restaurant-bar-plaza-real.png"
        ],
        location: "4250 Salzedo Street,<br/> Suite 1425Coral Gables, FL 33146",
        timeframe: {
            open: "11:30",
            close: "11:00"
        },
        menu: [
            {
                type: "lunch",
                download_link: "",
                name: "Lunch (Monday-Friday 11am-4pm)",
            },
            {   
                type: "dinner",
                download_link: "",
                name: "Dinner Menu",
            },
            {
                type: "wine",
                download_link: "",
                name: "Wine, Desserts and Drinks",
            }
        ],
        times: times,
        description: "Sea Grill of Merrick Park is a refined dining spot that specializes in fresh seafood and elevated Mediterranean-inspired dishes. Located in the upscale Merrick Park area, the restaurant offers a stylish interior with tasteful décor and inviting seating. The menu showcases premium seafood options—ranging from delicately grilled fish to succulent shellfish—along with enticing salads, pasta dishes, and signature Greek appetizers. With attentive service, a sophisticated ambiance, and an impressive wine list, Sea Grill of Merrick Park creates a memorable setting for both casual gatherings and special occasions alike.",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.136274645032!2d-80.08742142457972!3d26.354453976984356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21ce55fe447%3A0xd302606af8e09920!2sVillagio!5e0!3m2!1sen!2sua!4v1740681624279!5m2!1sen!2sua"
    },
    {
        slug: "villagio-restaurant-bar-lorenzo-avenue",
        name: "Villagio Restaurant & Bar",
        preview: "/assets/restaurants/preview/villagio-restaurant-bar-lorenzo-avenue.png",
        images: [
            "/assets/restaurants/villagio-restaurant-bar-lorenzo-avenue.png",
            "/assets/restaurants/sea-grill-north-miami-beach.png",
            "/assets/restaurants/sea-grill-of-merrick-park.png",
            "/assets/restaurants/carpaccio-american-dream.png",
            "/assets/restaurants/villagio-restaurant-bar-sawgrass-mills.png",
            "/assets/restaurants/villagio-restaurant-bar-plaza-real.png"
        ],
        location: "360 San Lorenzo Avenue, Suite<br/> 1430Coral Gables, FL 33146-1865",
        timeframe: {
            open: "11:30",
            close: "11:00"
        },
        menu: [
            {
                type: "lunch",
                download_link: "",
                name: "Lunch (Monday-Friday 11am-4pm)",
            },
            {   
                type: "dinner",
                download_link: "",
                name: "Dinner Menu",
            },
            {
                type: "wine",
                download_link: "",
                name: "Wine, Desserts and Drinks",
            }
        ],
        times: times,
        description: "Villagio Restaurant & Bar in Boca Raton offers a welcoming blend of modern elegance and classic Italian charm. Stepping inside, you’re greeted by warm lighting, comfortable seating, and tasteful décor—complete with sweeping murals reminiscent of an Italian piazza. The menu focuses on traditional Italian favorites such as homemade pasta, wood-fired pizzas, and fresh seafood, complemented by a well-curated wine list. Attentive staff ensure a relaxed, enjoyable dining experience, whether you’re sharing a casual meal with friends or celebrating a special occasion. With its inviting atmosphere and authentic flavors, Villagio Restaurant & Bar stands out as a delightful spot to savor Italian cuisine in the heart of Boca Raton.",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.136274645032!2d-80.08742142457972!3d26.354453976984356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21ce55fe447%3A0xd302606af8e09920!2sVillagio!5e0!3m2!1sen!2sua!4v1740681624279!5m2!1sen!2sua"
    },
    {
        slug: "carpaccio-american-dream",
        name: "Carpaccio American Dream",
        preview: "/assets/restaurants/preview/carpaccio-american-dream.png",
        images: [
            "/assets/restaurants/carpaccio-american-dream.png",
            "/assets/restaurants/sea-grill-north-miami-beach.png",
            "/assets/restaurants/sea-grill-of-merrick-park.png",
            "/assets/restaurants/villagio-restaurant-bar-lorenzo-avenue.png",
            "/assets/restaurants/villagio-restaurant-bar-sawgrass-mills.png",
            "/assets/restaurants/villagio-restaurant-bar-plaza-real.png"
        ],
        location: "1 American Dream Way.<br/> #F225, East Rutherford, NJ 07073",
        timeframe: {
            open: "11:30",
            close: "11:00"
        },
        menu: [
            {
                type: "lunch",
                download_link: "",
                name: "Lunch (Monday-Friday 11am-4pm)",
            },
            {   
                type: "dinner",
                download_link: "",
                name: "Dinner Menu",
            },
            {
                type: "wine",
                download_link: "",
                name: "Wine, Desserts and Drinks",
            }
        ],
        times: times,
        description: "Many years ago, in the sun-drenched hills of Sicily, by the Mediterranean Sea, lived a young lady named Rosalia. Her cooking delighted all who were fortunate to dine at her table and enjoy her food. Rosalia married Nunzio Billante and throughout the years, she passed down the mouthwatering secrets of her cuisine to their children. Her son, Tom, learned those secrets from a young age. He knew that a simple blend of fine, fresh ingredients with careful preparation and a little love was the key to a memorable experience! <br/>Determined to share these wonderful flavors, Tom founded the original Carpaccio in the luxurious Bal Harbour Shops over 25 years ago, serving elegant, traditional, and exquisite Italian food. The success of this endeavor was based on an uncompromising commitment to quality and to careful attention to the smallest details. Now this iconic establishment has come to the American Dream in East Rutherford, New Jersey.<br/>Whether it is a plate of burrata or linguini vongole—our Italian food is based on bringing the best and freshest ingredients to your table. Our goal is to create a moment of intimate sharing and of vivid memory.",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.136274645032!2d-80.08742142457972!3d26.354453976984356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21ce55fe447%3A0xd302606af8e09920!2sVillagio!5e0!3m2!1sen!2sua!4v1740681624279!5m2!1sen!2sua"
    },
    {
        slug: "villagio-restaurant-bar-sawgrass-mills",
        name: "Villagio Restaurant & Bar",
        preview: "/assets/restaurants/preview/villagio-restaurant-bar-sawgrass-mills.png",
        images: [
            "/assets/restaurants/villagio-restaurant-bar-sawgrass-mills.png",
            "/assets/restaurants/sea-grill-north-miami-beach.png",
            "/assets/restaurants/sea-grill-of-merrick-park.png",
            "/assets/restaurants/villagio-restaurant-bar-lorenzo-avenue.png",
            "/assets/restaurants/carpaccio-american-dream.png",
            "/assets/restaurants/villagio-restaurant-bar-plaza-real.png"
        ],
        location: "1760 Sawgrass Mills<br/> CircleSunrise, FL 33323-3912",
        timeframe: {
            open: "11:30",
            close: "11:00"
        },
        menu: [
            {
                type: "lunch",
                download_link: "",
                name: "Lunch (Monday-Friday 11am-4pm)",
            },
            {   
                type: "dinner",
                download_link: "",
                name: "Dinner Menu",
            },
            {
                type: "wine",
                download_link: "",
                name: "Wine, Desserts and Drinks",
            }
        ],
        times: times,
        description: "Villagio Restaurant & Bar in Boca Raton offers a welcoming blend of modern elegance and classic Italian charm. Stepping inside, you’re greeted by warm lighting, comfortable seating, and tasteful décor—complete with sweeping murals reminiscent of an Italian piazza. The menu focuses on traditional Italian favorites such as homemade pasta, wood-fired pizzas, and fresh seafood, complemented by a well-curated wine list. Attentive staff ensure a relaxed, enjoyable dining experience, whether you’re sharing a casual meal with friends or celebrating a special occasion. With its inviting atmosphere and authentic flavors, Villagio Restaurant & Bar stands out as a delightful spot to savor Italian cuisine in the heart of Boca Raton.",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.136274645032!2d-80.08742142457972!3d26.354453976984356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21ce55fe447%3A0xd302606af8e09920!2sVillagio!5e0!3m2!1sen!2sua!4v1740681624279!5m2!1sen!2sua"
    },
    {
        slug: "villagio-restaurant-bar-plaza-real",
        name: "Villagio Restaurant & Bar",
        preview: "/assets/restaurants/preview/villagio-restaurant-bar-plaza-real.png",
        images: [
            "/assets/restaurants/villagio-restaurant-bar-plaza-real.png",
            "/assets/restaurants/sea-grill-north-miami-beach.png",
            "/assets/restaurants/sea-grill-of-merrick-park.png",
            "/assets/restaurants/villagio-restaurant-bar-lorenzo-avenue.png",
            "/assets/restaurants/carpaccio-american-dream.png",
            "/assets/restaurants/villagio-restaurant-bar-sawgrass-mills.png",
        ],
        location: "344 Plaza Real, Suite 1433<br/> Boca Raton, FL 33432-3937",
        timeframe: {
            open: "11:30",
            close: "11:00"
        },
        menu: [
            {
                type: "lunch",
                download_link: "",
                name: "Lunch (Monday-Friday 11am-4pm)",
            },
            {   
                type: "dinner",
                download_link: "",
                name: "Dinner Menu",
            },
            {
                type: "wine",
                download_link: "",
                name: "Wine, Desserts and Drinks",
            }
        ],
        times: times,
        description: "Villagio Restaurant & Bar in Boca Raton offers a welcoming blend of modern elegance and classic Italian charm. Stepping inside, you’re greeted by warm lighting, comfortable seating, and tasteful décor—complete with sweeping murals reminiscent of an Italian piazza. The menu focuses on traditional Italian favorites such as homemade pasta, wood-fired pizzas, and fresh seafood, complemented by a well-curated wine list. Attentive staff ensure a relaxed, enjoyable dining experience, whether you’re sharing a casual meal with friends or celebrating a special occasion. With its inviting atmosphere and authentic flavors, Villagio Restaurant & Bar stands out as a delightful spot to savor Italian cuisine in the heart of Boca Raton.",
        map_location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.136274645032!2d-80.08742142457972!3d26.354453976984356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e21ce55fe447%3A0xd302606af8e09920!2sVillagio!5e0!3m2!1sen!2sua!4v1740681624279!5m2!1sen!2sua"
    },
];