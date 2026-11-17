import { api, handleApiError } from "./client";
import { OrderCreateInput } from "./dto";
import {
    Order,
} from "./types";

const ORDERS = "/orders";
const SESSIONS = "/sessions";

// READ

export async function getOrders(): Promise<Order[]> {
    try {
        const { data } = await api.get<Order[]>(ORDERS);
        return data;
    } catch (error) {
        handleApiError(error, "getOrders");
    }
}

export async function getOrderById(id: string): Promise<Order> {
    try {
        const { data } = await api.get<Order>(`${ORDERS}/${id}`);
        return data;
    } catch (error) {
        handleApiError(error, "getOrderById");
    }
}

export async function getOrdersBySession(sessionId: string): Promise<Order[]> {
    try {
        const { data } = await api.get<Order[]>(
            `${SESSIONS}/${sessionId}/orders`,
        );
        return data;
    } catch (error) {
        handleApiError(error, "getOrdersBySession");
    }
}

// CREATE

export async function createOrder(input: OrderCreateInput): Promise<Order> {
    try {
        const { data } = await api.post<Order>(ORDERS, input);
        return data;
    } catch (error) {
        handleApiError(error, "createOrder");
    }
}

// DELETE

export async function deleteOrder(id: string): Promise<void> {
    try {
        await api.delete(`${ORDERS}/${id}`);
    } catch (error) {
        handleApiError(error, "deleteOrder");
    }
}