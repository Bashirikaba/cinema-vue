import axios from "axios";
import { ApiError } from "./types";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export function handleApiError(error: unknown, context: string): never {
    if (axios.isAxiosError(error)) {
        const { response, config } = error;
        const status = response?.status;
        const url = config?.url;

        console.error(`[${context}] Ошибка API:`, {
            url,
            method: config?.method,
            status,
            statusText: response?.statusText,
            data: response?.data,
            message: error.message,
        });

        const userMessage = statusMessage(status, response?.statusText, error.message);
        throw new ApiError(status, userMessage, url);
    }

    console.error(`[${context}] Неизвестная ошибка:`, error);
    throw new ApiError(undefined, "Произошла неизвестная ошибка");
}

function statusMessage(
    status: number | undefined,
    statusText: string | undefined,
    fallback: string,
): string {
    switch (status) {
        case 404:
            return "Запрашиваемые данные не найдены";
        case 408:
            return "Превышено время ожидания";
        case 500:
            return "Ошибка сервера";
        default:
            return status
                ? `Ошибка ${status}: ${statusText || fallback}`
                : fallback;
    }
}