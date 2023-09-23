import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextProps from './components/Text';
import { useNavigation } from '@react-navigation/native';

const UserList = ({route}) => {
    const { goBack } = useNavigation();
  const {userList} = route.params;

  const [list, setList] = useState(userList);

  const deleteUser = key => {
    const updated = userList.splice(key,1)
    setList([...updated]);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={{fontWeight: 'bold', color: 'red'}}>Trở về</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            paddingVertical: 4,
            alignSelf: 'center',
            textTransform: 'uppercase',
          }}>
          Danh sách người dùng
        </Text>
      </View>

      {list?.map((item, key) => {
        return (
          <View
            key={key.toString()}
            style={{
              width: 300,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginVertical: 8,
            }}>
            <View>
              <TextProps value={item.hovaten} />
              <TextProps value={item.tuoi} />
              <TextProps value={item.email} />
              <TextProps value={item.password} />
            </View>
            <TouchableOpacity onPress={() => deleteUser(key)}>
              <Text style={{fontWeight: 'bold', color: 'red'}}>Xóa</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default UserList;
