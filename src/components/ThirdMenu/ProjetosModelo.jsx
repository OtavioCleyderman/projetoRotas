import React from 'react'
// import projetosModelo from '../images/projetosModelo.webp'
import { Link } from "react-router-dom";

export default function ProjetosModelo() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={projetosModelo} alt="projetosModelo" className="balancimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}