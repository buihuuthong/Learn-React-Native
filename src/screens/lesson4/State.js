import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const State = () => {
  const [count, setCount] = useState(0);

  const countPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => countPress()}>
        <Text style={{ color: '#fff'}}>+ Count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default State;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    btn: {
        backgroundColor: 'green',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    }
})