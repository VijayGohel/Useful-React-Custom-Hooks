import { useCallback, useState, useEffect } from "react";

export const useCopyToClipboard = (delay: number) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    window.navigator.clipboard.writeText(text).then(() => setIsCopied(true));
  }, []);

  useEffect(() => {
    if (isCopied) {
      const id = setTimeout(() => setIsCopied(false), delay);
      return () => clearTimeout(id);
    }
  }, [isCopied, delay]);

  return [isCopied, copyToClipboard];
};
