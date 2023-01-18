// import { applyMiddleware, compose, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { reducers } from "../reducers";

const saveToLocalStorage = (store) => {
  try {
    const serializeStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializeStore);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializeStore = window.localStorage.getItem("store");
    if (serializeStore === null) return undefined;
    return JSON.parse(serializeStore);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: reducers,
  preloadedState: persistedState,
  middleware: [thunk],
});

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
