import React from 'react'
// import quintaDOeste from '../images/quintaDOeste.webp'
import { Link } from "react-router-dom";

export default function QuintaDOeste() {
    return (
        <div>
            <div className="imagem-container">
            {/* <img src={quintaDOeste} alt="quintaDOeste" className="fazimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}