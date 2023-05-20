import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard, 
} from 'react-native';
import { ButtonLogin } from '../Components/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const onPress = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>      
          <Text style={styles.title}>Log In</Text>
          <TextInput
            placeholder="Email"
            onChangeText={(newEmail) => setEmail(newEmail)}
            value={email}
            style={emailFocus ? styles.inputOnFocus : styles.input}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(newPassword) => setPassword(newPassword)}
            value={password}
            style={passwordFocus ? styles.passwordOnFocus : styles.password}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <ButtonLogin onPress={onPress} />
          <Text style={styles.text}>Do you have no account? Sign Up</Text>       
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 279,
    marginTop: 323,
    backgroundColor: '#fff',
    // borderRadius: '25px 25px 0 0',
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  inputOnFocus: {
    borderColor: '#FF6C00',
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    // fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: 'center',
    color: '#212121',
  },
  password: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 43,
  },
  passwordOnFocus: {
    borderColor: '#FF6C00',
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 43,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  text: {
    marginTop: 16,
    // marginBottom: 78,
    marginBottom: 134,
    textAlign: 'center',
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
