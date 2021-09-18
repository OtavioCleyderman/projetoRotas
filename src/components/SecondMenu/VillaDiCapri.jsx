import React from 'react'
// import villaDiCapri from '../images/villaDiCapri.webp'
import { Link } from "react-router-dom";

export default function VillaDiCapri() {
    return (
        <div>
            <div className="imagem-container">
            {/* <img src={villaDiCapri} alt="villaDiCapri" className="fazimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}