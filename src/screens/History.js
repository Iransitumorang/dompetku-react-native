/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const History = () => {
  return (
    <ScrollView>
        <View style={styleLocal.header}>
            <View style={styleLocal.headerTrans}>
                <Icon style={styleLocal.transIcon} name="arrow-back" size={37} color="black" />
                <Text style={styleLocal.transText}>History</Text>
            </View>
        </View>
        <View style={styleLocal.transaction}>
           <Text style={styleLocal.thisWeek}>In This Week</Text>
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
           <Text style={styleLocal.thisWeek}>This Month</Text>
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
            <View style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                    <Image
                        source={require('../assets/images/sam-suhi.jpg')} style={{width: 62, height: 62, marginRight: 20}}
                    />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Momo Taro</Text>
                            <Text style={styleLocal.desc}>Transfer</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styleLocal.amount, styleLocal.minusAmount]}>-Rp 200.000</Text>
            </View>
        </View>
        <View style={styleLocal.actionBottom}>
            <View style={styleLocal.actionBottom1}>
                <Icon style={styleLocal.actionBottomChild} name="arrow-up" size={37} color="red" />
                <Icon style={[styleLocal.actionBottomChild, styleLocal.abc2]} name="arrow-down" size={37} color="green" />
            </View>
            <View style={styleLocal.actionBottom2}>
                <Text style={styleLocal.actionBottomChild3}>Filter by Date</Text>
            </View>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
    header: {
        backgroundColor: 'skyblue',
        paddingVertical: 35,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerTrans: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transText: {
        fontSize: 22,
        fontWeight: '700',
    },
    transIcon: {
        marginRight: 10,
    },
    thisWeek: {
        fontWeight: '700',
        marginVertical: 25,
        fontSize: 20,
        marginLeft: 25,
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
    actionBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 25,
        alignItems: 'center',
    },
    actionBottom1: {
        flexDirection: 'row',
    },
    actionBottomChild: {
        backgroundColor: 'skyblue',
        width: 60,
        height: 55,
        textAlign: 'center',
        paddingTop: 8,
        borderRadius: 20,
    },
    abc2: {
        marginHorizontal: 20,
    },
    actionBottomChild3: {
        backgroundColor: 'skyblue',
        width: 180,
        height: 55,
        fontSize: 18,
        fontWeight: '700',
        borderRadius: 20,
        textAlign: 'center',
        paddingTop: 13,
    },
});

export default History;