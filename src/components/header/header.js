import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from "./header.style";

export default function Header(props) {

    const favouriteCount = useSelector((state) => state.pokemons.favouritePokemons.length);
    const history = useHistory();

    const renderSvg = () => (
        <>
            <span className="badge">{favouriteCount}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#fff" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
        </>
    )
    
    return (
        <>
            <HeaderContainer>
                <div className="header-container" >
                    <h4 onClick={() => history.push("/")}>Pokemons</h4>
                    <div className="relative-div" onClick={() => history.push("/fav")} >
                        {renderSvg()}
                    </div>
                </div>
            </HeaderContainer>
        </>
    )
}
