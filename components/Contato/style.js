import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;

  .banner {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 18%;

    @media (max-width: 1440px) {
      padding: 0 10%;
      height: 520px;
    }

    @media (max-width: 750px) {
      height: 380px;
    }

    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;

      .pelicula {
        position: absolute;
        background-color: #391f09;
        opacity: 0.15;
        top: 0;
        left: 0;
        z-index: 1;
      }

      > div {
        width: 100%;
        height: 100%;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          opacity: 0.66;
        }
      }
    }

    h2 {
      opacity: 1;
      position: relative;
      z-index: 1;
      color: #fff;
      max-width: 426px;
      line-height: 90px;
      margin-bottom: 20px;

      @media (max-width: 1440px) {
        line-height: 70px;
      }

      @media (max-width: 750px) {
        line-height: 55px;
      }
    }

    a {
      font-size: 25px;
      line-height: 33px;
      color: #fff;
      font-family: "Brandon Grotesque";
      position: relative;
      width: fit-content;

      @media (max-width: 1440px) {
        font-size: 20px;
        line-height: 28px;
      }

      @media (max-width: 750px) {
        font-size: 16px;
        line-height: 24px;
      }

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
  }

  .localizacao {
    padding: 0px 20px;
    width: 70%;
    max-width: 1340px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 150px auto 0 auto;

    @media (max-width: 1610px) {
      width: 80%;
    }

    @media (max-width: 1440px) {
      width: 90%;
    }

    @media (max-width: 1050px) {
      width: 100%;
    }

    @media (max-width: 800px) {
      flex-direction: column-reverse;
      margin: 25px auto 0 auto;
      padding-top: 75px;
    }

    > div {
      width: 50%;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

    .left-content {
      display: flex;
      flex-direction: column;
      position: relative;
      height: fit-content;

      @media (max-width: 800px) {
        top: -85px;
        padding-right: 20px;
      }

      @media (max-width: 590px) {
        padding: 0 20px;
      }

      @media (max-width: 450px) {
        padding: 0;
      }

      .img1 {
        width: 280px;
        height: 280px;
        position: relative;
        z-index: 2;
        margin-left: 30px;

        @media (max-width: 1440px) {
          width: 200px;
          height: 200px;
        }

        @media (max-width: 590px) {
          margin-left: 0;
        }

        @media (max-width: 450px) {
          left: -10px;
        }

        > div {
          width: 100%;
          height: 100%;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }

      .content {
        padding: 50px 60px 50px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-left: 90px;

        @media (max-width: 9250px) {
          margin-left: 40px;
        }

        @media (max-width: 800px) {
          margin-left: 90px;
        }

        @media (max-width: 590px) {
          margin-left: 20px;
        }

        @media (max-width: 535px) {
          padding: 50px 20px 80px 20px;
        }

        @media (max-width: 450px) {
          margin-left: 0px;
        }

        .bg {
          position: absolute;
          width: 100%;
          height: 170%;
          background-color: #fff;
          left: 0;
          z-index: 0;
        }

        h4 {
          font-family: "Playfair Display";
          font-size: 60px;
          line-height: 80px;
          font-weight: bold;
          color: #76654e;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;

          @media (max-width: 1440px) {
            font-size: 40px;
            line-height: 60px;
            min-width: 365px;
          }

          @media (max-width: 1230px) {
            min-width: unset;
            width: 100%;
          }

          @media (max-width: 800px) {
            min-width: 365px;
            width: unset;
          }

          @media (max-width: 750px) {
            font-size: 35px;
            line-height: 55px;
          }

          @media (max-width: 535px) {
            min-width: unset;
            width: 100%;
          }
        }

        p {
          max-width: 365px;
          position: relative;
          z-index: 1;
        }
      }

      .img2 {
        width: 375px;
        height: 375px;
        position: relative;
        z-index: 2;

        @media (max-width: 1440px) {
          width: 295px;
          height: 295px;
        }

        @media (max-width: 590px) {
          left: -20px;
        }

        @media (max-width: 450px) {
          left: -10px;
        }

        > div {
          width: 100%;
          height: 100%;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }

      .img3 {
        position: absolute;
        width: 215px;
        height: 215px;
        z-index: 2;
        bottom: 185px;
        right: -45px;

        @media (max-width: 1440px) {
          width: 180px;
          height: 180px;
          bottom: 150px;
        }

        @media (max-width: 800px) {
          right: 0;
        }

        @media (max-width: 535px) {
          bottom: 180px;
        }

        @media (max-width: 450px) {
          right: -10px;
          bottom: 160px;
        }

        > div {
          width: 100%;
          height: 100%;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .right-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h3 {
        color: #a89478;
        margin: 0;
      }

      h2 {
        color: #86e8e4;
        position: relative;
        top: -10px;
        margin: 0;
      }

      .mapa {
        width: 100%;
        height: 620px;
        position: relative;
        z-index: 1;

        @media (max-width: 1440px) {
          height: 540px;
        }

        @media (max-width: 750px) {
          height: 450px;
        }
      }
    }
  }

  .infos {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 250px auto 100px auto;
    position: relative;
    z-index: 1;

    @media (max-width: 1440px) {
      width: 80%;
      margin: 180px auto 100px auto;
    }

    @media (max-width: 1250px) {
      width: 100%;
      padding: 0 20px;
    }

    @media (max-width: 800px) {
      margin: 40px auto 80px auto;
    }

    @media (max-width: 550px) {
      flex-direction: column;
      align-items: center;
    }

    .logo {
      @media (max-width: 1440px) {
        width: 160px;
      }

      @media (max-width: 750px) {
        width: 120px;
      }

      @media (max-width: 550px) {
        margin-bottom: 50px;
      }
    }

    > div {
      display: grid;
      grid-gap: 70px;
      justify-content: center;
      grid-template-columns: repeat(3, 23.5%) 95px;
      width: calc(100% - 275px);

      @media (max-width: 1440px) {
        grid-template-columns: repeat(3, 18%) 85px;
        width: calc(100% - 230px);
      }

      @media (max-width: 1250px) {
        width: calc(100% - 210px);
        grid-gap: 50px;
        grid-template-columns: repeat(3, 23%) 85px;
      }

      @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 45%);
      }

      @media (max-width: 750px) {
        width: calc(100% - 170px);
      }

      @media (max-width: 550px) {
        width: 100%;
        grid-template-columns: repeat(2, 40%);
      }

      @media (max-width: 350px) {
        grid-template-columns: 100%;
      }

      div:last-child {
        display: flex;
        border-bottom: none;
        flex-direction: row;

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

      @media (max-width: 750px) {
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

      @media (max-width: 750px) {
        font-size: 16px;
        line-height: 22px;
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

  .footer-folha {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;

    @media (max-width: 1440px) {
      max-width: 600px;
    }
  }
`;
