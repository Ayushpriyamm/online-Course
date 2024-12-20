import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from '../user/userSlice'

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
        }
    })
});

export const persistor = persistStore(store);