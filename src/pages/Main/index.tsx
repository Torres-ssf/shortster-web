import React, { useState } from 'react';

import { Input } from '../../components/Input';

import { Container, InputContainer } from './styles';

export const Main: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <h1>Shortster</h1>

      <p>Paste a URL to create a new shortster</p>

      <InputContainer>
        <Input
          name="url"
          type="url"
          placeholder="Paste a URL"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="button">Create shortster</button>
      </InputContainer>
    </Container>
  );
};
