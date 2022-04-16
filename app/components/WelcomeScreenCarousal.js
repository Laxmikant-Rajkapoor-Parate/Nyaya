import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import Colors from '../colors/Colors';

const indices = [0, 1, 2, 3];

const WelcomeScreenCarousal = ({index}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/hammer.jpg')} />
      <Text style={styles.tagline}>
        Join us to match the EXPERTISE that is never equaled!
      </Text>
      <View style={{flexDirection: 'row'}}>
        {indices.map(val => {
          return (
            <View
              style={[
                styles.ball,
                {
                  backgroundColor:
                    val === index ? Colors.normalText : Colors.grey,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default WelcomeScreenCarousal;

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: Dimensions.get('screen').width,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  image: {
    height: 350,
    width: 300,
    borderRadius: 20,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 30,
    color: Colors.normalText,
    letterSpacing: 0.5,
    fontFamily: 'Segoe UI',
  },
  ball: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    borderColor: Colors.normalText,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});
