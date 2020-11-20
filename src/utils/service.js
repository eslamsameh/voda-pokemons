import Axios from "axios"
export const getPokemons = () => {
       return Axios.get('./data.json');
}