import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .folhasdetail1 {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.32;
  }

  .folhasdetail2 {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.32;
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
    background-color: transparent;
    border: none;
    cursor: pointer;
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
      color: #86e8e4;
      text-align: center;
      margin-top: 100px;
    }
  }
`;

export const Text = styled.div`
  position: relative;
  top: -50px;
  background-color: #fff;
  opacity: 1;
  z-index: 2;
  width: calc(100% - 40px);
  max-width: 1000px;
  padding: 120px 150px;

  @media (max-width: 1440px) {
    max-width: 750px;
    padding: 100px 130px;
  }

  @media (max-width: 750px) {
    max-width: 750px;
    padding: 50px 30px;
  }

  @media (max-width: 450px) {
    padding: 50px 20px;
  }

  h4 {
    font-size: 60px;
    line-height: 70px;
    font-style: italic;
    color: #76654e;
    text-align: center;
    font-family: "Playfair Display", serif;
    margin-bottom: 70px;

    @media (max-width: 1440px) {
      font-size: 40px;
      line-height: 60px;
    }

    @media (max-width: 750px) {
      font-size: 35px;
      line-height: 55px;
      max-width: 400px;
      margin: 0 auto 50px auto;
    }
  }

  p {
    margin-bottom: 30px;

    @media (max-width: 750px) {
      margin-bottom: 20px;
    }
  }
`;

export const Galeria = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 300px;

  @media (max-width: 1440px) {
    margin-top: 150px;
    margin-bottom: 250px;
  }

  @media (max-width: 750px) {
    margin-top: 70px;
    margin-bottom: 120px;
  }

  h3 {
    color: #a89478;
  }

  h2 {
    color: #86e8e4;
    position: relative;
    top: -10px;
    margin: 0;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-gap: 20px;
    margin-top: 50px;
    grid-auto-rows: 250px;
    padding: 0 14%;
    justify-content: center;

    @media (max-width: 1440px) {
      padding: 0 10%;
      grid-auto-rows: 220px;
    }

    @media (max-width: 1050px) {
      padding: 0 20px;
    }

    @media (max-width: 750px) {
      grid-auto-rows: 190px;
    }

    @media (max-width: 650px) {
      grid-template-columns: repeat(2, 48%);
      margin-top: 35px;
    }

    @media (max-width: 450px) {
      grid-template-columns: 100%;
    }

    .img {
      position: relative;
      cursor: pointer;

      :hover {
        .hover {
          opacity: 0.94;
        }
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

      .hover {
        width: 100%;
        height: 100%;
        background-color: rgba(92, 69, 62, 0.7);
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        transition: all ease 0.5s;

        h3 {
          color: #faf3ea;
        }
      }
    }
  }
`;

export const Depoimentos = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
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
    max-width: 1100px;
    margin-bottom: 250px;
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
    z-index: 3;

    @media (max-width: 1050px) {
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

      @media (max-width: 410px) {
        font-size: 50px;
        line-height: 70px;
      }

      @media (max-width: 345px) {
        font-size: 45px;
        line-height: 65px;
      }
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    position: absolute;

    @media (max-width: 1050px) {
      flex-direction: row;
      bottom: 310px;
    }

    button {
      position: relative;
    }

    button:last-child {
      margin-top: 10px;

      @media (max-width: 1050px) {
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

  .slider {
    padding-top: 160px;
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    position: relative;

    @media (max-width: 1050px) {
      flex-direction: column;
      padding-top: 0;
    }

    > div {
      width: 50%;

      @media (max-width: 1050px) {
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

      @media (max-width: 1050px) {
        position: relative;
        padding: 60px 20px 100px 20px;
      }

      > div {
        max-width: 400px;
      }

      h3 {
        font-size: 30px;
        line-height: 40px;
        font-weight: bold;
        color: #76654e;
        margin-bottom: 30px;
        font-family: "Playfair Display", serif;

        @media (max-width: 750px) {
          font-size: 25px;
          line-height: 35px;
        }
      }

      .nome {
        font-size: 20px;
        line-height: 27px;
        font-weight: 500;
        color: #a89478;
        font-family: "Brandon Grotesque";
        text-align: end;
        margin-top: 10px;
      }
    }

    .img {
      position: absolute;
      top: -160px;
      height: 100%;
      right: 0;

      @media (max-width: 1050px) {
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
