import React from 'react'
// import Lazer from '../images/Lazer.jpg'
import { Link } from "react-router-dom";

export default function Lazer() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={Lazer} alt="Lazer " className="capitaimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu/villadicapri"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}