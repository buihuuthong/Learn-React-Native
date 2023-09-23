import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import InputProps from './components/Input';
import {useNavigation} from '@react-navigation/native';

const RegistrationForm = () => {
  const {navigate} = useNavigation();

  const [userList, setUserList] = useState([]);

  const [hovaten, setHovaten] = useState('');
  const [tuoi, setTuoi] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = newUser => {
    setUserList([...userList, newUser]);
    navigate('UserList', {userList: [...userList, newUser]});
  };

  const onPress = () => {
    const newUser = {
      hovaten: hovaten,
      tuoi: tuoi,
      email: email,
      password: password,
    };
    addUser(newUser);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          paddingVertical: 4,
          alignSelf: 'center',
          textTransform: 'uppercase',
        }}>
        Đăng ký
      </Text>
      <InputProps
        value={hovaten}
        placehoder="Họ và tên"
        onChangeText={value => setHovaten(value)}
      />
      <InputProps
        value={tuoi}
        placehoder="Tuổi"
        onChangeText={value => setTuoi(value)}
      />
      <InputProps
        value={email}
        placehoder="Email"
        onChangeText={value => setEmail(value)}
      />
      <InputProps
        value={password}
        placehoder="Mật khẩu"
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity
        style={{
          marginVertical: 12,
          width: '100%',
          backgroundColor: 'purple',
          borderRadius: 10,
        }}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            paddingVertical: 4,
            alignSelf: 'center',
            color: '#fff',
          }}>
          Xác nhận
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
