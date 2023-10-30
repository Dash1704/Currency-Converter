import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function PageButton(props: any) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 42,
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    width: 207,
    borderRadius: 100,
    backgroundColor: 'red'
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: -0.05,
  },
})