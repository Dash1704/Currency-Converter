import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import ExchangeRatePage from './components/ExchangeRatePage';
import ConversionPage from './components/ConversionPage';

const Stack = createNativeStackNavigator<StackList>();

type StackList = {
  Home: undefined;
  Exchange: undefined;
  Conversion: undefined;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Exchange"
          component={ExchangeRatePage}
        />
        <Stack.Screen 
          name="Conversion"
          component={ConversionPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
