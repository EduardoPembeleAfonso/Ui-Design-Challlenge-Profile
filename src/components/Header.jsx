import React from 'react';

import '../styles/Header.css';

import Mountain from '../img/mountain.jpg';

const Header = () => {
    return (
        <>
            <div className='headerContainer'>
                <h1 className='title-image'>Mountain</h1>
                <button className='button-header'>Coleção em destaque</button>
            </div>
        </>
    )
}

export default Header;