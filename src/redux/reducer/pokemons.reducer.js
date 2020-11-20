import { addFavouriteFlag, handlePokemonsFavourite } from "../../utils/favourite"
import { REMOVE_ALL_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions/favourite.action"
import { ADD_TO_FAVOURITE, GET_POKEMONS } from "../actions/home.action"

const intialState = {
    pokemons: [],
    favouritePokemons: [],

}
export default function (state = intialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_POKEMONS: { return { ...state, pokemons: addFavouriteFlag(action) } }
        case ADD_TO_FAVOURITE: {
            return {
                ...state, pokemons: handlePokemonsFavourite(action, state, true).pokemons,
                favouritePokemons: handlePokemonsFavourite(action, state, true).favouritePokemons
            }
        }
        case REMOVE_FROM_FAVOURITE: {
            return {
                ...state, pokemons: handlePokemonsFavourite(action, state, false).pokemons,
                favouritePokemons: handlePokemonsFavourite(action, state, false).favouritePokemons
            }
        }

        case REMOVE_ALL_FAVOURITE: {
            return {
                ...state, pokemons: state.pokemons.map(v => { v.favourite = false; return v }),
                favouritePokemons: []
            }
        }

    }
    return state
}

