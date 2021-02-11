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
  justify-content: space-evenly;
  padding: 20px;

  p,
  a {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    margin: 0;
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
