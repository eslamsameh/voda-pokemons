import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pokemoncardlistview from '../../components/pokemonCardListView/pokemonCardListView';
import { removeAllFavouritesAction } from '../../redux/actions/favourite.action';
import { RemoveAllBtn } from './favourite.style';

export default function Favourite(props) {

    const pekomons = useSelector((state) => state.pokemons.favouritePokemons);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <h2>Favorites</h2>
                <div>
                    {pekomons.map((v, i) => <Pokemoncardlistview key={i} data={v} />)}
                </div>
                {
                    !!pekomons.length && <RemoveAllBtn>
                        <div className="btn-container">
                            <button onClick={() => dispatch(removeAllFavouritesAction())}>Remove All</button>
                        </div>
                    </RemoveAllBtn>
                }
            </div>
        </>
    )
}
