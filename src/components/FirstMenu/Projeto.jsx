import React from 'react'
import projeto from '../../assets/projeto.png'
import { Link } from "react-router-dom";
import { Container, ContainerButton, ContainerImage } from './styles'

export default function Projeto() {
    return (
        <Container>
            <ContainerImage>
                <img style={{ width: '70.0rem', height: '25.0rem' }} src={projeto} alt="projeto" ></img>
            </ContainerImage>
            <ContainerButton>
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/"> Voltar </Link>
            </ContainerButton>
        </Container>
    )

}