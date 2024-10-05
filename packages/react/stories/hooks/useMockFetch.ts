import { useEffect, useState } from "react";

export default function useMockFetch<T>(value: T) {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(value);
    }, 7500);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return { state, isLoading: !state };
}
