import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  animateOn?: 'view' | 'load';
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 40,
  animateOn = 'view',
}) => {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [started, setStarted] = useState(false);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@*+=<>?/';

  useEffect(() => {
    if (animateOn === 'load') {
      const timer = setTimeout(() => setStarted(true), delay * 1000);
      return () => clearTimeout(timer);
    } else if (animateOn === 'view' && inView) {
      const timer = setTimeout(() => setStarted(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, animateOn, delay]);

  useEffect(() => {
    if (!started) {
      // Show blanks or characters before starting
      setDisplayText(text.replace(/[^\s]/g, '_'));
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iterations += 0.5; // Controls the decryption pace
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText || text}
    </span>
  );
};
export default DecryptedText;
