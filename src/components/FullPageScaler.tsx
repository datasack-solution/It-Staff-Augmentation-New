// components/FullPageScaler.tsx
import { useEffect, useState, useRef } from 'react';

interface Props {
  designedHeight: number;
  children: React.ReactNode;
}

export default function FullPageScaler({ designedHeight, children }: Props) {
  const [, setScale] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight;
      const newScale = Math.min(vh / designedHeight, 1); // shrink only
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [designedHeight]);

  return (
    <div
      ref={ref}
      style={{
        // transform: `scale(${scale})`,
        transformOrigin: 'top center',
        height: `${designedHeight}px`,
        overflow: 'hidden',
      }}
      className="w-full"
    >
      {children}
    </div>
  );
}
