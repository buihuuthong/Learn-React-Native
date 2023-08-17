import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import userApi from '../../services/userApi';

const AxiosApi = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // Gọi api từ category api

      const response = await userApi.getAll();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error geting data:', error.response);
      setLoading(false);
    }
  };

  const renderItem = ({item}) => (
    <View style={{paddingVertical: 20}}>
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Age: {item.age}</Text>
      <Text style={styles.text}>Class: {item.class}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 32, paddingVertical: 10}]}>
        Danh sách từ Axios API:
      </Text>
      {loading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default AxiosApi;

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
});
