import { useEffect, useState } from "react";

interface UseApiProps<T> {
  queryFn: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}

interface QueryState<T> {
  data: T | null;
  loading: boolean;
  error: unknown;
}

const useApi = <T>(props: UseApiProps<T>) => {
  const [queryState, setQueryState] = useState<QueryState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const getData = async () => {
    try {
      setQueryState((state) => ({ ...state, loading: true }));
      const response = await props.queryFn();
      setQueryState((state) => ({ ...state, data: response, loading: false }));
      if (props.onSuccess) {
        props.onSuccess(response);
      }
    } catch (error) {
      setQueryState((state) => ({ ...state, error, loading: false }));
      if (props.onError) {
        props.onError(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: queryState.data,
    loading: queryState.loading,
    error: queryState.error,
    refetch: getData,
  };
};

export default useApi;
