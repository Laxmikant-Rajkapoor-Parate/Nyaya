import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Colors from '../colors/Colors';
import WelcomeScreenCarousal from '../components/WelcomeScreenCarousal';

const data = [1, 2, 3, 4];

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/nyayaWeight.webp')}
        resizeMode={'contain'}
        style={styles.image}
      />
      <Text style={styles.nyaya}>NYAYA</Text>
      <Text style={styles.tagline}>Right there for YOU</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('screen').width}
        showsHorizontalScrollIndicator={false}
        renderItem={({index}) => <WelcomeScreenCarousal index={index} />}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login SignUp');
        }}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    marginTop: 10,
    height: '10%',
  },
  nyaya: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.nyaya,
    letterSpacing: 0.5,
    fontFamily: 'Segoe UI',
  },
  tagline: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: '500',
    letterSpacing: 0.5,
    fontFamily: 'Segoe UI',
  },
  button: {
    backgroundColor: Colors.normalText,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    letterSpacing: 0.5,
    fontFamily: 'Segoe UI',
  },
});

export default WelcomeScreen;
