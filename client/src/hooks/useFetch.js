import { useEffect, useState } from "react";

export const useFetch = (apiFn, params = null, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = async (overrideParams = params) => {
    try {
      setLoading(true);
      setError(null);

      const res = await apiFn(overrideParams);
      setData(res);

      return res;
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) execute();
  }, []);

  return { data, loading, error, refetch: execute };
};