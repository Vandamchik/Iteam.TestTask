export interface IGameInfoData {
    appId?: string,
    imgUrl: string,
    price: string | number,
    released: string,
    reviewSummary: string,
    title: string,
    url: string,
    numberPrice?: number,
    releasedDate?: number,
}

export interface IDetailsPageProps {
    title: string,
    price: string | number,
    released: string,
    reviewSummary: string,
    imgUrl: string
}

export interface IFavoritesGamesSlice {
    favStorageData: IGameInfoData[] | any[],
}

export enum FavoritesSliceOption {
    FAV_KEY = "favgames",
    FAV_SLICE_NAME = "favoritesGames"
}


