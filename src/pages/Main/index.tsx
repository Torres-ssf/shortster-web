import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { getValidationErrors } from '../../util/getValidationErrors';

import {
  Container,
  InputContainer,
  ErrorList,
  ShortsterContainer,
} from './styles';

interface Shortster {
  code: string | undefined;
  url: string | undefined;
}

export const Main: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const [createdShorster, setCreatedShortster] = useState<Shortster>(
    {} as Shortster,
  );

  const [loading, setLoading] = useState(false);

  const [errorMessages, setErrorMessages] = useState<String[]>([]);

  const handleCreateShortster = useCallback(async () => {
    setLoading(true);

    setCreatedShortster({ code: undefined, url: undefined });

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

      setCreatedShortster({
        code: data.code,
        url: data.url,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        setErrorMessages(Object.values(errors));
      }

      if (err.response && err.response.data) {
        const { message } = err.response.data;

        setErrorMessages(
          typeof message === 'string' ? [message] : [...message],
        );
      }
    } finally {
      setLoading(false);
    }
  }, [inputValue]);

  const { code, url } = useMemo(() => {
    return createdShorster;
  }, [createdShorster]);

  const errorList = useMemo(() => {
    if (errorMessages.length === 0) {
      return <></>;
    }

    return errorMessages.map(message => {
      return <li>{message}</li>;
    });
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

      <ErrorList>{errorList}</ErrorList>

      {code && (
        <ShortsterContainer>
          <h3>Shortster successfully created</h3>
          <span>
            Shortster:
            <Link to="/code">{`shorster/${code}`}</Link>
          </span>
          <span>
            Long url:
            <Link to="/code">{`${url}`}</Link>
          </span>
        </ShortsterContainer>
      )}
    </Container>
  );
};
