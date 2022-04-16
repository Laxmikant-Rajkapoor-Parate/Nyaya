import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../colors/Colors';

const ProfileQueries = ({image, tagline}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.tagline}>{tagline}</Text>
    </TouchableOpacity>
  );
};

export default ProfileQueries;

const styles = StyleSheet.create({
  container: {
    width: 140,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.grey,
    paddingBottom: 20,
    marginHorizontal: 12,
  },
  image: {
    width: 80,
    height: 80,
    opacity: 0.7,
    marginVertical: 10,
  },
  tagline: {
    fontFamily: 'Segoe UI',
    fontSize: 16,
    color: Colors.normalText,
    letterSpacing: 0.5,
  },
});
