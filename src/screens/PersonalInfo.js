/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';

const PersonalInfo = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.goBack()} />
        <Text style={styleLocal.headerFont}>Personal Information</Text>
      </View>
      <View>
            <View style={styles.content}>
                <Text style={styleLocal.mainFont2}>
                We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
                </Text>
                <View style={styleLocal.main}>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.primary}>First Name</Text>
                        <Text style={styleLocal.plus62}>Robert</Text>
                    </View>
                </View>
                <View style={styleLocal.main}>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.primary}>Last Name</Text>
                        <Text style={styleLocal.plus62}>Chandler</Text>
                    </View>
                </View>
                <View style={styleLocal.main}>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.primary}>Verified E-mail</Text>
                        <Text style={styleLocal.plus62}>situmorang@mail.com</Text>
                    </View>
                </View>
                <View style={styleLocal.main}>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.primary}>Phone Number</Text>
                        <Text style={styleLocal.plus62}>+62 813-9387-7946</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ManageNumber')}>
                        <Text style={styleLocal.manage}>Manage</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: SECONDARY_COLOR,
    elevation: 3,
    textAlign: 'center',
    height: 80,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  mainFont2: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 50,
    lineHeight: 24,
  },
  plus62: {
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 5,
  },
  primary: {
    marginBottom: 5,
    flexBasis: 16,
    fontWeight: '400',
  },
  manage: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default PersonalInfo;
