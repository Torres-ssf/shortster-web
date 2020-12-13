import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px 0 0 10px;
  border: 1px solid #5171a5;
  display: flex;
  align-items: center;
  padding: 16px;
  height: 60px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #7fb685;
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #7fb685;
    `}
    
    input {
    flex: 1;
    border: 0;
    color: #2a2928;

    &::placeholder {
      color: #a6a3a0;
    }
  }
`;
