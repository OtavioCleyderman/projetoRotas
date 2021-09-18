import React from 'react'
import projetosModelo from '../../assets/projetosmodelo.jpg'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function ProjetosModelo() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={projetosModelo} alt="Projetos Modelo" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu/villadicapri"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}