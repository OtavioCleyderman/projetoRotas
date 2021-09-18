import React from 'react'
// import projeto from '../images/projeto.png'
import { Link } from "react-router-dom";

export default function Projeto() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={projeto} alt="projeto" className="projetoimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}