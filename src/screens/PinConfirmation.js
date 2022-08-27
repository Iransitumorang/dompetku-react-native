/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const PinConfirmation = () => {
  return (
    <ScrollView>
        <View style={styleLocal.header}>
            <View style={styleLocal.headerTrans}>
                <Icon style={styleLocal.transIcon} name="arrowleft" size={30} color="black" />
                <Text style={styleLocal.transText}>Enter Your PIN</Text>
            </View>
        </View>
      <View style={{marginHorizontal: 25, marginTop: 45}}>
            <View style={styleLocal.notesGroup}>
                <Text style={styleLocal.titleMain}>Enter PIN to Transfer</Text>
                <Text style={styleLocal.enter}>Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
            </View>
            <TouchableOpacity style={styleLocal.tfButton}>
                <Text style={styleLocal.tfText}>Transfer Now</Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        paddingVertical: 45,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTrans: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    transText: {
        fontSize: 22,
        fontWeight: '700',
    },
    transIcon: {
        marginRight: 10,
    },
    notesGroup: {
    },
    titleMain: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
    },
    enter: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 25,
        paddingHorizontal: 25,
    },
    tfButton: {
        marginVertical: 80,
        backgroundColor: 'skyblue',
        height: 60,
        borderRadius: 20,
    },
    tfText: {
        fontSize:18,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 18,
    },
});

export default PinConfirmation;