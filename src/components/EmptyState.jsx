import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyState = ({message}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: '#555',
    fontSize: 18,
  },
});

export default EmptyState;
