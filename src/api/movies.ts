import { api, handleApiError } from "./client";
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

export async function getMovieById(id: number): Promise<Movie> {
    try {
        const { data } = await api.get<Movie>(`${MOVIES}/${id}`);
        return data;
    } catch (error) {
        handleApiError(error, "getMovieById");
    }
}

export async function getMoviesByGenre(genreId: number): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${GENRES}/${genreId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByGenre");
    }
}

export async function getMoviesByDirector(directorId: number): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${DIRECTORS}/${directorId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByDirector");
    }
}

export async function getMoviesByActor(actorId: number): Promise<Movie[]> {
    try {
        const { data } = await api.get<Movie[]>(`${ACTORS}/${actorId}/movies`);
        return data;
    } catch (error) {
        handleApiError(error, "getMoviesByActor");
    }
}