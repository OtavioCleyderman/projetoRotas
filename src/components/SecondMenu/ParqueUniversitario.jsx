import React from 'react'
// import parqueUniversitario from '../images/parqueUniversitario.webp'
import { Link } from "react-router-dom";

export default function ParqueUniversitario() {
    return (
        <div>
            <div className="imagem-container">
            {/* <img src={parqueUniversitario} alt="parqueUniversitario" className="fazimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}