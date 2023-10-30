import { useState, useEffect } from 'react';

const API_KEY = "43062c534d6e4b519631c55caf12a97e";

export function useConversion(value: string, from: string, to: string): {
  conversions: any;
} {
  const [conversions, setConversions] = useState<any>(null);

  useEffect(() => {
    fetch(`https://openexchangerates.org/api/convert/${value}/${from}/${to}?${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json() as Promise<any>;
      })
      .then((data) => {
        setConversions(data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return { conversions };
}

