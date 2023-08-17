import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const LoginScreen = () => {
    
    // Dùng navigation điều hướng nè
    const { navigate } = useNavigation();

    const loginPress = () => {
        navigate('BottomTab')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đăng nhập</Text>
      <TouchableOpacity style={styles.btn} onPress={() => loginPress()}>
        <Text style={{color: '#fff'}}>Đi đến trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
