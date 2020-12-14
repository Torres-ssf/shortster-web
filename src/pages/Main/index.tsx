import React, { useCallback, useMemo, useState } from 'react';
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { getValidationErrors } from '../../util/getValidationErrors';

import { Container, InputContainer, ErrorList } from './styles';

export const Main: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const [errorMessages, setErrorMessages] = useState<String[]>([]);

  const handleCreateShortster = useCallback(async () => {
    setLoading(true);

    let url = inputValue.toLowerCase();

    const regex = new RegExp('^(http|https)://', 'i');

    if (!regex.test(inputValue)) {
      url = 'http://'.concat(url);
    }

    try {
      const schema = Yup.object().shape({
        url: Yup.string()
          .url('a valid url is needed to create a shortster')
          .required(),
      });

      await schema.validate({ url }, { abortEarly: false });

      setErrorMessages([]);

      const { data } = await api.post('/shortster', { url });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        setErrorMessages(Object.values(errors));
      }
    } finally {
      setLoading(false);
    }
  }, [inputValue]);

  const errorList = useMemo(() => {
    if (errorMessages.length === 0) {
      return <></>;
    }

    return (
      <ErrorList>
        {errorMessages.map(message => {
          return <li>{message}</li>;
        })}
      </ErrorList>
    );
  }, [errorMessages]);

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
          required
        />
        <Button type="button" loading={loading} onClick={handleCreateShortster}>
          Create shortster
        </Button>
      </InputContainer>
      {errorList}
    </Container>
  );
};
