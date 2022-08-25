/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangePassword = () => {
  const [current, setCurrent] = React.useState('');
  const [newPass, steNewPass] = React.useState('');
  const [repeat, setRepeat] = React.useState('');
  const onLogin = () => {
    if ( current !== '' && newPass === repeat && newPass !== ''){
      Alert.alert('Succes', 'Change Password Success');
    } else {
      Alert.alert('Failed', 'Change Password Failed');
    }
  };
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styleLocal.header}>
            <Icon name="arrow-left" size={20} color="black" />
            <Text style={styleLocal.headerFont}>Change Password</Text>
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styleLocal.mainFont2}>You must enter your current password and then type your new password twice.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setCurrent(text)} placeholder="Current Password" icon="lock" secure={true} />
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => steNewPass(text)} placeholder="New Password" icon="lock" secure={true} />
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input onChange={text => setRepeat(text)} placeholder="Repeat Password" icon="lock" secure={true} />
            </View>
          </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={onLogin} >
          <Text style={styles.btnLoginText}>ChangePassword</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 45,
        alignItems: 'center',
        marginLeft: 20,
    },
    headerFont: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 15,
    },
    inputWrapper: {
        marginBottom: 30,
    },
    flex: {
        flex: 1,
    },
    mainFont2: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 50,
    },
});

export default ChangePassword;