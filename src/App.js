import React from 'react';
import styled from '@emotion/styled';
import Cotizador from './components/Cotizador';
const imagen = require('./assets/img/cryptomonedas.png');

const Container = styled.div`
	margin: 0 auto;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const App = () => {
	return (<Container>
    <figure>
      <img src={imagen} alt=""/>
    </figure>
    <Cotizador/>
  </Container>);
};

export default App;
