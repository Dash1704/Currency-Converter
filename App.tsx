import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Config from 'react-native-config';
import { useLatestExchange } from './hooks/useLatestExchange';

export default function App() {
  const { exchangeRates } = useLatestExchange();

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>CURRENCY CONVERTER</Text>
        <View>
          {exchangeRates ? (
            <ExchangeRateList exchangeRates={exchangeRates} />
          ) : (
            <Text>No exchange rates data available</Text>
          )}
        </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

function ExchangeRateList({ exchangeRates }: any) {
  return (
    <View>
      {Object.keys(exchangeRates.rates).map((currency) => (
        <Text key={currency}>
          {currency}: {exchangeRates.rates[currency]}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
