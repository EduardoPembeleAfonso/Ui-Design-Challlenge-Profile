import React, { useState, useEffect } from 'react';

import { SiGithub, SiFacebook, SiJavascript, SiHtml5, SiCss3, SiPhp, SiReact } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';

import '../styles/Body.css';

import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.webp'
import img4 from '../img/img4.jpg'
import img6 from '../img/img6.jpg'
import img5 from '../img/img5.jpg'
import imgPhoto from '../img/leao.jpeg'

const Body = () => {
    const [formatHours, setFormatHours] = useState('AM');
    
    const date = new Date();
    const hour = date.getHours();
    const hours = date.getHours() + " : " + date.getMinutes() ;

    useEffect(() => {
        if ( hour >= 10 ) {
            setFormatHours('PM');
        }
    }, [])

    return (
        <>
            <div className='body-container'>
                <div className='container-collections'>
                    <div className='collections'>
                        <strong>Coleções populares</strong>
                        <nav className='container-img'>
                            <img src={img1} alt="" className='img-collections'/>
                            <img src={img6} alt="" className='img-collections' />
                            <img src={img3} alt="" className='img-collections' />
                            <img src={img4} alt="" className='img-collections' />
                            <img src={img5} alt="" className='img-collections' />
                            <img src={img2} alt="" className='img-collections' />
                        </nav>
                    </div>
                    <div className='others-users'>
                        <strong className='name-other-user'>Edocha aparece nessa equipe</strong>
                        <div className='container-others-users'>
                            <nav className='photo-container'>
                                <img src={imgPhoto} alt="" className='photo' />
                                <strong className='members'>42 Membros</strong>
                            </nav>
                            <nav className='details'>
                                <h1>Royal Developers Force</h1>
                                <b className='formed'>Formado em 2020</b>
                                <button className='button-follow-other'>Seguir</button>
                                <p className='details-text'>Edocha é um membro desde nov 2021</p>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className='biography'>
                    <p>
                        Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação.
                        Lorem Ipsum tem sido o texto falso padrão da indústria desde 1500, quando uma impressora
                        desconhecida pegou uma galera do tipo e a embaralhou para fazer um livro de espécimes.
                    </p>
                    <nav className='container-website'>
                        <strong className='website'>Website</strong>
                        <b className='website-url'>https://tasklist-reactjs.web.app/</b>
                    </nav>
                    <div className='container-skills'>
                        <strong>Skills</strong>
                        <nav className='my-skills'>
                            <button className='react'><SiReact /> Reactjs</button>
                            <button className='html'><SiHtml5 /> Html</button>
                            <button className='css'><SiCss3 /> Css</button>
                            <button className='js'><SiJavascript/> Js</button>
                        </nav>
                    </div>
                    <form action="" className='form'>
                        <input type="text" className='message' placeholder='Envia me uma mensagem...' />
                        <nav className='button-form'>
                            <button type="submit" className='submit'><FiSend /></button>
                            <a href='https://github.com/EduardoPembeleAfonso' className='github'><SiGithub /></a>
                            <a href='https://www.facebook.com/eduardo.afonsohda' className='facebook'><SiFacebook /></a>
                            <h1>{ hours } { formatHours }</h1>
                        </nav>
                    </form>
                </div>



            </div>
        </>
    )
}

export default Body;