import React from "react";

import { Container, Header } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>React Custom Hooks</h1>
        <span role="img" aria-label="emojis">
          🌐📳📡
        </span>
      </Header>
    </Container>
  );
};

export default Home;
