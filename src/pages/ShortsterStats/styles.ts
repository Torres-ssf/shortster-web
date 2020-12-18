import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;

  h1 {
    margin: 50px 0 60px;
    text-align: center;
  }
`;

export const StatLabelHeading = styled.h4`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 8px;
  text-align: left;
`;

export const StatLabel = styled.p`
  color: #928f8b;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;
