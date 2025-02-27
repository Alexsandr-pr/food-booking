



export interface Timeframe {
    open: string;
    close: string;
}

export interface Time {
    time: string;
    isOpen: boolean;
}

export interface Menu {
    download_link: string;
    name: string;
    type: "lunch" | "dinner" | "wine";
}

export interface Restaurant {
    slug: string;
    name: string;
    preview: string;
    images: string[];
    location: string;
    timeframe: Timeframe;
    times: Time[];
    map_location: string;
    description: string;
    menu: Menu[];
}


export interface Website {
    name: string;
    url: string;
    image: string;
}