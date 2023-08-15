import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLOR from '../constants/corlor';
import ImageLocal from './ImageLocal';

// Chỗ này sẽ tạo ra các text input controller dùng chung

const FormInput = ({control, rules, name, placeholder, image, errors}) => {
  return (
    <>
      {/* Sử dung controller của react-hook-form */}
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.inputContainer}>
            <ImageLocal image={image} />
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={COLOR.gray}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name={name}
      />
      <Text style={styles.error}>{errors[name]?.message}</Text>
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#E0E0E0',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {
    width: '90%',
    color: '#747688',
  },
  error: {
    alignSelf: 'flex-start',
    color: 'red',
  },
});
