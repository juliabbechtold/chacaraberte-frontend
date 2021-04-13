import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .folha-detail {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 680px;

  @media (max-width: 1440px) {
    min-height: 560px;
  }

  @media (max-width: 750px) {
    min-height: unset;
    height: fit-content;
    padding: 100px 10px 140px 10px;
  }

  .visita {
    position: absolute;
    top: 55px;
    left: 15%;
    z-index: 8;
    font-size: 25px;
    line-height: 33px;
    color: #fff;
    font-family: "Brandon Grotesque";

    @media (max-width: 1440px) {
      font-size: 20px;
      line-height: 28px;
      left: 10%;
    }

    @media (max-width: 950px) {
      left: 20px;
      top: 20px;
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

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #806e56;
    opacity: 0.31;
    z-index: 1;
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

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
    position: relative;
    z-index: 2;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      @media (max-width: 1440px) {
        width: 180px;
      }

      @media (max-width: 750px) {
        width: 140px;
      }
    }

    h2 {
      color: #fff;
      text-align: center;
      margin-top: 35px;
      margin-bottom: 20px;

      span {
        color: #86e8e4;
      }
    }

    h3 {
      font-size: 30px;
      line-height: 40px;
      color: #fff;
      font-weight: 400;

      @media (max-width: 1440px) {
        font-size: 25px;
        line-height: 35px;
      }

      @media (max-width: 750px) {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`;

export const Sobre = styled.div`
  width: 70%;
  max-width: 1340px;
  position: relative;
  top: -50px;
  z-index: 2;
  display: flex;
  padding-top: 80px;
  margin-top: -80px;

  @media (max-width: 1440px) {
    width: 80%;
    padding-top: 60px;
    margin-top: -60px;
  }

  @media (max-width: 950px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding-top: 30px;
    margin-top: -30px;
  }

  > div {
    width: 50%;

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  .text {
    padding: 200px 70px 200px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    @media (max-width: 1440px) {
      padding: 160px 60px 160px 20px;
    }

    @media (max-width: 950px) {
      padding: 120px 60px 120px 20px;
    }

    @media (max-width: 750px) {
      padding: 60px 20px 100px 20px;
    }

    > div {
      max-width: 400px;
    }

    h3 {
      color: #a89478;
    }

    h2 {
      color: #86e8e4;
      margin-bottom: 10px;
    }

    a {
      margin-left: auto;
      margin-top: 40px;
    }
  }

  .arrow {
    left: calc(50% - 50px);
    top: calc(50% - 50px);

    @media (max-width: 1440px) {
      left: calc(50% - 40px);
      top: calc(50% - 40px);
    }

    @media (max-width: 750px) {
      left: calc(50% - 40px);
      top: unset;
      bottom: 310px;
    }
  }

  .carousel {
    @media (max-width: 750px) {
      height: 350px;
    }

    .ant-carousel,
    .slick-slider,
    .slick-list,
    .slick-track,
    .slick-slide {
      height: 100%;
      width: 100%;
    }

    .slick-slide {
      > div {
        height: 100%;
        width: 100%;
      }
    }

    .slick-dots-bottom {
      bottom: 160px;
      left: -84%;
      width: fit-content;
      margin: 0;

      @media (max-width: 1440px) {
        bottom: 110px;
        left: -86%;
      }

      @media (max-width: 950px) {
        bottom: 80px;
        left: -95%;
      }

      @media (max-width: 750px) {
        bottom: 400px;
        left: 22%;
      }

      @media (max-width: 480px) {
        left: 20px;
        width: fit-content;
      }
    }

    .slick-dots {
      .slick-active {
        background-color: #86e8e4;

        button {
          background-color: #86e8e4;
        }
      }

      li {
        width: 42px;
        height: 2.5px;
        background-color: #c1a177;
        opacity: 1;

        button {
          width: 42px;
          height: 2.5px;
          background-color: #c1a177;
          opacity: 1;
        }
      }
    }

    .slider {
      height: 100%;
      width: 100%;
      position: relative;

      > div {
        height: 100%;
        width: 100%;
        position: absolute !important;

        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          opacity: 0.86;
        }
      }
    }
  }
`;

export const Servicos = styled.div`
  margin: 260px 0 250px 0;
  padding: 150px 20px;
  position: relative;
  width: 70%;
  max-width: 1340px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    width: 80%;
    margin: 100px 0 150px 0;
    padding: 130px 20px;
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    margin: 0;
    padding: 30px 20px 100px 20px;
    margin-top: 20px;
  }

  .bg {
    position: absolute;
    width: 143%;
    height: fit-content;

    img {
      object-fit: contain;
      width: 100%;
    }
  }

  .arrow {
    @media (max-width: 750px) {
      bottom: 450px;
    }
  }

  .ant-carousel,
  .slick-slider,
  .slick-track,
  .slick-slide {
    height: fit-content;
    width: 100%;
  }

  .slick-dots-bottom {
    bottom: 90px;
    margin-left: 89%;

    @media (max-width: 750px) {
      bottom: 390px;
      margin-left: 58%;
    }

    @media (max-width: 480px) {
      margin-left: auto;
      margin-right: 20px;
      width: fit-content;
    }
  }

  .slick-dots {
    .slick-active {
      background-color: #86e8e4 !important;
      width: 42px !important;
      height: 2.5px;

      button {
        background-color: #86e8e4 !important;
      }
    }

    li {
      width: 42px;
      height: 2.5px;
      background-color: #c1a177;
      opacity: 1;

      button {
        width: 42px;
        height: 2.5px;
        background-color: #c1a177;
        opacity: 1;
      }
    }
  }

  .slider {
    background-color: #fff;
    display: flex !important;
    justify-content: flex-end;
    width: 100%;
    position: relative;

    @media (max-width: 750px) {
      flex-direction: column-reverse;
    }

    > div {
      width: 50%;

      @media (max-width: 750px) {
        width: 100%;
      }
    }

    .text {
      padding: 160px 20px 160px 70px;
      display: flex;
      justify-content: center;

      @media (max-width: 1440px) {
        padding: 120px 20px 120px 60px;
      }

      @media (max-width: 750px) {
        padding: 60px 20px 100px 20px;
      }

      > div {
        max-width: 400px;
      }

      h3 {
        color: #a89478;
      }

      h2 {
        color: #86e8e4;
        margin-bottom: 10px;
      }

      h2,
      h3,
      p {
        text-align: end;
      }
    }

    .img {
      height: 100%;
      position: absolute;
      left: 1px;
      top: 0;

      @media (max-width: 750px) {
        position: relative;
        height: 350px;
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
`;

export const Eventos = styled.div`
  position: relative;
  width: calc(70% + 145px);
  max-width: 1340px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 300px;
  padding-top: 50px;
  margin-top: -50px;

  @media (max-width: 1440px) {
    width: 80%;
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    padding-top: 30px;
    margin-top: -30px;
    margin-bottom: 100px;
  }

  .title {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50px;
    left: 20px;

    @media (max-width: 1150px) {
      position: relative;
      align-self: flex-start;
      left: unset;
      top: unset;
    }

    h3 {
      color: #a89478;
      margin: 0;
    }

    h2 {
      margin: 0;
      color: #86e8e4;
      position: relative;
      top: -15px;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-right: 145px;

    @media (max-width: 1440px) {
      margin-right: 50px;
    }

    @media (max-width: 1150px) {
      flex-direction: row;
      margin-right: unset;
    }

    @media (max-width: 750px) {
      margin-bottom: 50px;
    }

    @media (max-width: 456px) {
      margin-bottom: 10px;
    }

    button {
      position: relative;
    }

    button:last-child {
      margin-top: 10px;

      @media (max-width: 1150px) {
        margin-left: 10px;
        margin-top: 0px;
      }
    }
  }

  .ant-carousel,
  .slick-slider,
  .slick-track,
  .slick-slide {
    width: 100%;
    height: fit-content;
  }

  .slick-dots-bottom {
    bottom: 200px;
    left: 5%;
    width: fit-content;
    margin: 0;

    @media (max-width: 1440px) {
      bottom: 150px;
    }

    @media (max-width: 1150px) {
      bottom: 565px;
      left: 27%;
    }

    @media (max-width: 750px) {
      left: 22%;
    }

    @media (max-width: 480px) {
      left: 20px;
    }
  }

  .slick-dots {
    .slick-active {
      background-color: #86e8e4 !important;
      width: 42px !important;
      height: 2.5px;

      button {
        background-color: #86e8e4 !important;
      }
    }

    li {
      width: 42px;
      height: 2.5px;
      background-color: #c1a177;
      opacity: 1;

      button {
        width: 42px;
        height: 2.5px;
        background-color: #c1a177;
        opacity: 1;
      }
    }
  }

  .slider {
    padding-top: 160px;
    padding-right: 145px;
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    position: relative;

    @media (max-width: 1440px) {
      padding-right: 100px;
    }

    @media (max-width: 1150px) {
      flex-direction: column;
      padding-right: 0px;
    }

    > div {
      width: 50%;

      @media (max-width: 1150px) {
        width: 100%;
      }
    }

    .text {
      padding: 270px 70px 280px 20px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1440px) {
        width: 52%;
        padding: 220px 60px 220px 20px;
      }

      @media (max-width: 1150px) {
        width: 100%;
        position: relative;
        top: -160px;
        padding: 60px 20px 100px 20px;
      }

      > div {
        max-width: 400px;
      }

      h4 {
        font-size: 60px;
        line-height: 80px;
        font-weight: bold;
        color: #76654e;
        margin-bottom: 10px;

        @media (max-width: 1440px) {
          font-size: 50px;
          line-height: 70px;
        }

        @media (max-width: 750px) {
          font-size: 40px;
          line-height: 60px;
        }
      }

      a {
        margin-left: auto;
        margin-top: 20px;
      }
    }

    .img {
      position: absolute;
      right: 145px;
      top: -160px;
      height: 100%;
      width: calc(50% - 73px);

      @media (max-width: 1440px) {
        right: 100px;
      }

      @media (max-width: 1150px) {
        width: 100%;
        height: 350px;
        position: relative;
        right: unset;
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
    .secimg {
      width: 460px;
      height: 430px;
      position: absolute;
      bottom: 0;
      right: 0;

      @media (max-width: 1440px) {
        width: 360px;
        height: 330px;
      }

      @media (max-width: 1150px) {
        width: 300px;
        height: 270px;
      }

      @media (max-width: 450px) {
        width: 280px;
        height: 250px;
        right: -10px;
      }

      @media (max-width: 360px) {
        width: 250px;
        height: 220px;
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
`;
