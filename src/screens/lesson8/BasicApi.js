import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const BasicApi = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://64ddcc50825d19d9bfb18747.mockapi.io/users',
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
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
        Danh sách từ Fetch API:
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

export default BasicApi;

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
