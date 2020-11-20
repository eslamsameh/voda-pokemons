export const GET_POKEMONS = 'GET_POKEMONS';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';


export const getPokemonsAction = (data) => {
    return {
        type: GET_POKEMONS,
        payload: data
    }
}

export const addToFavouriteAction = (data) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: data
    }
}