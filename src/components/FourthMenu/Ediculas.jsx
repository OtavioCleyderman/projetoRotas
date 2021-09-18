import React from 'react'
// import Ediculas from '../images/Ediculas.jpg'
import { Link } from "react-router-dom";

export default function Ediculas() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={Ediculas} alt="Ediculas " className="capitaimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu/villadicapri"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}