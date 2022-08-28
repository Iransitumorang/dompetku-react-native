/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const AddNumberPhone = () => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <Icon name="arrow-left" size={20} color="black" />
        <Text style={styleLocal.headerFont}>Add Phone Number</Text>
      </View>
      <View>
        <View style={styles.content}>
          <Text style={styleLocal.mainFont2}>
            You must enter your current password and then type your new password
            twice.
          </Text>
          <View style={styleLocal.inputWrapper}>
            <Icon2 name="call-outline" size={20} color="black" />
            <Text style={styleLocal.plus62}>+62</Text>
            <TextInput
              placeholder="Enter your phone number"
              style={{fontSize: 18}}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.btnLoginText}>Submit</Text>
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

export default AddNumberPhone;
