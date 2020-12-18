import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { api } from '../../services/api';

import { LoadingContainer } from '../../components/LoadingContainer';

import { IShortsterCodeParam } from '../../protocols';

import { Container, StatLabelHeading, StatLabel } from './styles';

interface IShortsterStats {
  url: string;
  created_at: string;
  last_access: string;
  times_accessed: string;
}

export const ShortsterStats: React.FC = () => {
  const [shortsterStats, setShortsterStats] = useState<IShortsterStats>(
    {} as IShortsterStats,
  );

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const { code } = useParams<IShortsterCodeParam>();

  useEffect(() => {
    setLoading(true);

    const fetchShorsterFromServer = async () => {
      try {
        const { data } = await api.get(`shortster/${code}/stats`);

        setShortsterStats({ ...data });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchShorsterFromServer();
  }, [code]);

  const contentView = useMemo(() => {
    if (loading || !Object.keys(shortsterStats).length) {
      return <LoadingContainer />;
    }

    if (error) {
      return (
        <h3>Sorry, no shortster was found for the given code &#128543;</h3>
      );
    }

    const { created_at, last_access, times_accessed, url } = shortsterStats;

    return (
      <>
        <h1>Shortster Stats</h1>

        <StatLabelHeading>Code</StatLabelHeading>
        <StatLabel>{`${code}`}</StatLabel>

        <StatLabelHeading>Url</StatLabelHeading>
        <StatLabel>{`${url}`}</StatLabel>

        <StatLabelHeading>Created</StatLabelHeading>
        <StatLabel>{`${format(new Date(created_at), 'PPPppp')}`}</StatLabel>

        <StatLabelHeading>Last Access</StatLabelHeading>
        <StatLabel>{`${format(new Date(last_access), 'PPPppp')}`}</StatLabel>

        <StatLabelHeading>Times Accessed</StatLabelHeading>
        <StatLabel>{`${times_accessed}`}</StatLabel>
      </>
    );
  }, [error, loading, shortsterStats, code]);

  return <Container>{contentView}</Container>;
};
