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
  /* width: 100%; */
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
