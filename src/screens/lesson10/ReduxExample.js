import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../../components/FormInput';
import IMAGE from '../../constants/image';
import { setUserInfo, userInfoSelector } from '../../redux/userSlice';

const ReduxExample = () => {
  // selector thông tin người dùng trong redux
  const userInfor = useSelector(userInfoSelector);

  //   dispatch dữ liệu
  const dispatch = useDispatch();

  // loading dữ liệu cho ngầu
  const [loading, setLoading] = useState(true);

  // biến để render có điều kiện sửa/xem
  const [isChangeInfor, setIsChangeInfor] = useState(false);

  //   Tạo mảng thông tin người dùng giả định/ gọi từ api,....
  const user = {
    name: 'Nguyen Van A',
    age: '21',
    class: '20CT123',
  };

  // Use hook form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: user.name,
      age: user.age,
      class: user.class,
    },
  });

  useEffect(() => {
    getData();
  }, []);

  // lấy dữ liệu
  const getData = async () => {
    try {
      // dispatch dữ liệu người dùng vào store
      dispatch(setUserInfo(user));

      // dừng loading
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // cập nhật dữ liệu
  const updateUser = data => {
    // dispatch dữ liệu người dùng đã chỉnh sửa vào store
    dispatch(setUserInfo(data));
    // đổi trạng thái sửa
    setIsChangeInfor(false);
  };

  const RenderInfor = () => {
    return (
      <View style={{alignContent: 'flex-start', paddingHorizontal: 20}}>
        {/* Nếu sửa */}
        {isChangeInfor ? (
          <>
            <FormInput
              control={control}
              rules={{
                required: 'Nhập họ và tên',
              }}
              name="name"
              placeholder="Họ tên"
              image={IMAGE.phone}
              errors={errors}
            />
            <FormInput
              control={control}
              rules={{
                required: 'Nhập số tuổi',
              }}
              name="age"
              placeholder="Tuổi"
              image={IMAGE.pass}
              errors={errors}
            />
            <FormInput
              control={control}
              rules={{
                required: 'Nhập tên lớp học',
              }}
              name="class"
              placeholder="Lớp học"
              image={IMAGE.pass}
              errors={errors}
            />
          </>
        ) : (
          // Nếu không sửa
          <>
            <Text style={styles.text}>Họ và tên: {userInfor.name}</Text>
            <Text style={styles.text}>Tuổi: {userInfor.age}</Text>
            <Text style={styles.text}>Lớp: {userInfor.class}</Text>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 32, paddingVertical: 10}]}>
        Thông tin cá nhân:
      </Text>
      {/* Xoay xoay */}
      {loading ? <Text style={styles.text}>Loading...</Text> : <RenderInfor />}

      {/* Nếu sửa */}
      {isChangeInfor ? (
        <TouchableOpacity style={styles.btn} onPress={handleSubmit(updateUser)}>
          <Text style={{color: '#fff'}}>Cập nhật</Text>
        </TouchableOpacity>
      ) : (
        // Nếu xem
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setIsChangeInfor(!isChangeInfor)}>
          <Text style={{color: '#fff'}}>Sửa thông tin</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReduxExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#F48C75',
    borderRadius: 20,
  },
});
