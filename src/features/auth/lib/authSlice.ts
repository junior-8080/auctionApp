import { createSlice } from '@reduxjs/toolkit'
import { User } from '@auth/lib/types'
export type AuthState = {
  user?: User
  isLoggedIn: boolean
}

const initialState: AuthState = {
  user: undefined,
  isLoggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      return state
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
      return state
    },
    clearUser: (state) => {
      state.user = undefined
      state.isLoggedIn = false
    }
  }
})
