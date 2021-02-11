import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: center;

  nav {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;

      li {
        margin: 0 15px;
      }
    }
  }

  .hamburger {
    display: none;
  }
`;
