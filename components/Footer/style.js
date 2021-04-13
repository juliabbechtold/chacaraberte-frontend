import styled, { keyframes } from "styled-components";

const heartBeat = keyframes`
    0%, 100%, 40%, 60% {
        transform: scale(1);
    }
    20%, 80% {
        transform: scale(1.3);
    }
`;

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background-color: #fff;

  @media (max-width: 550px) {
    padding: 30px 20px;
  }

  a {
    font-size: 14px;
    color: #483d2f;
    text-decoration: none;
    margin: 0;
    font-family: "Futura";
    text-align: center;
    position: relative;
    z-index: 1;
  }

  svg {
    margin: 0 8px;
    height: 15px;
    width: auto;
    position: relative;

    animation-name: ${heartBeat};
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }
`;
