import { useAppSelector, useAppDispatch } from '@app/redux/selectors'
import { authSlice } from '@auth/lib/authSlice'
import { setToken } from '@lib/cookies'

export function useAuth() {
  const authState = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const setUser = (user: any) => dispatch(authSlice.actions.setUser(user))
  const setIsLoggedIn = (isLoggedIn: boolean) =>
    dispatch(authSlice.actions.setIsLoggedIn(isLoggedIn))
  const logout = () => {
    dispatch(authSlice.actions.clearUser())
    setToken(undefined)
  }

  return {
    state: authState,
    actions: {
      setUser,
      setIsLoggedIn,
      logout
    }
  }
}
