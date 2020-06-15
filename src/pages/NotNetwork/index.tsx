import React from "react";

import { Container, NotNetworkContainer } from "./styles";

const NotNetwork: React.FC = () => {
  return (
    <Container>
      <NotNetworkContainer>
        <h1>Você está sem internet</h1>

        <span role="img" aria-label="emojis">
          🌐📴📡
        </span>
      </NotNetworkContainer>
    </Container>
  );
};

export default NotNetwork;
