import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

type props = {
  value: string;
  delay: number;
};

export default function useDebounce(value: string, delay: number) {
  const [debounce, setDebounce] = useState<string>('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);

  return debounce;
}
