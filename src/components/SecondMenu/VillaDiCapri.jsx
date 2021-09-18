import React from 'react'
import villaDiCapri from '../../assets/villadicapri.png'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function VillaDiCapri() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={villaDiCapri} alt="Villa Di Capri" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}