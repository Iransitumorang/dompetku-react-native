/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';

const Confirmation = ({ navigation }) => {
  return (
    <ScrollView>
        <View style={styleLocal.header}>
            <View style={styleLocal.headerTrans}>
                <Icon onPress={() => navigation.goBack()} style={styleLocal.transIcon} name="arrowleft" size={30} color="black" />
                <Text style={styleLocal.transText}>Confirmation</Text>
            </View>
            <View style={styleLocal.suhi}>
                <Image
                    source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                />
                <View>
                    <Text style={styleLocal.samuel}>Samuel Suhi</Text>
                    <Text style={styleLocal.number}>+62 813-8492-9994</Text>
                </View>
            </View>
        </View>
      <View style={{marginHorizontal: 25, marginTop: 45}}>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.titleMain}>Amount</Text>
                        <Text style={styleLocal.amountMain}>Rp 100.000</Text>
                    </View>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.titleMain}>Balance Left</Text>
                        <Text style={styleLocal.amountMain}>Rp 20.000</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30}}>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.titleMain}>Date</Text>
                        <Text style={styleLocal.amountMain}>May 11, 2020</Text>
                    </View>
                    <View style={styleLocal.mainGroup}>
                        <Text style={styleLocal.titleMain}>Time</Text>
                        <Text style={styleLocal.amountMain}>12.20</Text>
                    </View>
                </View>
            </View>
            <View style={styleLocal.notesGroup}>
                <Text style={styleLocal.titleMain}>Notes</Text>
                <Text style={styleLocal.amountMain}>For buying some socks</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('TransferSuccess')} style={styleLocal.continueBtn}>
                <Text style={styleLocal.continueText}>Continue</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('TransferFailed')} style={styleLocal.continueBtn}>
                <Text style={styleLocal.continueText}>Transfer Failed</Text>
            </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    header: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 45,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    suhi: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: SECONDARY_COLOR,
        height: 100,
        borderRadius: 20,
        paddingLeft: 25,
        marginTop: 30,
    },
    headerTrans: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    samuel: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,
    },
    number: {
        fontSize: 18,
    },
    transText: {
        fontSize: 22,
        fontWeight: '700',
    },
    transIcon: {
        marginRight: 10,
    },
    mainGroup: {
        backgroundColor: SECONDARY_COLOR,
        elevation: 2,
        width: 170,
        height: 80,
        paddingLeft: 17,
        borderRadius: 15,
    },
    titleMain: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 10,
    },
    amountMain: {
        fontSize: 18,
        fontWeight: '700',
    },
    notesGroup: {
        backgroundColor: SECONDARY_COLOR,
        elevation: 2,
        paddingLeft: 15,
        height: 80,
        borderRadius: 15,
    },
    continueBtn: {
        marginTop: 80,
        marginBottom: 40,
        backgroundColor: PRIMARY_COLOR,
        height: 60,
        borderRadius: 20,
    },
    continueText: {
        fontSize:18,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 18,
    },
});

export default Confirmation;