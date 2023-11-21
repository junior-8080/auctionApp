import { api, endpoints } from "@lib/api";
import { LoginResponse } from "@auth/lib/types";

export const authService = {
    login: (payload: {
        "email": "nyankson28@gmail.com",
        "password": "password"
    }) =>
        api.post<LoginResponse>(endpoints.auth, payload),
};