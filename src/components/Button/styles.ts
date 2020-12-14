import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  loading: boolean;
}

const loading = keyframes`
 {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export const Container = styled.button<ContainerProps>`
  background-color: ${props => (props.loading ? '#A3A3A3' : '#3866ff')};
  border: none;
  border-radius: 0 10px 10px 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  transition: 300ms;

  &:hover {
    ${props =>
      !props.loading &&
      css`
        background-color: #7092ff;
      `}
  }
`;

export const LoadingContainer = styled.div`
  animation: ${loading} 800ms linear infinite;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3866ff;
  width: 32px;
  height: 32px;
`;