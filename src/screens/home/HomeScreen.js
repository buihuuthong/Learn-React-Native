import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeCard } from '../../components/Card';
import ImageLocal from '../../components/ImageLocal';
import COLOR from '../../constants/corlor';
import IMAGE from '../../constants/image';

// Tạo màn hình home
const HomeScreen = () => {
  const userPress = () => {
    console.log('hihi');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.conTitle}>
        <Text>
          <Text style={styles.title}>Hi, Smart Things</Text>
          {'\n'}
          <Text style={styles.description}>Bắt đầu một ngày mới năng động</Text>
        </Text>
        <ImageLocal
          image={IMAGE.logo}
          style={styles.image}
          onPress={() => userPress()}
        />
      </View>

      {/* Thành phần có thể kéo/ lướt (Ẩn thanh trượt dọc) */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* Gọi các card ra sử dụng */}
          <HomeCard
            image={IMAGE.device}
            title="Thiết bị"
            color={COLOR.lightGreen}
          />
          <HomeCard
            image={IMAGE.room}
            title="Phòng"
            color={COLOR.lightOrange}
          />
        </View>
        <View style={styles.card}>
          <HomeCard image={IMAGE.ai} title="AI" color={COLOR.lightRed} />
          <HomeCard
            image={IMAGE.checkin}
            title="Checkin"
            color={COLOR.lightPurple}
          />
        </View>
        <View style={styles.card}>
          <HomeCard
            image={IMAGE.infobought}
            title="Thông tin mượn"
            color={COLOR.lightYellow}
          />
          <HomeCard image={IMAGE.orther} title="..." color={COLOR.lightBlue} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
  },
  conTitle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    color: '#12175E',
    fontWeight: 'bold',
  },
  image: {
    width: 57,
    height: 52,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});
