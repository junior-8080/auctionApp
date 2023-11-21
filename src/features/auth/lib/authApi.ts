import { api, endpoints } from "@lib/api";
import { LoginResponse } from "@auth/lib/types";

export const authApi = {
    login: (payload: {
        "email": "nyankson28@gmail.com",
        "password": "password"
    }) =>
        api.post<LoginResponse>(endpoints.users, payload),
};

export const SignUp = {
    SignUp: (payload: {userName: string, firstName: string, lastName: string, email: string, password: string}) =>
        api.post<LoginResponse>(endpoints.users, payload),
}