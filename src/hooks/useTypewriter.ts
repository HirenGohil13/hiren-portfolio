import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  loop?: boolean;
  delaySpeed?: number;
}

export const useTypewriter = ({ 
  words, 
  loop = false, 
  delaySpeed = 2000 
}: TypewriterOptions) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => {
        if (prev === words.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, loop]);

  return text;
};