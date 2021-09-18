import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Ul, Li } from './styles'

export default function SecondMenu() {
  return (
    <Container >
      <Nav >
        <Ul>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/"> Home </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/parqueuniversitario" > Parque Universirario </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/villadicapri" > Villa Di Capri </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/vittaresidencial" > Vitta Residencial </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/quintadoeste" > Quinta D' Oeste </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/pacaembu/vivareal" > Viva Real </Link> </Li>
        </Ul>
      </Nav>
    </Container>
  )
}