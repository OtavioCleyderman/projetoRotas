import React from 'react'
import vittaResidencial from '../../assets/vittaresidencial.jpg'
import { Link } from "react-router-dom";
import { Content, ContainerButton, ContainerImage } from './styles'

export default function VittaResidencial() {
    return (
        <Content>
            <ContainerImage >
                <img style={{ width: '40.0rem', height: '30.0rem' }} src={vittaResidencial} alt="Vitta Residencial" ></img>
            </ContainerImage>
            <ContainerButton >
                <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.4rem' }} to="/pacaembu"> Voltar </Link>
            </ContainerButton>
        </Content>
    )

}