import React from 'react'
// import corretores from '../images/corretores.webp'
import { Link } from "react-router-dom";

export default function Corretores() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={corretores} alt="corretores " className="balancimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}