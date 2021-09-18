import React from 'react'
// import perplan from '../images/perplan.png'
import { Link } from "react-router-dom";

export default function Perplan() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={perplan} alt="perplan" className="perplanimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}