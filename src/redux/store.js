import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { composeWithDevTools } from "redux-devtools-extension";
import taskReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);