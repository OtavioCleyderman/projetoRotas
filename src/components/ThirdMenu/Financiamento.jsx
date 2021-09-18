import React from 'react'
// import financiamento from '../images/financiamento.webp'
import { Link } from "react-router-dom";

export default function Financiamento() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={financiamento} alt="financiamento " className="balancimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}