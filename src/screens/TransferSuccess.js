/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';
import { PLUS_AMOUNT } from '../styles/constant';

const TransferSuccess = ({ navigation }) => {
  return (
    <ScrollView>
        <View style={styleLocal.header}>
            <View style={styleLocal.headerTrans}>
                <Text style={styleLocal.transText}>Transfer Details</Text>
            </View>
        </View>
        <View style={styleLocal.ceklis}>
                <Icon name="check" size={80} color="#FFFFFF" />
            </View>
        <Text style={styleLocal.transText}>Transfer Success</Text>
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
            <Text style={styleLocal.sender}>From</Text>
            <View style={styleLocal.suhi}>
                <Image
                    source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                />
                <View>
                    <Text style={styleLocal.samuel}>Robert Chandler</Text>
                    <Text style={styleLocal.number}>+62 813-9387-7946</Text>
                </View>
            </View>
            <Text style={styleLocal.sender}>To</Text>
            <View style={styleLocal.suhi}>
                <Image
                    source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                />
                <View>
                    <Text style={styleLocal.samuel}>Samuel Suhi</Text>
                    <Text style={styleLocal.number}>+62 813-8492-9994</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styleLocal.backBtn}>
                <Text style={styleLocal.backText}>Back to Home</Text>
            </TouchableOpacity>
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
    ceklis: {
        marginVertical: 45,
        alignItems: 'center',
        backgroundColor: PLUS_AMOUNT,
        marginHorizontal: 156,
        borderRadius: 100,
        height: 100,
        padding: 10,
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
        textAlign: 'center',
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
    sender: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15,
        marginTop: 25,
    },
    notesGroup: {
        backgroundColor: SECONDARY_COLOR,
        elevation: 2,
        paddingLeft: 15,
        height: 80,
        borderRadius: 15,
    },
    backBtn: {
        marginVertical: 80,
        backgroundColor: PRIMARY_COLOR,
        height: 60,
        borderRadius: 20,
    },
    backText: {
        fontSize:18,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 18,
    },
});

export default TransferSuccess;