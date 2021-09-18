import React from 'react'
// import sobrado from '../images/sobrado.jpg'
import { Link } from "react-router-dom";

export default function Sobrado() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={sobrado} alt="sobrado " className="capitaimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu/villadicapri"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}