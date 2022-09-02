/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from '../styles/constant';

const ChangePin = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <Icon onPress={() => navigation.goBack()} name="arrow-left" size={20} color="black" />
        <Text style={styleLocal.headerFont}>Change PIN</Text>
      </View>
      <View>
        <View style={styles.content}>
          <Text style={styleLocal.mainFont2}>
          Enter your current 6 digits Zwallet PIN below to continue to the next steps.
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.btnLoginText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 45,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerFont: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#A9A9A9',
    marginHorizontal: 10,
  },
  flex: {
    flex: 1,
  },
  mainFont2: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 50,
  },
  plus62: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 5,
  },
});

export default ChangePin;
