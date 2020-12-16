import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { getValidationErrors } from '../../util/getValidationErrors';

import { Container, InputContainer, ShortsterContainer } from './styles';
import { useToast } from '../../hooks/toast';

interface Shortster {
  code: string | undefined;
  url: string | undefined;
}

type FieldErrors = Shortster;

export const Main: React.FC = () => {
  const [shortsterInputValue, setShortsterInputValue] = useState('');

  const [customShortsterInput, setCustomShortsterInput] = useState('');

  const [inputError, setInputErrors] = useState<FieldErrors>({} as FieldErrors);

  const [createdShorster, setCreatedShortster] = useState<Shortster>(
    {} as Shortster,
  );

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleCreateShortster = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      setLoading(true);

      setCreatedShortster({ code: undefined, url: undefined });

      let url = shortsterInputValue.toLowerCase();

      const testHttpRegex = new RegExp('^(http|https)://', 'i');

      if (!testHttpRegex.test(shortsterInputValue)) {
        url = 'http://'.concat(url);
      }

      const shortsterObject = {};

      if (customShortsterInput !== '') {
        Object.assign(shortsterObject, {
          url,
          code: customShortsterInput,
        });
      } else {
        Object.assign(shortsterObject, {
          url,
        });
      }

      try {
        const schema = Yup.object().shape({
          url: Yup.string()
            .url('a valid url is needed to create a shortster')
            .required(),
          code: Yup.string()
            .notRequired()
            .min(4, 'custom shortster code should have at least 4 chars')
            .matches(
              /^[0-9a-zA-Z]+$/,
              'shortster code should contains only letters (upper and lower case) and digits',
            ),
        });

        await schema.validate(shortsterObject, { abortEarly: false });

        setInputErrors({} as FieldErrors);

        const { data } = await api.post('/shortster', shortsterObject);

        setCreatedShortster({
          code: data.code,
          url: data.url,
        });

        addToast({
          type: 'success',
          title: 'Shortster successfully created',
          description: 'You can starting using your shortster already.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          const { url: urlError, code: codeError } = errors;

          setInputErrors({
            url: urlError,
            code: codeError,
          });
        } else if (err.response && err.response.data) {
          const { message } = err.response.data;

          addToast({
            type: 'error',
            title: 'Shortster not created',
            description: typeof message === 'string' ? message : message[0],
          });
        }
      } finally {
        setLoading(false);
      }
    },
    [shortsterInputValue, customShortsterInput, addToast],
  );

  const { code, url } = useMemo(() => {
    return createdShorster;
  }, [createdShorster]);

  return (
    <Container>
      <h1>Shortster</h1>

      <p>Paste a URL to create a new shortster</p>

      <InputContainer onSubmit={handleCreateShortster}>
        <label htmlFor="url">Url</label>
        <Input
          id="url"
          name="url"
          placeholder="Paste a URL"
          value={shortsterInputValue}
          error={inputError.url}
          onChange={e => setShortsterInputValue(e.target.value)}
        />

        <label htmlFor="url">Shortster custom code (optional)</label>
        <Input
          name="customShortster"
          type="text"
          placeholder="Select a custom code if you want, not required"
          value={customShortsterInput}
          error={inputError.code}
          onChange={e => setCustomShortsterInput(e.target.value)}
        />
        <Button type="submit" loading={loading}>
          Create shortster
        </Button>
      </InputContainer>

      {code && (
        <ShortsterContainer>
          <h3>Shortster successfully created</h3>
          <span>
            Shortster:
            <Link to={`/${code}`} target="_blank">{`${code}`}</Link>
          </span>
          <span>
            Long url:
            <a href={`${url}`} target="_blank" rel="noreferrer">{`${url}`}</a>
          </span>
        </ShortsterContainer>
      )}
    </Container>
  );
};
