import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Colors from '../colors/Colors';
import AppButton from '../components/AppButton';
import InputField from '../components/InputField';

const LoginSignUpScreen = () => {
  const [currentButton, setCurrentButton] = useState(1);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainQuote}>
          "Limit where LAW ends and JUSTICE starts"
        </Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../assets/loginImage.png')}
        />
        <View style={styles.changeContainer}>
          <TouchableOpacity
            onPress={() => setCurrentButton(1)}
            style={[
              styles.changeBox,
              {
                borderBottomColor:
                  currentButton === 1 ? Colors.normalText : Colors.white,
              },
            ]}>
            <Text style={styles.changeText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentButton(2)}
            style={[
              styles.changeBox,
              {
                borderBottomColor:
                  currentButton === 1 ? Colors.white : Colors.normalText,
              },
            ]}>
            <Text style={styles.changeText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <InputField
          image={require('../assets/username.png')}
          hint={'Username'}
        />
        <InputField
          image={require('../assets/password.png')}
          hint={'Password'}
          secure={true}
        />
        <AppButton name={currentButton === 1 ? 'Login' : 'SignUp'} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.optionalAuthContainer}>
          <TouchableOpacity>
            <Image
              style={styles.optionalAuthImage}
              source={require('../assets/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.optionalAuthImage}
              source={require('../assets/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.optionalAuthImage}
              source={require('../assets/twitter.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  mainQuote: {
    fontSize: 20,
    letterSpacing: 0.5,
    paddingTop: '10%',
    paddingHorizontal: '15%',
    color: Colors.normalText,
    fontFamily: 'Segoe UI',
    textAlign: 'center',
  },
  image: {
    height: 300,
  },
  changeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  changeBox: {
    borderBottomWidth: 2,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  changeText: {
    fontFamily: 'Segoe UI',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
    paddingBottom: 10,
    color: Colors.normalText,
  },
  or: {
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
    marginVertical: 20,
    color: Colors.normalText,
  },
  optionalAuthContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  optionalAuthImage: {
    width: 35,
    height: 35,
    opacity: 0.8,
    marginHorizontal: 20,
  },
});
