import { KeyboardEvent, useEffect, useState } from "react";

export const useKeyPressed = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  const keyDownHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) setKeyPressed(true);
  };

  const keyUpHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler as any);
    window.addEventListener("keyup", keyUpHandler as any);

    return () => {
      window.removeEventListener("keydown", keyDownHandler as any);
      window.removeEventListener("keyup", keyUpHandler as any);
    };
  }, [targetKey]);

  return keyPressed;
};
