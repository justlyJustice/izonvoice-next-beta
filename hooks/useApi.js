import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setData(response.data.data || response.data);

    if (!response.ok) return setError(true);
  };

  return { data, error, loading, request, setData };
};

export default useApi;
