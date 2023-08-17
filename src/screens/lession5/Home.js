import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NormalButton} from '../../components/Button';
import COLOR from '../../constants/color';

// Composition trong RN, sử dụng nhiều thành phần để tạo thành 1 thành phần lớn trong RN
// Trong bài đang sử dụng Button từ thư mục component, color từ constants

const BasicComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: COLOR.purple}]}>Xin chào!</Text>
      <NormalButton title="Nhấn vào tôi" />
    </View>
  );
};

export default BasicComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
