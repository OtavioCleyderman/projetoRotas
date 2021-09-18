import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Ul, Li } from './styles'

export default function ThirdMenu() {
  return (
    <Container>
      <Nav >
        <Ul>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/" > Home </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/corretores" > Corretores </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/financiamento" > Financiamento </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/projetosmodelo" > Projetos Modelo </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri/investimento" > Investimento </Link> </Li>
        </Ul>
      </Nav>
    </Container>
  )
}