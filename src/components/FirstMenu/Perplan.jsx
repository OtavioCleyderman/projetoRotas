import React from 'react'
import perplan from '../../assets/perplan.png'
import { Link } from "react-router-dom";
import { Container, ContainerButton, ContainerImage } from './styles'

export default function Perplan() {
    return (
        <Container >
            <ContainerImage >
                <img style={{ width: '70.0rem', height: '25.0rem' }} src={perplan} alt="perplan" ></img>
            </ContainerImage>
            <ContainerButton className="inicio">
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/"> Voltar </Link>
            </ContainerButton>
        </Container>
    )

}