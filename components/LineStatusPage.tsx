import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useLineStatus } from '../hooks/useLineStatus';

export default function LineStatusPage() {
  const { lineStatuses } = useLineStatus();
  
  return(
    <ScrollView>
    <View style={styles.container}>
      <Text>LINE STATUSES</Text>
      <View>
          {lineStatuses ? (
            lineStatuses.map((lines: any) => (
              <Text key={lines.id}>{lines.name}</Text>
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
