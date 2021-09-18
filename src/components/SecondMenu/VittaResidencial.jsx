import React from 'react'
// import vittaResidencial from '../images/vittaResidencial.webp'
import { Link } from "react-router-dom";

export default function VittaResidencial() {
    return (
        <div>
            <div className="imagem-container">
            {/* <img src={vittaResidencial} alt="vittaResidencial" className="fazimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}