import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { GamesApiOptions } from '../../modules/env';
import { IGameInfoData } from '../../modules/module';


export const gamesAPI = createApi({
    reducerPath: "gamesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${ GamesApiOptions.BASE_URL }`
    }),
    endpoints: (builder) => ({
        getGamesByToken: builder.query<IGameInfoData[], string>({
            query: () =>({
                url: '',
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': GamesApiOptions.XRapidAPIKey,
                    'X-RapidAPI-Host': GamesApiOptions.XRapidAPIHost
                }
            })
        }),
    })
})

export const { useGetGamesByTokenQuery, useLazyGetGamesByTokenQuery } = gamesAPI;