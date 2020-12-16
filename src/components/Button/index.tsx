import React, { ButtonHTMLAttributes } from 'react';

import { Container, LoadingContainer } from './styles';

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export const Button: React.FC<ButtonAttributes> = ({
  loading,
  children,
  ...rest
}) => {
  return (
    <Container loading={loading ? 1 : 0} {...rest}>
      {loading ? <LoadingContainer /> : children}
    </Container>
  );
};
