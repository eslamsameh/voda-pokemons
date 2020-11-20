import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromFavouriteAction } from '../../redux/actions/favourite.action';
import { CardListView } from "./pokemonCardListView.style";

export default function Pokemoncardlistview({ data }) {
const dispatch = useDispatch();
    return (
        <>
            <CardListView>
                <div className="card">
                    <div className="card-media">
                    <img src={data?.img} alt="altImage" />
                    <p className="txt-name">{data?.name?.english}</p>
                    </div>
                    <div className="card-content">
                    <label className="link-danger" onClick={() => dispatch(removeFromFavouriteAction(data))}>Remove</label>
                    </div>
                </div>
               
            </CardListView>
        </>
    )
}
