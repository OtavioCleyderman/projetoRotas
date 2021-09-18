import React from 'react'
import lazer from '../../assets/lazer.png'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function Lazer() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={lazer} alt="Lazer" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu/villadicapri/projetosmodelo"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}