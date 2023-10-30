import { useState, useEffect } from 'react';
import { ExchangeRates } from '../types'
import Config from 'react-native-config';



const API_KEY = "43062c534d6e4b519631c55caf12a97e";
// const API_KEY = Config.APP_ID
const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

export function useLatestExchange(): {
  exchangeRates: ExchangeRates | null;
} {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json() as Promise<ExchangeRates>;
      })
      .then((data) => {
        setExchangeRates(data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return { exchangeRates };
}
