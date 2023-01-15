import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoritesGamesSlice, FavoritesSliceOption } from '../../modules/module'

// const FAV_KEY = "favgames";

const initialState: IFavoritesGamesSlice = {
    favStorageData: JSON.parse(localStorage.getItem(FavoritesSliceOption.FAV_KEY) ?? "[]"),
}

export const favoritesSlice = createSlice({
    name: FavoritesSliceOption.FAV_SLICE_NAME,
    initialState,
    reducers: {
        addFavData(state, action: PayloadAction<any>) {
            state.favStorageData.push(action.payload)
            localStorage.setItem(FavoritesSliceOption.FAV_KEY, JSON.stringify(state.favStorageData))
        },
        removeFavData(state, action: PayloadAction<any>) {
            state.favStorageData = state.favStorageData.filter(f => f !== action.payload)
            localStorage.setItem(FavoritesSliceOption.FAV_KEY, JSON.stringify(state.favStorageData))
        },
        removeAll(state, action: PayloadAction<any>) {
            localStorage.clear()
        }

    }
})

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;