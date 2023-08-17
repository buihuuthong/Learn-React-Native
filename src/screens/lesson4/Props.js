import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChildComponent = ({name, age, className}) => {
  return (
    <View>
      <Text style={styles.text}>Họ và tên: {name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>
      <Text style={styles.text}>Lớp: {className}</Text>
    </View>
  );
};

const ParentComponent = () => {
  return (
    <View style={styles.container}>
      <ChildComponent name="Nguyen Van A" age={18} className="20CT111" />
    </View>
  );
};

export default ParentComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
})