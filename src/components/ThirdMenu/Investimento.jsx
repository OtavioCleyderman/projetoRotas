import React from 'react'
// import investimento from '../images/investimento.webp'
import { Link } from "react-router-dom";

export default function Investimento() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={investimento} alt="investimento" className="balancimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}