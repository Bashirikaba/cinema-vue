import type { CategoryInfo } from "./types";

export const CATEGORIES: readonly CategoryInfo[] = [
    { name: "standard", priceMultiplier: 1.0 },
    { name: "comfort", priceMultiplier: 1.3 },
    { name: "premium", priceMultiplier: 1.6 },
];

export const MOVIES = "/movies";
export const GENRES = "/genres";
export const DIRECTORS = "/directors";
export const ACTORS = "/actors";
export const HALLS = "/halls";
export const SESSIONS = "/sessions";
export const ORDERS = "/orders";
