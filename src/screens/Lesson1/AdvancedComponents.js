import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';

const AdvancedComponents = () => {
  const [data, setData] = useState([
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
    { id: 11, title: 'Item 11' },
    { id: 12, title: 'Item 12' },
    { id: 13, title: 'Item 13' },
    { id: 14, title: 'Item 14' },
    { id: 15, title: 'Item 15' },
    { id: 16, title: 'Item 16' },
    { id: 17, title: 'Item 17' },
    { id: 18, title: 'Item 18' },
    { id: 19, title: 'Item 19' },
    { id: 20, title: 'Item 20' },
    { id: 21, title: 'Item 21' },
    { id: 22, title: 'Item 22' },
    { id: 23, title: 'Item 23' },
    { id: 24, title: 'Item 24' },
    { id: 25, title: 'Item 25' },
    { id: 26, title: 'Item 26' },
    { id: 27, title: 'Item 27' },
    { id: 28, title: 'Item 28' },
    { id: 29, title: 'Item 29' },
    { id: 30, title: 'Item 30' },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulate refreshing data
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <Text style={styles.title}>SafeAreaView, FlatList, ScrollView</Text>

        {/* FlatList */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={styles.flatList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  flatList: {
    marginTop: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default AdvancedComponents;
