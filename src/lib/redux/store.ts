import {useMemo} from "react";
import {configureStore} from "@reduxjs/toolkit";
import {isServer} from "@utils/helpers";
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "./reducers";

let store: any;

function initStore(initialState: any) {
  let _store: any;

  if (isServer()) {
    _store = configureStore({
      reducer: rootReducer,
      // initialState,
    });
    return _store;
  }

  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;
  const persistConfig = {
    key: "root-client",
    storage,
    whitelist: ["auth"],
  };

  _store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    // initialState,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(composeWithDevTools),
  });
  _store.__PERSISTOR = persistStore(_store);
  return _store;
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
