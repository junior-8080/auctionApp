import {combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user", "isLoggedIn", "walkThrough"],
};

const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
