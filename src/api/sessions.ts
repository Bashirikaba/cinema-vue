import { api, handleApiError } from "./client";
import {
    Session,
} from "./types";

const SESSIONS = "/sessions";
const MOVIES = "/movies";
const HALLS = "/halls";

export async function getSessions(): Promise<Session[]> {
    try {
        const { data } = await api.get<Session[]>(SESSIONS);
        return data;
    } catch (error) {
        handleApiError(error, "getSessions");
    }
}

export async function getSessionById(id: number): Promise<Session> {
    try {
        const { data } = await api.get<Session>(`${SESSIONS}/${id}`);
        return data;
    } catch (error) {
        handleApiError(error, "getSessionById");
    }
}

export async function getSessionsByMovie(movieId: number): Promise<Session[]> {
    try {
        const { data } = await api.get<Session[]>(`${MOVIES}/${movieId}/sessions`);
        return data;
    } catch (error) {
        handleApiError(error, "getSessionsByMovie");
    }
}

export async function getSessionsByHall(hallId: number): Promise<Session[]> {
    try {
        const { data } = await api.get<Session[]>(`${HALLS}/${hallId}/sessions`);
        return data;
    } catch (error) {
        handleApiError(error, "getSessionsByHall");
    }
}