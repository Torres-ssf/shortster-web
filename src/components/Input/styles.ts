import styled, { css } from 'styled-components';

import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #5171a5;
  display: flex;
  align-items: center;
  padding: 16px;
  height: 60px;
  width: 100%;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #3866ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #3866ff;
    `}

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
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

export const Error = styled(Tooltip)`
  height: 20px;
  text-align: center;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
