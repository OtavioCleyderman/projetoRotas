import React from 'react'
// import Apartamentos from '../images/Apartamentos.jpg'
import { Link } from "react-router-dom";

export default function Apartamentos() {
    return (
        <div className="body">
            <div className="imagem-container">
            {/* <img src={Apartamentos} alt="Apartamentos " className="capitaimg"></img> */}
            </div>
            <div className="inicio">
            <Link to = "/pacaembu/villadicapri"> Voltar </Link>
            <Link to = "/"> Menu principal </Link>
            </div>
        </div>
    )

}