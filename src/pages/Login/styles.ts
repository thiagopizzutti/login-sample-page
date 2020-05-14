import styled from 'styled-components';
import bgImage from '../../assets/img.jpg';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-content: flex-start;
  align-items: center;
`;

export const Card = styled.div`
  /* display: flex;
  box-shadow: -20px 20px 30px -5px rgba(82, 82, 82, 1);
  background-color: grey;
  width: 85vw;
  height: 75vh;
  border-radius: 10px;
  background: #222;
  */
`;

export const Form = styled.form`
  /* background: #222; */
  width: 700px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  padding: 50px;

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 50px;
  }

  .signin-form {
    height: 70%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.7rem;
  }

  .input-signin-main {
    margin-bottom: 5px;
  }

  .input-signin {
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: 1.3rem;
    margin: 15px 0;

    label {
      margin-bottom: 10px;
    }
  }

  input {
    height: 45px;
    border-radius: 10px;
    border: 1px solid #c8c8c8;
    background: #222;
    color: #c8c8c8;
    padding: 0 10px;
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }

  button {
    height: 45px;
    border-radius: 10px;
    transition: color 2s;
    font-size: 1.3rem;
    margin-bottom: 20px;

    &:hover {
      background: #c8c8c8;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    margin-bottom: 40px;
  }
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background: url(${bgImage}) no-repeat right;
  background-size: cover;
`;
