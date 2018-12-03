import React, { Component } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SvgIcon from "@material-ui/core/SvgIcon";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";

const Theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

const Title = styled.h1`
  text-align: center;
  color: red;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: papayawhip;
  height: 100vh;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 50vw;
`;
const FormTickAdornment = () => {
  return (
    <InputAdornment position="start">
      <SvgIcon fontSize="small" color="primary">
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </SvgIcon>
    </InputAdornment>
  );
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Wrapper>
          <Title> Just a simple login app </Title>
          <TextField
            id="username"
            type="email"
            label="name"
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <FormTickAdornment />
            }}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <FormTickAdornment />
            }}
          />
          <RowWrapper>
            <Button variant="contained">SignIn</Button>
            <Button variant="contained">SignUp</Button>
          </RowWrapper>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
