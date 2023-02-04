import React, { useEffect, useCallback } from 'react';

const useOnClickOutside = (ref, handler) => {
  const listener = useCallback(
    (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    },
    [ref, handler],
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);

  return <></>;
};

export default useOnClickOutside;
