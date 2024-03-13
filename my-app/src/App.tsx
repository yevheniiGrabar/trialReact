import React from 'react';
import styled from 'styled-components';
import HomePage from './HomePage';

const HeaderContainer = styled.div`
  width: 730px;
  height: 110px;
  margin: 20px auto;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-size: 56px;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const HeaderText = styled.div`
  color: #000; /* Цвет текста */
`;

const App: React.FC = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderText>We make creative media that adds value</HeaderText>
      </HeaderContainer>
      <HomePage />
    </div>
  );
};

export default App;