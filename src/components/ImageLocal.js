import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

// Chỗ này sẽ tạo component hiển thị hình ảnh dùng chung

const ImageLocal = ({ image, style, onPress, color, children, width, height }) => {
  if (!image) {
    return null;
  }
  // Nếu có nút nhấn
  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <FastImage
          source={image.source}
          tintColor={image.color || color}
          resizeMode={image.resizeMode ?? 'contain'}
          style={[{ width: image.width || width, height: image.height || height }, style]}
        >
          {children}
        </FastImage>
      </Pressable>
    );
  }
  // Mặc định
  return (
    <FastImage
      pointerEvents={'none'}
      source={image.source}
      tintColor={image.color || color}
      resizeMode={image.resizeMode ?? 'contain'}
      style={[{ width: width || image.width, height: height || image.height }, style]}
    >
      {children}
    </FastImage>
  );
};

export default ImageLocal;