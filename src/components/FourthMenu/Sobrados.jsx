import React from 'react'
import sobrados from '../../assets/sobrados.jpg'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function Sobrado() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={sobrados} alt="Sobrados" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu/villadicapri/projetosmodelo"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}