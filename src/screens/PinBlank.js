/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, SmoothPinCodeInput } from 'react-native';
import React from 'react';
import styles from '../styles/globals';

const PinBlank = () => {
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Text style={styles.headerFont}>Dompetku</Text>
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Create Security PIN</Text>
            <Text style={styles.mainFont2}>Create a PIN that’s contain 6 digits number for {'\n'} security purpose in Zwallet.</Text>
          </View>

          <SmoothPinCodeInput
            ref={this.pinInput}
            // value={code}
            onTextChange={code => this.setState({ code })}
            onFulfill={this._checkCode}
            onBackspace={this._focusePrevInput}
            />

        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.btnLoginText}>Confirm</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default PinBlank;