import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, modeReducer);

const store = configureStore({
  reducer: {
    mode: persistedReducer,
  },
});

export let persistor = persistStore(store);

export default store;
