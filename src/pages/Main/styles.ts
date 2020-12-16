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

export const InputContainer = styled.div`
  display: flex;
  margin: 0 20px;
`;

export const ErrorList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  padding: 0;
  margin: 6px 28px;
  text-align: left;

  li {
    color: #c53030;
    font-size: 0.9rem;
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
