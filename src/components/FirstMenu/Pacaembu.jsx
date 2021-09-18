import React from 'react'
import pacaembu from '../../assets/pacaembu.jpg'
import { Link } from "react-router-dom";
import { Container, ContainerButton, ContainerImage } from './styles'


export default function Pacaembu() {
    return (
        <Container className="body">
            <ContainerImage className="imagem-container">
                <img style={{ width: '70.0rem', height: '25.0rem' }} src={pacaembu} alt="pacaembu" className="pacaembuimg"></img>
            </ContainerImage>
            <ContainerButton className="inicio">
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/"> Voltar </Link>
            </ContainerButton>
        </Container>
    )

}