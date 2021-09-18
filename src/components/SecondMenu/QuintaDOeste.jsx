import React from 'react'
import quintaDOeste from '../../assets/quintadoeste.jpg'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function QuintaDOeste() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={quintaDOeste} alt="Quinta D' Oeste" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}