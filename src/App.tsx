import { useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
     <Home />
    </>
  )
}

export default App
