import React, { Component } from 'react';

import { Formik } from 'formik'
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    color: red;
`;

const TitleWrapper = styled.div`
    // display: flex;
    // justify-content: center;
    padding: 20px;
    background: papayawhip;
`;

class App extends Component {
  render() {
    return (
        <TitleWrapper>
            <Title> Just a simple login app </Title>
        </TitleWrapper>
    );
  }
}

export default App;
