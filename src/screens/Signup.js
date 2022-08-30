/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';

const Signup = ({navigation}) => {
  // const [username, setUsername] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const onLogin = () => {
  //   if (username !== '' && email === 'admin@mail.com' && password === 'admin'){
  //     Alert.alert('Succes', 'Signup Success');
  //   } else {
  //     Alert.alert('Failed', 'Signup Failed');
  //   }
  // };
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
        <Image
              source={require('../assets/images/dompetku2.png')} style={{width: 300, height: 55}}
                    />
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Sign Up</Text>
            <Text style={styles.mainFont2}>Create your account to access Dompetku.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input  placeholder="Enter your username" icon="user" type="text"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your e-mail" icon="envelope" type="email-address"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your password" icon="lock" secure={true} />
            </View>
            {/* <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setUsername(text)} placeholder="Enter your username" icon="user" type="text"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setEmail(text)} placeholder="Enter your e-mail" icon="envelope" type="email-address"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setPassword(text)} placeholder="Enter your password" icon="lock" secure={true} />
            </View> */}
          </View>
        {/* <Text style={styles.forgotPass}>Forgot password?</Text> */}

        {/* <TouchableOpacity style={styles.buttonLogin} onPress={onLogin} > */}
        <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={styles.buttonLogin} >
          <Text style={styles.btnLoginText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Already have an account? Let’s <TouchableOpacity  onPress={() => navigation.navigate('Login')}><Text style={styleLocal.textLogin}> Login </Text></TouchableOpacity></Text>
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
  textLogin: {
    fontWeight: '700',
    fontSize: 15,
    color: '#61481C',
    borderBottomWidth: 1,
  },
});

export default Signup;