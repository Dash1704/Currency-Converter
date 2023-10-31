import React from 'react';
import { Text, View } from 'react-native';

export default function LineStatus({ line }: any) {
  return (
    <View>
      <Text>{line.name}</Text>
      {line.disruptions.length > 0 ? (
        line.disruptions.map((disruption: any) => (
          <Text key={disruption.category}>
            {disruption.description}
          </Text>
        ))
      ) : (
        <Text>Status OK</Text>
      )}
    </View>
  );
}