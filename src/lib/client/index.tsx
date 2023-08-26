import { HyunsClient } from "hyuns-api-v2-client";

export const client = new HyunsClient({
    auth: localStorage.getItem("token") || "",
    baseUrl: import.meta.env.VITE_API_URL,
});
