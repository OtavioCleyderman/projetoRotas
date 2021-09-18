import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Ul, Li } from './styles'


export default function Menu() {
  return (
    <Container>
      <Nav>
        <Ul>
          <Li> <Link className="link" style={{ textDecoration: 'none', color: 'green', fontWeight: 'bold' }} to="/parra" > Parra </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'pink', fontWeight: 'bold' }} to="/projeto" > Projeto </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'Lightskyblue', fontWeight: 'bold' }} to="/pacaembu" > Pacaembu </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'yellow', fontWeight: 'bold' }} to="/perplan" > Perplan </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/mrv" > MRV </Link> </Li>
        </Ul>
      </Nav>

    </Container >
  )
}