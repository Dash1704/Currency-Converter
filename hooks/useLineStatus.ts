import { useState, useEffect } from 'react';

const API_URL = `https://api.tfl.gov.uk/Line/Mode/tube/Status`

export function useLineStatus(): {
  lineStatuses: any | null;
} {
  const [lineStatuses, setLineStatuses] = useState<any | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json() as Promise<any>;
      })
      .then((data) => {
        setLineStatuses(data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return { lineStatuses };
}
