import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Chỗ này sẽ tạo ra các button dùng chung trong dự án

// Button với text ở giữa
export const NormalButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_shape: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#5B67CA',
    borderRadius: 20,
    padding: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: 20,
    backgroundColor: '#5B67CA',
    borderRadius: 20,
    padding: 20,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});