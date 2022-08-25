/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';

const Login = () => {
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Dompetku</Text>
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Login</Text>
            <Text style={styles.mainFont2}>Login to your existing account to access {'\n'}
                  all the features in Zwallet.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your e-mail"
                          icon="envelope"
                          type="email-address"/>
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input  placeholder="Enter your password"
                          icon="lock" />
            </View>
          </View>
        <Text style={styles.forgotPass}>Forgot password?</Text>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Don’t have an account? Let’s Sign Up</Text>
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

export default Login;