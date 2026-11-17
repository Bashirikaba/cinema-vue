import { Customer, Order, Seat} from "./types";

export interface OrderCreateInput {
    sessionId: string;
    seats: Array<Pick<Seat, "row" | "seat" | "category">>;
    customer: Customer;
}

export type OrderUpdateInput = Omit<Order, "id" | "createdAt">;