import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
  min-width: 480px;
  text-align: center;

  h1 {
    margin-top: 30px;
    font-size: 3rem;
  }

  p {
    margin: 50px 0;
    font-size: 1.5rem;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  text-align: left;

  label {
    font-size: 0.9rem;
    margin: 14px 0 10px 10px;
  }

  button {
    margin-top: 22px;
  }
`;

export const ShortsterContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0;
  padding: 30px;
  text-align: left;

  h3 {
    color: #4bb543;
    font-size: 1.4rem;
    margin-bottom: 30px;
    text-align: center;
  }

  span {
    color: #424242;
    font-size: 1.1rem;
    margin: 0;

    & + span {
      margin-top: 20px;
    }

    a {
      margin-left: 12px;
      text-decoration: none;
    }
  }
`;
