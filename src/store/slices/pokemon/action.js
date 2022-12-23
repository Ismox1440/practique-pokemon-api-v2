import { fetchAllPokemon } from "../../../utils";
import { getAllPokemon } from "./index";

export const getAllPokemonAction = () => (dispatch) => {
    return fetchAllPokemon(dispatch)
}