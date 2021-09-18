import React from 'react'
import parqueUniversitario from '../../assets/parqueUniversitario.jpg'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'


export default function ParqueUniversitario() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '35.0rem' }} src={parqueUniversitario} alt="parqueUniversitario" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}