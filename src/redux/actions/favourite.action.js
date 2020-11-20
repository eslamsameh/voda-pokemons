export const GET_FAVOURITES_POKEMONS = 'GET_FAVOURITES_POKEMONS';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const REMOVE_ALL_FAVOURITE = 'REMOVE_ALL_FAVOURITE'


export const getFavouritesPokemons = (data) => {
    return {
        type: GET_FAVOURITES_POKEMONS,
        payload: null
    }
}

export const removeFromFavouriteAction = (data) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: data
    }
}

export const removeAllFavouritesAction = () => {
    return {
        type: REMOVE_ALL_FAVOURITE,
        payload: null
    }
}