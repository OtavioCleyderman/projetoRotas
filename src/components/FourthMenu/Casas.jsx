import React from 'react'
// import Casas from '../images/Casas.jpg'
import { Link } from "react-router-dom";

export default function Casas() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={Casas} alt="Casas " className="capitaimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu/villadicapri"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}