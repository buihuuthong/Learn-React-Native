import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ImageLocal from './ImageLocal';

// Tạo các thẻ card dùng chung

export const HomeCard = ({image, title, onPress, color}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.homeCard, {backgroundColor: color, borderColor: color}]}>
      <ImageLocal image={image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homeCard: {
    opacity: 0.7,
    borderWidth: 2,
    width: 180,
    height: 190,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
