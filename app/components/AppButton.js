import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import Colors from '../colors/Colors';

const AppButton = ({name}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        console.log('clicked');
      }}>
      <Text style={styles.name}>{name}</Text>
    </TouchableHighlight>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.normalText,
    width: '85%',
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Segoe UI',
    letterSpacing: 0.5,
    fontSize: 16,
    paddingVertical: 10,
    color: Colors.white,
  },
});
