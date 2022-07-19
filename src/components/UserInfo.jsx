import React from "react";

//imgs
import Eduardo from '../img/Eduardo.jpg';

// styles
import '../styles/UserInfo.css';

const UserInfo = () => {
    return (
        <div className="userInfoContainer">
            <div className="header">
                <img src={Eduardo} alt="Eduardo P. Afonso" className="imgUserInfo" />
                <strong className="name">Eduardo P. Afonso</strong>
                <p className="title">Desenvolvedor front end</p>
                <button className="button-follow" >Seguir</button>
            </div>
            <div className="headerSection">
                <nav className="collection">
                    <b>42</b>
                    <p>Coleção</p>
                </nav>
                <nav>
                    <b>1,300</b>
                    <p>Seguidores</p>
                </nav>
                <nav>
                    <b>18k</b>
                    <p>Gostos</p>
                </nav>
            </div>
            <div className="body">
                <b>Coleção</b>
                <b>Equipe</b>
                <b>Trabalhos em progresso</b>
                <b>Blog</b>
                <b>Arquivos</b>
            </div>
        </div>
    )
}

export default UserInfo;