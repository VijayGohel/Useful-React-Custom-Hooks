import { useRef, useEffect } from "react";

export const useEventListner = (
  eventName: string,
  handler: EventListener,
  element: Element | Window = window
) => {
  const savedHandler = useRef<EventListener>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventHandler = (event: Event) => {
      if (savedHandler.current) savedHandler.current(event);
    };
    element.addEventListener(eventName, eventHandler);
    return () => element.removeEventListener(eventName, eventHandler);
  }, [eventName, element]);
};
