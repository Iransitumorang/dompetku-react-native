/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Icon from 'react-native-vector-icons/FontAwesome';

const PinSuccess = () => {
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Dompetku</Text>
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <View style={styleLocal.ceklis}>
                <Icon name="check" size={80} color="#FFFFFF" />
            </View>
            <Text style={styles.mainFont1}>PIN Successfully Created</Text>
            <Text style={styles.mainFont2}>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</Text>
          </View>

        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.btnLoginText}>Login Now</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    ceklis: {
      marginTop: 50,
      alignItems: 'center',
      backgroundColor: 'green',
      marginHorizontal: 156,
      borderRadius: 70,
      height: 100,
      padding: 10,
    },
  });

export default PinSuccess;