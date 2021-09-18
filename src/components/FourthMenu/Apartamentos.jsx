import React from 'react'
import apartamentos from '../../assets/apartamentos.jpg'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function Apartamentos() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={apartamentos} alt="Apartamentos" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu/villadicapri/projetosmodelo"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}