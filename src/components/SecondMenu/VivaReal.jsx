import React from 'react'
// import vivaReal from '../images/vivaReal.webp'
import { Link } from "react-router-dom";

export default function VivaReal() {
    return (
        <div>
            <div className="imagem-container">
            {/* <img src={vivaReal} alt="vivaReal" className="fazimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}