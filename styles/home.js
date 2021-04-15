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
    padding: 0;
    margin: 0;

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
  width: 70%;
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
    margin-bottom: 250px;
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

    @media (max-width: 750px) {
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

    @media (max-width: 750px) {
      flex-direction: row;
      bottom: 310px;
    }

    button {
      position: relative;
    }

    button:last-child {
      margin-top: 10px;

      @media (max-width: 750px) {
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
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    position: relative;

    @media (max-width: 750px) {
      flex-direction: column;
      padding-top: 0;
    }

    > div {
      width: 50%;

      @media (max-width: 750px) {
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
        padding: 220px 60px 220px 20px;
      }

      @media (max-width: 750px) {
        position: relative;
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
      top: -160px;
      height: 100%;
      right: 0;

      @media (max-width: 750px) {
        height: 350px;
        position: relative;
        right: unset;
        top: unset;
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

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  position: fixed;
  z-index: -1;
  opacity: 0;
  top: 0;
  left: 0;
  transition: all ease 0.5s;

  form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-self: center;
    justify-content: center;
    position: relative;
    padding: 120px 20px 210px 20px;

    @media (max-width: 1440px) {
      padding: 100px 20px 180px 20px;
    }

    @media (max-width: 750px) {
      padding: 60px 20px 120px 20px;
    }

    .bg {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    .close {
      position: absolute;
      right: 18%;
      top: 170px;
      border: none;
      background-color: transparent;
      padding: 0;
      cursor: pointer;

      @media (max-width: 1440px) {
        right: 14%;
        top: 150px;
      }

      @media (max-width: 1000px) {
        right: 6%;
      }

      @media (max-width: 750px) {
        right: 20px;
        top: 20px;
      }

      svg {
        height: 50px;
        width: auto;
        fill: #5c4534;

        @media (max-width: 750px) {
          height: 40px;
        }
      }
    }

    .content {
      max-width: 765px;
      width: 100%;

      h2 {
        color: #86e8e4;
        line-height: 92px;
        text-align: center;
        position: relative;
        max-width: 496px;
        margin: 0 auto 100px auto;

        @media (max-width: 1440px) {
          line-height: 72px;
          margin: 0 auto 80px auto;
          max-width: 397px;
        }

        @media (max-width: 750px) {
          line-height: 52px;
          margin: 0 auto 60px auto;
          max-width: 298px;
        }

        ::after {
          position: absolute;
          content: "";
          width: 150px;
          height: 8px;
          background-color: #765c3d;
          bottom: -30px;
          right: 0px;
        }
      }

      > div {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;

        .ant-picker {
          padding: 0;
          border: none;
          border-radius: 0;
        }

        .ant-picker-focused {
          box-shadow: none;
        }

        .ant-picker-suffix {
          position: absolute;
          right: 0;

          svg {
            fill: #2f1f08;
          }
        }

        .ant-select {
          width: 100%;
          height: 60px;
          font-size: 25px;
          line-height: 33px;
          color: #6c5c47;
          margin-top: 30px;
          font-family: "Brandon Grotesque";
          border: none !important;

          @media (max-width: 1440px) {
            font-size: 22px;
            line-height: 30px;
            height: 60px;
          }

          @media (max-width: 750px) {
            font-size: 18px;
            line-height: 26px;
            margin-top: 20px;
            height: 50px;
          }
        }

        .ant-select-selector {
          height: 60px !important;
          padding: 0 !important;
          border: none !important;
          border-bottom: 1px solid #2f1f08 !important;
          box-shadow: none !important;
          border-radius: 0 !important;

          @media (max-width: 1440px) {
            height: 60px !important;
          }

          @media (max-width: 750px) {
            height: 50px !important;
          }
        }

        .ant-select-selection-placeholder {
          color: #6c5c47;
        }

        .ant-select-arrow {
          margin-top: -20px;

          svg {
            fill: #2f1f08;
          }
        }

        input,
        textarea {
          width: 100%;
          height: 85px;
          border: none;
          border-bottom: 1px solid #2f1f08;
          resize: none;
          font-size: 25px;
          line-height: 33px;
          color: #6c5c47;
          font-family: "Brandon Grotesque";
          background-color: transparent;
          border-radius: 0;
          padding: 0;

          @media (max-width: 1440px) {
            font-size: 22px;
            line-height: 30px;
            height: 75px;
          }

          @media (max-width: 750px) {
            font-size: 18px;
            line-height: 26px;
            height: 65px;
          }

          ::-webkit-input-placeholder {
            color: #6c5c47;
          }
        }

        textarea {
          height: 140px;
          margin-top: 30px;

          @media (max-width: 750px) {
            margin-top: 20px;
          }
        }

        .erro {
          position: absolute;
          bottom: -22px;
          font-size: 14px;
          color: red;
          z-index: 1;
        }
      }

      .btn {
        position: relative;
        width: 100%;
        margin-top: 30px;

        button {
          border: 1px solid #2f1f08;
          background-color: transparent;
          border-radius: 20px;
          height: 65px;
          font-size: 25px;
          line-height: 33px;
          color: #6c5c47;
          font-family: "Brandon Grotesque";
          cursor: pointer;
          transition: all ease 0.5s;

          @media (max-width: 1440px) {
            font-size: 22px;
            line-height: 30px;
          }

          @media (max-width: 750px) {
            font-size: 18px;
            line-height: 26px;
          }

          :hover {
            background-color: #c1a177;
          }
        }
      }
    }
  }
`;
