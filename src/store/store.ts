import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gamesAPI } from "./service/gamesApi";
import { favoritesReducer } from "./service/favoritesSlice"


const rootReducer = combineReducers({
    [gamesAPI.reducerPath]: gamesAPI.reducer,
    favorites: favoritesReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({serializableCheck: false}).concat(gamesAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']