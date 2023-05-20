import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable, 
} from 'react-native';
import { ButtonSingup } from '../Components/Button';
import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const { passwordVisibility, visibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const onPress = () => {
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <TextInput
          placeholder="Login"
          onChangeText={(newLogin) => setLogin(newLogin)}
          value={login}
          style={loginFocus ? styles.inputOnFocus : styles.input}
          onFocus={() => setLoginFocus(true)}
          onBlur={() => setLoginFocus(false)}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(newEmail) => setEmail(newEmail)}
          value={email}
          style={emailFocus ? styles.inputOnFocus : styles.input}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <View style={passwordFocus ? styles.passwordOnFocus : styles.password}>
          <TextInput
            placeholder="Password"
            onChangeText={(newPassword) => setPassword(newPassword)}
            value={password}
            secureTextEntry={passwordVisibility}
            autoCorrect={false}
            // enablesReturnKeyAutomatically
            style={styles.passwordField}
            // style={passwordFocus ? styles.passwordOnFocus : styles.password}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <Text>{visibility}</Text>
          </Pressable>
        </View>

        <ButtonSingup onPress={onPress} />
        <Text style={styles.text}>Do you already have an account? Log In</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 219,
    // marginTop: 263,
    backgroundColor: '#fff',
    // paddingBottom: 30,
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
    marginTop: 92,
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
    width: '100%',
    flexDirection: 'row',
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
    width: '100%',
    flexDirection: 'row',
  },
  passwordField: {
    width: '90%',
  },
  text: {
    marginTop: 16,
    // marginBottom: 78,
    marginBottom: 114,
    textAlign: 'center',
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
