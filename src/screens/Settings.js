import React, { useCallback, useEffect } from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import UserIcon from '../assets/images/icons/settingsIcons/user-settings.png';
import CommentIcon from '../assets/images/icons/settingsIcons/comment-settings.png';
import LightIcon from '../assets/images/icons/settingsIcons/light-settings.png';
import AnalyzeIcon from '../assets/images/icons/settingsIcons/analyze-settings.png';
import LogoutIcon from '../assets/images/icons/settingsIcons/logout.png';
import ArrowIcon from '../assets/images/icons/arrow-right.png';
import ArrowLeft from '../assets/images/icons/arrow-left.svg';
import Account from '../helpers/Account';
import Wrapper from '../components/Wrapper';

function Settings() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        opacity: 0,
        height: 0,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.arrowLeft}>
          <ArrowLeft width={18} height={18} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#1253AA',
      },
      headerTintColor: 'white',
    });
  }, []);

  const handleLogout = useCallback(async () => {
    const deleted = await Account.delete();
    if (deleted) {
      navigation.navigate('SignIn');
    }
  }, []);
  return (
    <Wrapper>
      <LinearGradient
        style={{ flex: 1, paddingTop: 100 }}
        colors={['#1253AA', '#05243E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={styles.navigateBar}>
          <Image style={styles.icons} source={UserIcon} />
          <Text style={styles.title}>Profile</Text>
          <Image style={styles.arrowIcon} source={ArrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.navigateBar}>
          <Image style={styles.icons} source={CommentIcon} />
          <Text style={styles.title}>Conversations</Text>
          <Image style={styles.arrowIcon} source={ArrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.navigateBar}>
          <Image style={styles.icons} source={LightIcon} />
          <Text style={styles.title}>Projects</Text>
          <Image style={styles.arrowIcon} source={ArrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.navigateBar}>
          <Image style={styles.icons} source={AnalyzeIcon} />
          <Text style={styles.title}>Terms and Policies</Text>
          <Image style={styles.arrowIcon} source={ArrowIcon} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Image source={LogoutIcon} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  navigateBar: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'white',
    height: 60,
    flexDirection: 'row',
  },
  icons: {
    marginTop: 15,
    marginLeft: 10,
    paddingLeft: 30,
    height: 28,
    width: 30,
  },
  title: {
    marginTop: 13,
    marginLeft: 20,
    color: '#ffffff',
    fontSize: 20,
  },
  logoutButton: {
    marginTop: 100,
    marginHorizontal: 120,
    backgroundColor: '#fff',
    width: 150,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 35,
  },
  logoutText: {
    color: '#DC4343',
    marginLeft: 5,
  },
  arrowIcon: {
    position: 'absolute',
    right: 45,
    top: 22,
  },
  arrowLeft: {
    marginLeft: 15,
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingTop: 8,
    paddingLeft: 7,
  },
});
export default Settings;
