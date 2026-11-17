import { api, handleApiError } from "./client";
import { AGE_RATINGS } from "./constants";
import {
    Movie,
    MovieListItem,
} from "./types";

const MOVIES = "/movies";
const GENRES = "/genres";
const DIRECTORS = "/directors";
const ACTORS = "/actors";

export async function getMovies(): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(MOVIES);
        return data;
    } catch (error) {
        handleApiError(error, "getMovies");
    }
}

export async function getMovieList(): Promise<MovieListItem[]> {
    try {
        const { data } = await api.get<MovieListItem[]>(MOVIES, {
            params: { fields: "id,title,genreId,directorId,posterUrl" },
        });
        return data;
    } catch (error) {
        handleApiError(error, "getMovieList");
    }
}

export async function getMovieById(id: string): Promise<Movie> {
    try {
        const { data } = await api.get<Movie>(`${MOVIES}/${id}`);
        return data;
    } catch (error) {
        handleApiError(error, "getMovieById");
    }
}

export async function getMoviesByGenre(genreId: string): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${GENRES}/${genreId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByGenre");
    }
}

export async function getMoviesByDirector(directorId: string): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${DIRECTORS}/${directorId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByDirector");
    }
}

export async function getMoviesByActor(actorId: string): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${ACTORS}/${actorId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByActor");
    }
}

export async function getMoviesByAgeRating(ageRatingId: string): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${AGE_RATINGS}/${ageRatingId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByAgeRating");
    }
}