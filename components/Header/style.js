import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  position: absolute;
  z-index: 10;
  margin-top: 50px;
  right: 15%;

  @media (max-width: 1440px) {
    right: 10%;
  }

  @media (max-width: 950px) {
    right: 20px;
    margin-top: 20px;
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

      @media (max-width: 500px) {
        display: none;
      }

      p {
        font-size: 25px;
        line-height: 25px;
        color: #fff;
        font-family: "Brandon Grotesque";
        margin-left: 15px;
        position: relative;

        @media (max-width: 1440px) {
          font-size: 20px;
          line-height: 20px;
        }

        @media (max-width: 750px) {
          font-size: 16px;
          line-height: 16px;
        }

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
      transition: all ease 0.5s;

      @media (max-width: 500px) {
        top: 3px;
        position: fixed;
        top: 20px;
        right: 20px;
      }

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
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all ease 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: 60px;

  @media (max-width: 750px) {
    padding-bottom: 100px;
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;

    > div {
      height: 100%;
      width: 100%;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }

  .logo {
    align-self: flex-start;
    margin-left: 85px;
    margin-top: 85px;
    margin-bottom: 20px;

    @media (max-width: 1440px) {
      margin-left: 65px;
      margin-top: 65px;
      width: 160px;
    }

    @media (max-width: 950px) {
      margin-left: 20px;
      margin-top: 20px;
      width: 120px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1185px;
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: 1440px) {
      max-width: 900px;
    }

    @media (max-width: 950px) {
      padding: 0 20px;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      align-items: flex-start;
    }

    nav {
      @media (max-width: 750px) {
        width: 100%;
      }

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
          margin: 20px 0;

          @media (max-width: 1440px) {
            margin: 15px 0;
          }

          @media (max-width: 850px) {
            margin: 10px 0;
          }

          a,
          button {
            font-size: 60px;
            line-height: 80px;
            font-weight: 300;
            color: #5c4534;
            font-family: "Brandon Grotesque";
            display: flex;
            position: relative;
            width: fit-content;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            margin: 0;

            @media (max-width: 1440px) {
              font-size: 45px;
              line-height: 65px;
            }

            @media (max-width: 850px) {
              font-size: 35px;
              line-height: 55px;
            }

            @media (max-width: 430px) {
              font-size: 30px;
              line-height: 50px;
            }

            @media (max-width: 380px) {
              font-size: 24px;
              line-height: 44px;
            }

            p {
              font-size: 60px;
              line-height: 80px;
              font-weight: 400;
              color: #5c4534;
              margin-left: 40px;
              padding-left: 40px;
              border-left: 2px solid #5c4534;

              @media (max-width: 1440px) {
                font-size: 45px;
                line-height: 65px;
              }

              @media (max-width: 850px) {
                font-size: 35px;
                line-height: 55px;
              }

              @media (max-width: 430px) {
                font-size: 30px;
                line-height: 50px;
                margin-left: 30px;
                padding-left: 30px;
              }

              @media (max-width: 380px) {
                font-size: 24px;
                line-height: 44px;
              }
            }

            ::after {
              content: "";
              position: absolute;
              width: 120px;
              height: 10px;
              background-color: #86e8e4;
              bottom: -10px;
              right: -35px;
              opacity: 0;
              transition: all ease 0.5s;
            }

            :hover::after {
              opacity: 1;
            }
          }
        }
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      max-width: 320px;

      @media (max-width: 1440px) {
        max-width: 290px;
      }

      @media (max-width: 750px) {
        margin-top: 20px;
        align-self: center;
        align-items: center;
      }

      div:last-child {
        border-bottom: none;
        flex-direction: row;

        @media (max-width: 750px) {
          justify-content: center;
        }

        a > svg {
          height: 40px;
          margin-right: 20px;
          transition: all ease 0.5s;

          @media (max-width: 1440px) {
            height: 35px;
          }
        }

        a:last-child {
          svg {
            @media (max-width: 750px) {
              margin-right: 0;
            }
          }
        }
      }

      > div {
        padding: 20px 0;
        border-bottom: 1px solid #574732;
        display: flex;
        flex-direction: column;

        @media (max-width: 750px) {
          width: 100%;
          align-items: center;
        }

        label {
          font-size: 25px;
          line-height: 33px;
          color: #6c5c47;
          font-weight: 500;
          margin-bottom: 15px;
          display: flex;

          @media (max-width: 1440px) {
            font-size: 22px;
            line-height: 30px;
          }

          @media (max-width: 850px) {
            font-size: 20px;
            line-height: 28px;
            margin-bottom: 10px;
          }
        }

        a:hover {
          color: #77a597;
        }

        a,
        p {
          font-size: 24px;
          line-height: 30px;
          color: #6c5c47;
          font-weight: 300;
          display: flex;
          transition: all ease 0.5s;
          font-family: "Futura";

          @media (max-width: 1440px) {
            font-size: 20px;
            line-height: 26px;
          }

          @media (max-width: 850px) {
            font-size: 16px;
            line-height: 22px;
          }

          @media (max-width: 750px) {
            text-align: center;
          }

          svg {
            height: 25px;
            width: auto;
            margin-right: 10px;

            @media (max-width: 1440px) {
              height: 20px;
            }
          }
        }
      }
    }
  }
`;
