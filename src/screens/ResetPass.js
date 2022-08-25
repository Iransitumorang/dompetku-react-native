/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';

const ResetPass = () => {
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const onLogin = () => {
    if (password === password2 && password !== ''){
      Alert.alert('Succes', 'Reset Success');
    } else {
      Alert.alert('Failed', 'Reset Failed');
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
            <Text style={styles.mainFont2}>Create and confirm your new password so you can login to Zwallet.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setPassword(text)} placeholder="Enter your password" icon="lock" secure={true} />
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setPassword2(text)} placeholder="Enter your password" icon="lock" secure={true} />
            </View>
          </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={onLogin} >
          <Text style={styles.btnLoginText}>Reset Password</Text>
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

export default ResetPass;