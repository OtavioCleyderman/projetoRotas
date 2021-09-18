import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Ul, Li } from './styles'

export default function FourthMenu() {
  return (
    <Container >
      <Nav >
        <Ul>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/"> Home </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/projetosmodelo/casas" > Casas </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/projetosmodelo/apartamentos"> Apartamentos </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/projetosmodelo/lazer" > Lazer </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/projetosmodelo/ediculas" > Ediculas </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/projetosmodelo/sobrados" > Sobrados  </Link> </Li>
        </Ul>
      </Nav>
    </Container>
  )
}