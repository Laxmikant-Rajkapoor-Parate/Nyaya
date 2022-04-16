import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import Colors from '../colors/Colors';

const InputField = ({image, hint, secure}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <TextInput
        style={styles.input}
        placeholder={hint}
        placeholderTextColor={'#909090'}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    width: '85%',
    marginVertical: '2%',
    borderRadius: 10,
  },
  image: {
    marginHorizontal: 20,
    height: 25,
    width: 25,
  },
  input: {
    paddingRight: 15,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Segoe UI',
    fontWeight: '600',
    color: Colors.normalText,
  },
});
