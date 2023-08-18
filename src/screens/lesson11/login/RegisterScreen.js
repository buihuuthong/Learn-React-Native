// Import các thư viện cần thiết
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {ButtonShape} from '../../../components/Button';
import FormInput from '../../../components/FormInput';
import ImageLocal from '../../../components/ImageLocal';
import IMAGE from '../../../constants/image';

// Sử dụng lại màn hình Login của bài 9

const RegisterScreen = () => {
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
      // Tạo user mới với email và mật khẩu

      await auth().createUserWithEmailAndPassword(data.email, data.password);
      navigate('LoginScreen');
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
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
      <ButtonShape title="Đăng Ký" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default RegisterScreen;

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
