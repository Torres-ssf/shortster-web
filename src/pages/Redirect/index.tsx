import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

import { LoadingContainer } from '../../components/LoadingContainer';

import { Container } from './styles';

interface PageParams {
  code: string;
}

export const Redirect: React.FC = () => {
  const [error, setError] = useState(false);

  const { code } = useParams<PageParams>();

  useEffect(() => {
    const fetchShorsterFromServer = async () => {
      try {
        const { data } = await api.get(`shortster/${code}`);

        window.location = data.url;
      } catch (err) {
        setError(true);
      }
    };

    fetchShorsterFromServer();
  }, [code]);

  const contentView = useMemo(() => {
    if (error) {
      return (
        <h3>Sorry, no shortster was found for the given code &#128543;</h3>
      );
    }

    return <LoadingContainer />;
  }, [error]);

  return <Container>{contentView}</Container>;
};
