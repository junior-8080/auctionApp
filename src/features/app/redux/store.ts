import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
//@ts-ignore
import logger from 'redux-logger'
import { appConfig } from '@lib/appConfig'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return appConfig.isDevelopment
      ? getDefaultMiddleware({
        serializableCheck: false
      }).concat(logger)
      : getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  },
  devTools: appConfig.isDevelopment
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
