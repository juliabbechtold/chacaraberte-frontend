import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  position: absolute;
  z-index: 10;
  margin-top: 50px;
  left: 15%;

  a {
    font-size: 25px;
    line-height: 33px;
    color: #fff;
    font-family: "Brandon Grotesque";
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: 60%;
      bottom: -8px;
      right: -5px;
      background-color: #fff;
      height: 4px;
      transition: all ease 0.5s;
    }

    :hover::after {
      width: calc(100% + 10px);
    }
  }

  > div {
    display: flex;
    align-items: center;

    .sound {
      background-color: transparent;
      border: none;
      display: ${(props) => (props.isOpen ? "none" : "flex")};
      align-items: center;
      cursor: pointer;
      margin-right: 15px;

      p {
        font-size: 25px;
        line-height: 25px;
        color: #fff;
        font-family: "Brandon Grotesque";
        margin-left: 15px;
        position: relative;

        ::after {
          content: "";
          position: absolute;
          bottom: -11px;
          left: 0;
          width: 70%;
          height: 4px;
          background-color: #fff;
          transition: all ease 0.5s;
        }
      }

      :hover {
        p:after {
          width: 100%;
        }
      }
    }

    .hamburger {
      padding: 0;
      position: relative;
      top: 6px;

      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: ${(props) => (props.isOpen ? "#5C4534" : "#fff")};
      }
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.isOpen ? "9" : "-1")};
  transition: all ease 0.5s;
`;
