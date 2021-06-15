import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default ({ onPress, accessibilityLabel, accessibilityHint, text }) => (
  <TouchableOpacity
    accessibilityRole='button'
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
    onPress={onPress}
    style={styles.button}>
    <Text>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    maxWidth: 100,
    marginBottom: 10,
  },
})
