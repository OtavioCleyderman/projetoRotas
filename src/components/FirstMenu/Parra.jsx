import React from 'react'
// import parra from '../images/parra.png'
import { Link } from "react-router-dom";

export default function Parra() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={parra} alt="parra" className="parraimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}