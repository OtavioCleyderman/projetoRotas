import React from 'react';
import empreentimento from '../../assets/empreendimentoimobiliario.jpg'
import { Container, Img } from './styles';

function Home() {
  return (
    <Container>
      <Img src={empreentimento} alt="Empreendimento imobiliário" />
    </Container>
  );
}

export default Home;