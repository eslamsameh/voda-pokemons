import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromFavouriteAction } from '../../redux/actions/favourite.action';
import { addToFavouriteAction } from '../../redux/actions/home.action';
import { CardGridView } from "./pokemonCardGridView.style";

export default function Pokemoncardgridview({ data = {} }) {
    const dispatch = useDispatch();
    
    const handleChangeFavourite = (status) => {
        if (status === 'add') dispatch(addToFavouriteAction(data))
        else dispatch(removeFromFavouriteAction(data))
}
    return (
        <>
            <CardGridView>
                <div className="card">
                    <div className="card-media">
                        <img src={data?.img} alt="altImage" />
                    </div>
                    <div className="card-content">
                        <p className="txt-name">{data?.name?.english}</p>
                        
                        <div className="div-specs">
                            <button className="btn-primary-outline">Attack {data?.base?.Attack}</button>
                            <button className="btn-danger-outline"> Defense {data?.base?.Defense}</button>
                        </div>
                        <div className="btn-submit-container">
                            {data?.favourite ?
                                <button className="btn-primary-outline btn-added" onClick={() => handleChangeFavourite("remove")}>Added To favourite</button>
                                :
                                <button className="btn-primary" onClick={() => handleChangeFavourite("add")}>Add To favourite</button>
                            }
                        </div>
                    </div>
                </div>
            </CardGridView>
        </>
    )
}
