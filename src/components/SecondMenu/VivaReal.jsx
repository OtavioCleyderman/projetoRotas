import React from 'react'
import vivaReal from '../../assets/vivareal.png'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function VivaReal() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={vivaReal} alt="Viva Real" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}