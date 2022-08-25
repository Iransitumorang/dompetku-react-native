/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
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

        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.btnLoginText}>Confirm</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default ConfirmOtp;