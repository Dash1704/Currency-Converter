import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { PageButton } from './PageButton';
import { StackScreenProps } from '@react-navigation/stack';

type StackList = {
  Home: undefined;
  LineStatus: undefined;
}

export default function HomePage({ navigation }: StackScreenProps<StackList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TFL APP</Text>  
        <PageButton 
          title="Line Statuses"
          onPress={() => {
            navigation.navigate('LineStatus')
          }}
        />
      <StatusBar style="auto" />
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
  headerText: {
    fontSize: 50,
    fontWeight: "800"
  },
});