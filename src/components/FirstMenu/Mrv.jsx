import React from 'react'
// import mrv from '../images/mrv.png'
import { Link } from "react-router-dom";

export default function Mrv() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={mrv} alt="mrv" className="mrvimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}