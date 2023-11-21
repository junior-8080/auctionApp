import { api, endpoints } from "@lib/api";
import { LoginResponse } from "@auth/lib/types";

export const authApi = {
    login: (payload: {
        "email": "nyankson28@gmail.com",
        "password": "password"
    }) =>
        api.post<LoginResponse>(endpoints.users, payload),
};