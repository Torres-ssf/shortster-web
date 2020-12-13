import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  width: 100%;

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
  width: 100%;

  button {
    background-color: #7fb685;
    border: none;
    border-radius: 0 10px 10px 0;
    color: white;
  }
`;
