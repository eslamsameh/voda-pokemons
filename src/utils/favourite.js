export const addFavouriteFlag = (state) => {
    return state.payload.map(v => { v.favourite = false; return v });
}
export const handlePokemonsFavourite = (action, state,status) => {
    return {
        pokemons: state.pokemons.map(v => { v.id === action.payload.id && (v.favourite = status); return v }),
        favouritePokemons: state.pokemons
            .map(v => { v.id === action.payload.id && (v.favourite = status); return v })
            .filter(v => v.favourite),
    };
}