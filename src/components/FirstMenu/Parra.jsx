import React from 'react'
import parra from '../../assets/parra.jpg'
import { Link } from "react-router-dom";
import { Container, ContainerButton, ContainerImage } from './styles'

export default function Parra() {
    return (
        <Container >
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '35.0rem' }} src={parra} alt="parra" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/"> Voltar </Link>
            </ContainerButton>
        </Container>
    )

}