import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLOR from '../../constants/color';

const BasicHook = () => {
  const [title, setTitle] = useState('Xin Chào!');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDescription('Learn React Native');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: COLOR.purple}]}>{title}</Text>
      <Text style={[styles.text, {color: COLOR.lightRed}]}>{description}</Text>
    </View>
  );
};

export default BasicHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
