import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../colors/Colors';
import ProfileQueries from '../components/ProfileQueries';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.settingContainer}>
        <Image
          source={require('../assets/settings.png')}
          style={styles.settingImage}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Image
          source={require('../assets/myImage.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.infoContainerDescription}>
          <Text style={styles.name}>Laxmikant Parate</Text>
          <Text style={styles.designation}>Senior Advocate</Text>
        </View>
      </View>
      <Text style={styles.followers}>0 Following . 0 Followers</Text>
      <View style={styles.casesContainer}>
        <View style={styles.itemCase}>
          <ProfileQueries
            image={require('../assets/createCase.png')}
            tagline={'Create Case'}
          />
          <ProfileQueries
            image={require('../assets/yourCase.png')}
            tagline={'Your Cases'}
          />
        </View>
        <View style={styles.itemCase}>
          <ProfileQueries
            image={require('../assets/appointment.png')}
            tagline={'Appointments'}
          />
          <ProfileQueries
            image={require('../assets/transaction.png')}
            tagline={'Transactions'}
          />
        </View>
      </View>
      <View style={styles.premiumContainer} />
      <TouchableOpacity style={styles.premiumItems}>
        <Image
          resizeMode="contain"
          source={require('../assets/premium.png')}
          style={styles.premiumImage}
        />
        <Text style={styles.premiumTagline}>Try Premium</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  settingContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
  },
  settingImage: {
    height: 25,
    width: 25,
    marginHorizontal: 30,
    marginTop: 25,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: '10%',
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  infoContainerDescription: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Segoe UI',
    letterSpacing: 0.5,
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 1,
    color: Colors.normalText,
  },
  designation: {
    fontFamily: 'Segoe UI',
    letterSpacing: 0.5,
    fontSize: 14,
    marginVertical: 1,
    color: Colors.normalText,
  },
  followers: {
    fontFamily: 'Segoe UI',
    fontSize: 15,
    marginVertical: 10,
    color: Colors.normalText,
  },
  casesContainer: {
    width: '100%',
  },
  itemCase: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  premiumContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: Colors.premium,
    transform: [{scaleX: 1.4}],
    top: 150,
    position: 'absolute',
    top: '70%',
    alignItems: 'center',
  },
  premiumImage: {
    width: 120,
    height: 110,
  },
  premiumTagline: {
    fontFamily: 'Segoe UI',
    color: Colors.premiumTagline,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  premiumItems: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: '74%',
  },
});
