import React, { useEffect, useRef } from 'react';


export const RandomButton: React.FC<{ onClick: React.MouseEventHandler<HTMLElement> }> = ({ onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setInterval(() => {
      if (ref.current !== null) {
        ref.current.click();
      }
    }, 30000);
  }, []);


  return (
    <button type="button" ref={ref} onClick={onClick}>Click me</button>
  );
};

