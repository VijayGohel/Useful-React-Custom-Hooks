import { useRef, useEffect } from "react";

export const useInterval = (cb: () => void, delay: number | null) => {
  const savedCallback = useRef(cb);

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(savedCallback.current, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
