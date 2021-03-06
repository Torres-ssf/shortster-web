import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  description: number;
}

const timeTrackAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const toastTypeVariations = {
  info: css`
    background: #3866ff;
    color: #ebf8ff;
  `,
  success: css`
    background: #4bb543;
    color: #e6fffa;
  `,
  error: css`
    background: #c53030;
    color: #fff;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  overflow: hidden;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 17px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.description &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

export const TimeAnimatedView = styled.span`
  animation: ${timeTrackAnimation} 7s forwards linear;
  background-color: white;
  position: absolute;
  opacity: 0.4;
  height: 8px;
  bottom: 0;
  left: 0;
  right: 0;
`;
