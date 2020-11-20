import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pokemoncardgridview from '../../components/pokemonCardGridView/pokemonCardGridView';
import { getPokemonsAction } from '../../redux/actions/home.action';
import { getPokemons } from '../../utils/service'

export default function Home(props) {
    const dispatch = useDispatch();
    const pekomons = useSelector((state) => state.pokemons.pokemons);

    useEffect(() => {
        getPokemonsList()
    }, [])

    const getPokemonsList = () => !pekomons.length && getPokemons().then(Res => dispatch(getPokemonsAction(Res.data)))

    return (
        <>
            <div className="container">
                <div className="grid-container">
                    {pekomons.map((pokemon, i) =>
                        <div key={i} className="grid-item"><Pokemoncardgridview data={pokemon} /></div>
                    )}
                </div>
            </div>
        </>
    )
}
