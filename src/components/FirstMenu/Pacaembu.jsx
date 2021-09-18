import React from 'react'
// import pacaembu from '../images/pacaembu.png'
import { Link } from "react-router-dom";

export default function Pacaembu() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={pacaembu} alt="pacaembu" className="pacaembuimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}