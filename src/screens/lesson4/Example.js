import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


// props
const ChildComponent = ({name, age, className}) => {
  return (
    <View>
      <Text style={styles.text}>Họ và tên: {name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>
      <Text style={styles.text}>Lớp: {className}</Text>
    </View>
  );
};

const ExampleComponent = () => {
    // state
  const [random, setRandom] = useState(false);

  const ramdomPress = () => {
    setRandom(!random);
  };

  return (
    <View style={styles.container}>
        {/* render có điều kiện (nếu random = true / toán tử 3 ngôi) */}
      {random ? (
        <ChildComponent name="Nguyen Van B" age={20} className="20CT112" />
      ) : (
        <ChildComponent name="Nguyen Van A" age={18} className="20CT111" />
      )}
      <TouchableOpacity style={styles.btn} onPress={() => ramdomPress()}>
        <Text style={{color: '#fff'}}>Thay đổi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExampleComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
