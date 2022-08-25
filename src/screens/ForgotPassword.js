/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
  const onLogin = () => {
    if (email === 'admin@mail.com'){
      Alert.alert('Succes', 'Email has send');
    } else {
      Alert.alert('Failed', 'Input your email');
    }
  };
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Dompetku</Text>
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Reset Password</Text>
            <Text style={styles.mainFont2}>Enter your Zwallet e-mail so we can send you a password reset link.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setEmail(text)} placeholder="Enter your e-mail" icon="envelope" type="email-address"/>
            </View>
          </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={onLogin} >
          <Text style={styles.btnLoginText}>Confirm</Text>
        </TouchableOpacity>
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
});

export default ForgotPassword;