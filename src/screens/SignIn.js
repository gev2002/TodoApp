import React, { useCallback, useState } from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import InputComponent from '../components/InputComponent';
import MailIcon from '../assets/images/icons/mail.png';
import LockIcon from '../assets/images/icons/lock.png';
import CheckMark from '../assets/images/icons/checkmark.png';
import ButtonComponent from '../components/ButtonComponent';
import ExternalButtons from '../components/ExternalButtons';
import { loginRequest } from '../store/actions/login';
import Account from '../helpers/Account';

function SignIn() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleSubmit = useCallback(async () => {
    if (form.username.length && form.password.length > 5) {
      setLoading(true);
      dispatch(loginRequest(form));
      const token = await Account.getToken();
      if (token) {
        navigation.navigate('LoginNavigation');
      }
      setLoading(false);
    }
  }, [form, loading]);
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ flex: 1, paddingTop: 100 }}
        colors={['#1253AA', '#05243E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.header}>
          <Image source={CheckMark} style={styles.mainImg} />
          <Text style={styles.title}>Welcome Back to DO IT </Text>
          <Text style={styles.text}>Have an other productive day !</Text>

        </View>
        <View style={styles.inputsView}>
          <InputComponent value={form.username} onChange={(text) => setForm({ ...form, username: text })} placeholder="E-mail" icon={MailIcon} styleProp={{ marginTop: -50 }} styleInput={{ marginTop: -50 }} />
          <InputComponent value={form.password} onChange={(text) => setForm({ ...form, password: text })} placeholder="Password" icon={LockIcon} styleProp={{ marginTop: 2 }} styleInput={{ marginTop: 10 }} />
        </View>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPassword}>forget password?</Text>
        </TouchableOpacity>
        <ButtonComponent load={loading} onSubmit={handleSubmit} title="Sign In" registerText="Don’t have an account?" signText="Sign Up" />
        <TouchableOpacity style={styles.buttonSign} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonBottomText}>
            Don't have an account?
            <Text style={styles.buttonSignText}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
        <ExternalButtons signText="Sign In" />

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    minWidth: 350,
    width: '100%',
    textAlign: 'center',
    minHeight: 800,
    height: '100%',
    alignSelf: 'center',

  },
  forgotPasswordButton: {
    right: 35,
    top: 45,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    flexBasis: 50,

  },
  mainImg: {
    marginTop: -15,
    marginBottom: 15,

  },
  header: {
    textAlign: 'center',
    alignItems: 'center',
    flexBasis: 250,
  },
  forgotPassword: {
    color: 'rgba(255, 255, 255, 0.80)',
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontSize: 14,
    letterSpacing: 1.26,
    marginTop: 0,
    marginBottom: 50,
    textDecorationLine: 'underline',

  },
  inputsView: {
    flexBasis: 30,
    alignContent: 'space-between',
  },
  buttonSign: {
    marginTop: -25,
    marginBottom: 30,
    textAlign: 'center',
    alignItems: 'center',

  },
  buttonBottomText: {
    marginTop: 15,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    width: 220,
    textDecorationLine: 'underline',
  },
  buttonSignText: {
    color: '#63D9F3',
    marginTop: 10,
    fontSize: 13,
    textAlign: 'center',
  },

});
export default SignIn;
