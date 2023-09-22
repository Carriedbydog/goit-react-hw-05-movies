import { useEffect, useState } from 'react';

export const useHttp = (fn, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    fn(params)
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [fn, params]);
  return [data, setData, loading, error];
};
