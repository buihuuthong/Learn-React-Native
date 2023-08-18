// Import các thư viện cần thiết
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonShape } from '../../../components/Button';
import FormInput from '../../../components/FormInput';
import ImageLocal from '../../../components/ImageLocal';
import COLOR from '../../../constants/color';
import IMAGE from '../../../constants/image';

// Sử dụng lại màn hình Login của bài 9

const LoginScreen = () => {
  const {navigate} = useNavigation();

  // Use hook form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    // Các value default
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async data => {
    try {
      // Đăng nhập với email và mật khẩu vừa tạo

      await auth().signInWithEmailAndPassword(data.email, data.password);
      navigate('HomeScreen');
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
    }
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
          required: 'Nhập địa chỉ email của bạn',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Nhập đúng địa chỉ email',
          },
        }}
        name="email"
        placeholder="Email"
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

      {/* Tới màn hình đăng ký người dùng */}
      <Text
        style={{color: COLOR.purple}}
        onPress={() => navigate('RegisterScreen')}>
        Đăng ký người dùng
      </Text>
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
