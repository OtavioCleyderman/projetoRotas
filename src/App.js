import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Menu from './components/Menu/index.jsx'
import SecondMenu from './components/SecondMenu'
import ThirdMenu from './components/ThirdMenu'
import FourthMenu from './components/FourthMenu'
import Parra from './components/FirstMenu/Parra'
import Projeto from './components/FirstMenu/Projeto'
import Pacaembu from './components/FirstMenu/Pacaembu'
import Perplan from './components/FirstMenu/Perplan'
import Mrv from './components/FirstMenu/Mrv'
import ParqueUniversitario from './components/SecondMenu/ParqueUniversitario'
import QuintaDOeste from './components/SecondMenu/QuintaDOeste'
import VillaDiCapri from './components/SecondMenu/VillaDiCapri'
import VittaResidencial from './components/SecondMenu/VittaResidencial'
import VivaReal from './components/SecondMenu/VivaReal'
import Corretores from './components/ThirdMenu/Corretores'
import Financiamento from './components/ThirdMenu/Financiamento'
import ProjetosModelo from './components/ThirdMenu/ProjetosModelo'
import Investimento from './components/ThirdMenu/Investimento'
import Casas from './components/FourthMenu/Casas'
import Apartamentos from './components/FourthMenu/Apartamentos'
import Lazer from './components/FourthMenu/Lazer'
import Ediculas from './components/FourthMenu/Ediculas'
import Sobrados from './components/FourthMenu/Sobrados'
import Home from './components/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
            <Home />
          </Route>
          <Route exact path="/parra">
            <Menu />
            <Parra />
          </Route>
          <Route exact path="/projeto">
            <Menu />
            <Projeto />
          </Route>
          <Route exact path="/pacaembu">
            <SecondMenu />
            <Pacaembu />
          </Route>
          <Route exact path="/perplan">
            <Menu />
            <Perplan />
          </Route>
          <Route exact path="/mrv">
            <Menu />
            <Mrv />
          </Route>
          <Route exact path="/pacaembu/parqueuniversitario">
            <SecondMenu />
            <ParqueUniversitario />
          </Route>
          <Route exact path="/pacaembu/quintadoeste">
            <SecondMenu />
            <QuintaDOeste />
          </Route>
          <Route exact path="/pacaembu/villadicapri">
            <ThirdMenu />
            <VillaDiCapri />
          </Route>
          <Route exact path="/pacaembu/vittaresidencial">
            <SecondMenu />
            <VittaResidencial />
          </Route>
          <Route exact path="/pacaembu/vivareal">
            <SecondMenu />
            <VivaReal />
          </Route>
          <Route exact path="/pacaembu/villadicapri/corretores">
            <ThirdMenu />
            <Corretores />
          </Route>
          <Route exact path="/pacaembu/villadicapri/financiamento">
            <ThirdMenu />
            <Financiamento />
          </Route>
          <Route exact path="/pacaembu/villadicapri/projetosmodelo">
            <FourthMenu />
            <ProjetosModelo />
          </Route>
          <Route exact path="/pacaembu/villadicapri/investimento">
            <ThirdMenu />
            <Investimento />
          </Route>
          <Route exact path="/pacaembu/villadicapri/projetosmodelo/casas">
            <FourthMenu />
            <Casas />
          </Route>
          <Route exact path="/pacaembu/villadicapri/projetosmodelo/apartamentos">
            <FourthMenu />
            <Apartamentos />
          </Route>
          <Route exact path="/pacaembu/villadicapri/projetosmodelo/lazer">
            <FourthMenu />
            <Lazer />
          </Route>
          <Route exact path="/pacaembu/villadicapri/projetosmodelo/ediculas">
            <FourthMenu />
            <Ediculas />
          </Route>
          <Route exact path="/pacaembu/villadicapri/projetosmodelo/sobrados">
            <FourthMenu />
            <Sobrados />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
