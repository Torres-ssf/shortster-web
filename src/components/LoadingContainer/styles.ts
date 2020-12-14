import styled, { keyframes } from 'styled-components';

const ellipsis1 = keyframes`
    0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(36px, 0);
  }
`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const EllipsisContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const Ellipsis = styled.div`
  position: absolute;
  top: 100px;
  width: 26px;
  height: 26px;
  margin-left: 40px;
  border-radius: 50%;
  background: #42aee4;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }

  &:nth-child(3) {
    left: 44px;
    animation: ${ellipsis2} 0.6s infinite;
  }

  &:nth-child(4) {
    left: 80px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;
