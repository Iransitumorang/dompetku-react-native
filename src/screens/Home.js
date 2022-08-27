/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <ScrollView style={styleLocal.wrapper}>
        <View style={styleLocal.header}>
            <View style={styleLocal.leftHeader}>
                <Image
                source={require('../assets/images/robert.png')} style={{width: 62, height: 62, marginRight: 20}}
                />
                <View>
                    <Text style={styleLocal.balance}>Balance</Text>
                    <Text style={styleLocal.headerAmount}>Rp120.000</Text>
                </View>
            </View>
            <Icon style={styleLocal.belIcons} name="notifications-outline" size={37} color="black" />
        </View>
        <View style={styleLocal.transaction}>
            <TouchableOpacity style={styleLocal.transfer} >
                <Icon style={styleLocal.chooseTrans} name="arrow-up" size={30} color="black" />
                <Text style={styleLocal.topup}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLocal.transfer} >
                <Icon2 style={styleLocal.chooseTrans} name="plus" size={30} color="black" />
                <Text style={styleLocal.topup}>Top Up</Text>
            </TouchableOpacity>
        </View>
        <View style={styleLocal.mainTop}>
            <Text style={styleLocal.amount}>Transaction History</Text>
            <Text style={styleLocal.seeall}>See all</Text>
        </View>
        <View>
            <View style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View style={styleLocal.username}>
                        <View>
                            <Text style={styleLocal.amount}>Samuel Suhi</Text>
                            <Text style={styleLocal.desc}>Transfer</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styleLocal.amount, styleLocal.plusAmount]}>+Rp. 50.000</Text>
            </View>
            <View style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Spotify</Text>
                            <Text style={styleLocal.desc}>Subscription</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styleLocal.amount, styleLocal.minusAmount]}>-Rp 49.000</Text>
            </View>
            <View style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Netflix</Text>
                            <Text style={styleLocal.desc}>Subscription</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styleLocal.amount, styleLocal.minusAmount]}>-Rp 149.000</Text>
            </View>
            <View style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Bobi Sammy</Text>
                            <Text style={styleLocal.desc}>Transfer</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styleLocal.amount, styleLocal.plusAmount]}>+Rp 1.150.000</Text>
            </View>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        paddingVertical: 35,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    leftHeader: {
        flexDirection: 'row',
    },
    balance: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
    },
    headerAmount: {
        fontSize: 25,
        fontWeight: '700',
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 25,
        alignItems: 'center',
    },
    transfer: {
        flexDirection: 'row',
        marginRight: 15,
        backgroundColor: 'skyblue',
        width: 170,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        borderRadius: 20,
    },
    topup: {
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 10,
    },
    mainTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingBottom: 15,
    },
    userTrans: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: 'skyblue',
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
    minusAmount: {
        color: 'red',
    },
    plusAmount: {
        color: 'green',
    },
    seeall: {
        fontSize: 20,
        color: 'red',
        alignItems: 'center',
    },
    desc: {
        marginTop: 8,
        fontSize: 17,
    },
});

export default Home;