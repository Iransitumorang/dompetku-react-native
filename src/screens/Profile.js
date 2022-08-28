/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
        <TouchableOpacity>
        <Icon2 style={styleLocal.arrowLeft} name="arrowleft" size={35} color={'#4D4B57'} />
        </TouchableOpacity>
      <View style={styleLocal.header}>
            <Image
            source={require('../assets/images/robert.png')}
            style={{width: 75, height: 75, marginBottom: 15}}
            />
            <TouchableOpacity style={styleLocal.account}>
                <Icon name="pencil" size={14} style={{marginRight: 5}} />
                <Text style={styleLocal.edit}>Edit</Text>
            </TouchableOpacity>
            <Text style={styleLocal.robert}>Robert Chandler</Text>
            <Text style={styleLocal.edit}>+62 813-9387-7946</Text>
      </View>
      <TouchableOpacity style={{marginHorizontal: 25, marginTop: 35}}>
            <View style={styleLocal.mainGroup}>
                <Text style={styleLocal.mainText}>Personal Information</Text>
                <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={'#4D4B57'} />
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 25, marginTop: 35}}>
            <View style={styleLocal.mainGroup}>
                <Text style={styleLocal.mainText}>Change Password</Text>
                <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={'#4D4B57'} />
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 25, marginTop: 35}}>
            <View style={styleLocal.mainGroup}>
                <Text style={styleLocal.mainText}>Change PIN</Text>
                <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={'#4D4B57'} />
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 25, marginTop: 35}}>
            <View style={styleLocal.mainGroup}>
                <Text style={styleLocal.mainText}>Notification</Text>
                {/* <Switch value={this.state.value} /> */}
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? 'blue' : 'grey'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 25, marginTop: 35}}>
            <View style={styleLocal.mainGroup}>
                <Text style={styleLocal.mainText}>Logout</Text>
            </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    arrowLeft: {
      margin: 20,
    },
    header: {
        alignItems: 'center',
    },
    account: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'skyblue',
        height: 50,
        borderRadius: 10,
    },
    mainText: {
        fontSize: 16,
        fontWeight: '700',
    },
    edit: {
        fontSize: 18,
        fontWeight: '400',
    },
    robert: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 15,
    },
  });

export default Profile;
