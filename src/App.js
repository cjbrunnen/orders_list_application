import "./App.css";
import { Container } from "@material-ui/core";
import styled from "styled-components";

import OrderList from './components/OrderList'

const ContainerMd = styled(Container)`
  background-color: #DFFBF8;
  border: 1px solid grey;
  margin: 20px;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <ContainerMd maxWidth="sm">
        <h1>Teamleader Orders App</h1>
        <OrderList />
      </ContainerMd>
    </div>
  );
}

export default App;
