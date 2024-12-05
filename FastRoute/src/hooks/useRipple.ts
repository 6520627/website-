import { useState, useEffect } from 'react';

interface RippleStyle {
  left: number;
  top: number;
  width: string;
  height: string;
  animation: string;
}

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleStyle[]>([]);

  useEffect(() => {
    const cleanup = () => {
      setRipples([]);
    };

    return cleanup;
  }, []);

  const addRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    
    const newRipple: RippleStyle = {
      left: x,
      top: y,
      width: `${size}px`,
      height: `${size}px`,
      animation: `ripple 600ms linear`
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 600);
  };

  return { ripples, addRipple };
};