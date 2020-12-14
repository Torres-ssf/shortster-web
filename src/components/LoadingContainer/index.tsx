import React from 'react';

import { Container, EllipsisContainer, Ellipsis } from './styles';

export const LoadingContainer: React.FC = () => (
  <Container>
    <EllipsisContainer>
      <Ellipsis />
      <Ellipsis />
      <Ellipsis />
      <Ellipsis />
    </EllipsisContainer>
  </Container>
);
