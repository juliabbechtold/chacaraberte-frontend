import styled from "styled-components";

export const Container = styled.section`
  width: 50%;

  p {
    margin: 0;
    font-size: 24px;
    line-height: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    > div {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 18px;
      line-height: 24px;
      color: #000;
      margin-top: 30px;
    }

    span {
      position: absolute;
      color: red;
      font-size: 14px;
      bottom: -20px;
    }

    input {
      height: 50px;
      padding: 0 20px;
    }

    textarea {
      padding: 20px;
      resize: none;
      height: 200px;
    }

    .btn {
      margin-top: 30px;
      width: fit-content;
      position: relative;

      .disabled {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
      }

      button {
        width: fit-content;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #fff;
        transition: all ease 0.5s;

        :hover {
          background-color: #ccc;
        }
      }
    }
  }
`;
