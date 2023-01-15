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

export interface ILearnMoreButtonProps {
    gameId: string
}

export interface ISearchProps {
    searchFormGame: (text:string) => void,
    inputType: string,
    inputValue: string
}

export interface ISelectProps {
    selectGameState: (text: string) => void
}

export interface ISortComponentProps {
    sortGameOrder: (id: string) => void
}

export interface ILikeButtonProps {
    titleId: string,
    isLiked: boolean | null,
    changeIsLiked: (arg:boolean) => void
}

export enum FavoritesSliceOption {
    FAV_KEY = "favgames",
    FAV_SLICE_NAME = "favoritesGames"
}


