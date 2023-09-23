import React from 'react';
import {Text, TextInput} from 'react-native';

const InputProps = ({value, placehoder, onChangeText}) => {
  return (
    <>
      <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 4}}>
        {placehoder}
      </Text>
      <TextInput
        value={value}
        placeholder={placehoder}
        onChangeText={onChangeText}
        style={{
          borderRadius: 10,
          borderWidth: 1,
          paddingHorizontal: 12,
        }}
      />
    </>
  );
};

export default InputProps;
