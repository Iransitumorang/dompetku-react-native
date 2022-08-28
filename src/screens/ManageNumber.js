/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Octicons';

const ManageNumber = () => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <Icon name="arrow-left" size={20} color="black" />
        <Text style={styleLocal.headerFont}>Manage Phone Number</Text>
      </View>
      <View>
        <View style={styles.content}>
          <Text style={styleLocal.mainFont2}>
            You can only delete the phone number and then you must add another
            phone number.
          </Text>
          <View style={styleLocal.main}>
              <View style={styleLocal.mainGroup}>
                  <Text style={styleLocal.primary}>Primary</Text>
                  <Text style={styleLocal.plus62}>+62 813 9387 7946</Text>
              </View>
                    <Icon2 name="trash" size={35} color="#BBBBBE" />
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
    backgroundColor: '#CA955C',
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
    backgroundColor: 'white',
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
});

export default ManageNumber;
