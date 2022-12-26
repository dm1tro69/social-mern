import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {persistReducer, persistStore, FLUSH, PERSIST, PAUSE, PURGE, REHYDRATE} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {PersistGate} from "redux-persist/integration/react";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./state";
import {Provider} from "react-redux";


const persistConfig = {key: 'root', storage, version: 1}
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, PERSIST, PAUSE, PURGE, REHYDRATE]
            }
        })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  <BrowserRouter>
      <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
      </PersistGate>
  </BrowserRouter>
    </Provider>
);

