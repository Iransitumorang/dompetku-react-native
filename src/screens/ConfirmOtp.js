/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../styles/globals';

const ConfirmOtp = () => {
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Dompetku</Text>
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Please input your OTP</Text>
            <Text style={styles.mainFont2}>We have sent your OTP (One Time Password) code via Email</Text>
          </View>
          <View style={styleLocal.inputGroup}>
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
    </View>
        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.btnLoginText}>Confirm</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  input: {
      borderBottomColor: 'black',
      width: 45,
      height: 60,
      borderWidth: 1,
      marginHorizontal: 9,
      fontSize: 35,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    inputGroup: {
      flexDirection: 'row',
      marginHorizontal: 10,
    },
});

export default ConfirmOtp;