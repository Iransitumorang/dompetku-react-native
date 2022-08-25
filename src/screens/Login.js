/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';

const Login = () => {
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Dompetku</Text>
        </View>
        <View  style={styles.content}>
                <Text style={styles.mainFont1}>Login</Text>
                <Text style={styles.mainFont2}>Login to your existing account to access {'\n'}
                all the features in Zwallet.</Text>
                    <Input placeholder="Enter your e-mail"
                        icon="envelope"
                        type="email-address"/>
                    <Input  placeholder="Enter your password"
                        icon="envelope"
                        type="email-address" />
        </View>
        <Text>Forgot password?</Text>

        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>Don’t have an account? Let’s Sign Up</Text>
    </ScrollView>
  );
};

export default Login;