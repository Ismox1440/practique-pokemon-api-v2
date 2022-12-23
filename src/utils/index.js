import { getAllPokemon } from "../store/slices/pokemon"

export const fetchAllPokemon = async (dispatch) => {
    const getPokemon = async (url) => {
        const data = await fetch(url)
        const pokemon = await data.json()
        return pokemon
    }
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=2000')
    let results = await data.json()
    results = results.results.map(r => getPokemon(r.url))
    const pokemones = await Promise.all(results)
    return dispatch(getAllPokemon(pokemones))
}