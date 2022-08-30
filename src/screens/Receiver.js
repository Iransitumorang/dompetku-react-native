/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';

const Receiver = ({ navigation }) => {
  return (
    <ScrollView>
        <View style={styleLocal.header}>
            <View style={styleLocal.headerTrans}>
                <Icon onPress={() => navigation.goBack()} style={styleLocal.transIcon} name="arrow-back" size={37} color="black" />
                <Text style={styleLocal.transText}>Find Receiver</Text>
            </View>
            <View  style={styleLocal.searchBar}>
                <Icon style={{paddingHorizontal: 20}} name="search-outline" size={25} color="black" />
                <TextInput style={{height: 50, fontSize: 22}} placeholderStyle={{ color: 'red', fontSize: 18 }} placeholder="Search receiver here" />
            </View>
        </View>
        <View style={styleLocal.transaction}>
           <Text style={styleLocal.contacts}>Contacts</Text>
           <Text style={styleLocal.founds}>17 Contact Founds</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View style={styleLocal.username}>
                        <View>
                            <Text style={styleLocal.amount}>Samuel Suhi</Text>
                            <Text style={styleLocal.desc}>+62 813-8492-9994</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Julia Syen</Text>
                            <Text style={styleLocal.desc}>+62 812-3942-3656</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Bobi Sammy</Text>
                            <Text style={styleLocal.desc}>+62 813-5982-2940</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Juliana Rich</Text>
                            <Text style={styleLocal.desc}>+62 811-6212-5663</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Michi Mei</Text>
                            <Text style={styleLocal.desc}>+62 813-3891-3838</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Dody Besari</Text>
                            <Text style={styleLocal.desc}>+62 0812-4334-3561</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        backgroundColor: SECONDARY_COLOR,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
    },
    header: {
        backgroundColor: PRIMARY_COLOR,
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
    contacts: {
        fontWeight: '700',
        fontSize: 20,
        marginLeft: 25,
    },
    transaction: {
        marginVertical: 25,
    },
    founds: {
        marginLeft: 25,
    },
    userTrans: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: SECONDARY_COLOR,
        alignItems: 'center',
        elevation: 3,
    },
    imgName: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    amount: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
    desc: {
        marginTop: 8,
        fontSize: 17,
    },
});

export default Receiver;