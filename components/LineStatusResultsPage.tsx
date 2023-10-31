import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useLineStatus } from '../hooks/useLineStatus';
import LineStatus from './LineStatus'

export default function LineStatusResultsPage() {
  const { lineStatuses } = useLineStatus();
  
  return(
    <ScrollView>
    <View style={styles.container}>
      <Text>LINE STATUSES</Text>
      <View>
          {lineStatuses ? (
            lineStatuses.map((line: any) => (
              <LineStatus key={line.id} line={line} /> 
            ))
          ) : (
            <Text>Loading line statuses...</Text>
          )}
        </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
