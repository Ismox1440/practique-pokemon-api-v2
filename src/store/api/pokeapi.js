import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = '';

export const pokeapi = createApi({
    reducerPath: "pokeapi",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    tagTypes: ["pokemones", "pokemon"],

    endpoints: (builder) => ({

        getAllPokemon: builder.query({
			query: ({navigation}) => {
                if(navigation?.filterNumber) {
                    return ({
                        url: `https://pokeapi.co/api/v2/type/${navigation.filterNumber}`,
                        method: "GET"
                    })
                }
                return ({
                    url: `https://pokeapi.co/api/v2/pokemon?offset=${navigation.page * 20}&limit=20`,
                    method: "GET",
                })
            },
            invalidatesTags: ['pokemon']
		}),
		getMoreDetails: builder.query({
			query: (url) => { 
                return ({
				url: url,
				method: "GET",
			})},
            providesTags: ['pokemon']
		}),
		getRangeData: builder.query({
			query: (offset) => ({
				url: `?offset=${offset}&limit=20`,
				method: "GET",
			}),
		}),
		getSinglePokemon: builder.query({
			query: (name) => ({
				url: name,
				method: "GET",
			}),
		}),
       

       

    })
})

export const {
    useGetAllPokemonQuery,
    useGetMoreDetailsQuery,
    useGetRangeDataQuery,
    useGetSinglePokemonQuery,
    useLazyGetMoreDetailsQuery
} = pokeapi;