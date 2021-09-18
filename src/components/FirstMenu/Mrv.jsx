import React from 'react'
import mrv from '../../assets/mrv.jpg'
import { Link } from "react-router-dom";
import { Container, ContainerButton, ContainerImage } from './styles'

export default function Mrv() {
    return (
        <Container >
            <ContainerImage >
                <img style={{ width: '70.0rem', height: '25.0rem' }} src={mrv} alt="mrv" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/"> Voltar </Link>
            </ContainerButton>
        </Container>
    )

}