// Import các thư viện cần thiết
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { ButtonShape } from '../../components/Button';
import FormInput from '../../components/FormInput';
import ImageLocal from '../../components/ImageLocal';
import IMAGE from '../../constants/image';
import { useNavigation } from '@react-navigation/native';

// Tạo màn hình Login
const LoginScreen = () => {

  // Sử dụng navigation để điều hướng
  const { navigate, goBack } = useNavigation();

  // Use hook form
  const {control, handleSubmit, formState: {errors}} = useForm({
    // Các value default
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  const onSubmit = data => {
    // Xử lý dữ liệu sau khi submit
    console.log(data);

    // Điều hướng tới màn hình home
    navigate('BottomTab')
  };

  // Màn hình đăng nhập
  return (
    <View style={styles.container}>

      {/* Component hiển thị hình ảnh */}
      <ImageLocal image={IMAGE.logo} />

      {/* Input (Form Input dùng chung) */}
      <FormInput
        control={control}
        rules={{
          required: 'Nhập số điện thoại của bạn',
          maxLength: 20,
        }}
        name="phone"
        placeholder="Số điện thoại"
        image={IMAGE.phone}
        errors={errors}
      />
      <FormInput
        control={control}
        rules={{
          required: 'Nhập mật khẩu của bạn',
          minLength: {
            value: 8,
            message: 'Mật khẩu trên 8 kí tự',
          },
        }}
        name="password"
        placeholder="Mật khẩu"
        image={IMAGE.pass}
        errors={errors}
      />

      {/* Button đăng nhập (Button dùng chung) */}
      <ButtonShape title="Đăng Nhập" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;

// Tạo style css cho component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  error: {
    alignSelf: 'flex-start',
    color: 'red',
  },
});
