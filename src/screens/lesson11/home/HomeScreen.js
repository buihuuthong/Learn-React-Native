import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NormalButton} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const signOut = () => {
    // Đăng xuất người dùng hiện tại
    auth()
      .signOut()
      .then(() => navigate('LoginScreen'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đăng nhập thành công!</Text>
      <NormalButton title="Đăng xuất" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;

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
});
