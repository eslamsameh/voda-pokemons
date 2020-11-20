import { combineReducers, createStore } from 'redux';
import PokemonsReducer from "./pokemons.reducer";

const appReducer = combineReducers({
    pokemons: PokemonsReducer,
});

export const store = createStore(appReducer);
