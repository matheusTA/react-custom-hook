import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #222;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 100px;
  width: 100%;
  min-height: 60px;
  background: #333;

  h1 {
    color: #f4f4f4;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
