import { api, endpoints } from '@lib/api'
import { LoginBody, SignUpBody, RecoverPasswordBody } from '@auth/lib/types'
export const authApi = {
  loginAdmin: ({ email, password }: LoginBody): Promise<any> =>
    api.post(endpoints.login, { email, password }),
  signUp: (payLoad: SignUpBody): Promise<any> =>
    api.post(endpoints.signUp, payLoad),
  recoverPassword: (payLoad: RecoverPasswordBody): Promise<any> =>
    api.post(endpoints.recoverPassword, payLoad)
}
