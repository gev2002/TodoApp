import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import AppleLogo from '../assets/images/icons/apple_logo.png';
import GoogleLogo from '../assets/images/icons/google_logo.png';

function ExternalButtons(props) {
  const { signText } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.externalContainer}>
      <Text style={styles.choose}>
        {signText}
        {' '}
        with:
      </Text>
      <TouchableOpacity style={styles.logoButton} onPress={() => navigation.navigate('VerificationScreen')}>
        <Image source={AppleLogo} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoButton}>
        <Image source={GoogleLogo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  externalContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'space-around',
    width: 250,
  },
  choose: {
    color: 'white',
    marginRight: 10,

  },
  logoButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  logo: {
    top: 10,
    left: 10,
  },
});
ExternalButtons.propTypes = {
  signText: PropTypes.string.isRequired,
};

export default ExternalButtons;
