export type HallGridRow = (number | null)[];

export type Category = "standard" | "comfort" | "premium";
export type SeatCategoryIndex = 0 | 1 | 2;

export type MovieListItem = Pick<
    Movie,
    "id" | "title" | "genreId" | "directorId" | "posterUrl"
>;

export class ApiError extends Error {
    constructor(
        public status: number | undefined,
        message: string,
        public url?: string,
    ) {
        super(message);
        this.name = "ApiError";
    }
}

export interface Compliance {
    id: number;
    name: string;
}

export type Genre = Compliance;
export type Director = Compliance;
export type Actor = Compliance;
export type AgeRating = Compliance;

export interface CategoryInfo {
    name: Category;
    priceMultiplier: number;
}

export interface Movie {
    id: number;
    title: string;
    genreId: number;
    directorId: number;
    screenwriterIds: number[];
    actorIds: number[];
    ageRating: number
    synopsis: string;
    trailerUrl: string;
    posterUrl: string;
}

export interface Hall {
    id: number;
    name: string;
    rows: number;
    seatsPerRow: number;
    grid: HallGridRow[];
}

export interface Session {
    id: number;
    movieId: number;
    hallId: number;
    datetime: string; 
    basePrice: number;
}

export interface Customer {
    name: string;
    email: string;
    phone: string;
}

export interface Seat {
    row: number;
    seat: number;
    category: SeatCategoryIndex;
    price: number;
}

export interface Order {
    id: number;
    sessionId: number;
    seats: Seat[];
    total: number;
    customer: Customer;
    createdAt: string; 
}