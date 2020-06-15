import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #9c2424;
`;

export const NotNetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #f4f4f4;
  border-radius: 10px;

  h1 {
    color: #333;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
