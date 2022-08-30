/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';
import {THIRD_COLOR} from '../styles/constant';

const Login = ({ navigation }) => {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const onLogin = () =>  {
  //   if (email === 'tes@mail.com' && password === '12345'){
  //     Alert.alert('Succes', 'Login Success');
  //   } else {
  //     Alert.alert('Failed', 'Input the right account');
  //   }
  // };
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            {/* <Text style={styles.headerFont}>Dompetku</Text> */}
            {/* <Image
              source={require('../assets/images/dompetku.png')} style={{width: 62, height: 62, marginBottom: 15}}
                    /> */}
            <Image
              source={require('../assets/images/dompetku2.png')} style={{width: 300, height: 55}}
                    />
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Login</Text>
            <Text style={styles.mainFont2}>Login to your existing account to access {'\n'}
                  all the features in Dompetku.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your e-mail" icon="envelope" type="email-address"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your password" icon="lock" secure={true} />
            </View>
            {/* <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setEmail(text)} placeholder="Enter your e-mail" icon="envelope" type="email-address"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setPassword(text)} placeholder="Enter your password" icon="lock" secure={true} />
            </View> */}
          </View>
        <Text style={styles.forgotPass} onPress={() => navigation.navigate('ForgotPassword')}>Forgot password?</Text>
        {/* <TouchableOpacity style={styles.buttonLogin} onPress={onLogin}  > */}
        <TouchableOpacity style={styles.buttonLogin}  onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Don’t have an account? Let’s <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styleLocal.textSignup}> Sign Up</Text></TouchableOpacity></Text>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 30,
  },
  flex: {
    flex: 1,
  },
  textSignup: {
    fontWeight: '700',
    fontSize: 15,
    color: THIRD_COLOR,
    borderBottomWidth: 1,
  },
});

export default Login;