interface Attributes {
    slug: string;
    title: string;
    summary: string;
    directors: string[];
    screenwriters: any[];
    producers: string[];
    cinematographers: string[];
    editors: string[];
    distributors: string[];
    music_composers: string[];
    release_date: string;
    running_time: string;
    budget: string;
    box_office: string;
    rating: string;
    order: number;
    trailer: string;
    poster: string;
    wiki: string;
}

interface Movie {
    id: string;
    type: string;
    attributes: Attributes;
}

export {Movie, Attributes}
