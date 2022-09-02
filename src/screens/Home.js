/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
// import React, {useEffect} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {PRIMARY_COLOR} from '../styles/constant';
import {SECONDARY_COLOR} from '../styles/constant';
import {MINUS_AMOUNT} from '../styles/constant';
import {PLUS_AMOUNT} from '../styles/constant';

const Home = ({navigation}) => {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json));
  // });

  return (
    <ScrollView style={styleLocal.wrapper}>
      <View style={styleLocal.header}>
        <View style={styleLocal.leftHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/images/robert.png')}
              style={{width: 62, height: 62, marginRight: 20}}
            />
          </TouchableOpacity>
          <View>
            <Text style={styleLocal.balance}>Balance</Text>
            <Text style={styleLocal.headerAmount}>Rp 120.000</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon
            style={styleLocal.belIcons}
            name="notifications-outline"
            size={37}
            color={MINUS_AMOUNT}
          />
        </TouchableOpacity>
      </View>
      <View style={styleLocal.transaction}>
        <TouchableOpacity
          style={styleLocal.transfer}
          onPress={() => navigation.navigate('Receiver')}>
          <Icon
            style={styleLocal.chooseTrans}
            name="arrow-up"
            size={30}
            color={PRIMARY_COLOR}
          />
          <Text style={styleLocal.topup}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleLocal.transfer}
          onPress={() => navigation.navigate('TopUp')}>
          <Icon2
            style={styleLocal.chooseTrans}
            name="plus"
            size={30}
            color={PRIMARY_COLOR}
          />
          <Text style={styleLocal.topup}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styleLocal.mainTop}>
        <Text style={styleLocal.amount}>Transaction History</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransactionDetail')}>
          <Text style={styleLocal.seeall}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styleLocal.userTrans}>
          <View style={styleLocal.imgName}>
            <Image
              source={require('../assets/images/sam-suhi.jpg')}
              style={{width: 62, height: 62, marginRight: 20}}
            />
            <View style={styleLocal.username}>
              <View>
                <Text style={styleLocal.amount}>Samuel Suhi</Text>
                <Text style={styleLocal.desc}>Transfer</Text>
              </View>
            </View>
          </View>
          <Text style={[styleLocal.amount, styleLocal.plusAmount]}>
            +Rp. 50.000
          </Text>
        </View>
        <View style={styleLocal.userTrans}>
          <View style={styleLocal.imgName}>
            <Image
              source={require('../assets/images/sam-suhi.jpg')}
              style={{width: 62, height: 62, marginRight: 20}}
            />
            <View>
              <View>
                <Text style={styleLocal.amount}>Spotify</Text>
                <Text style={styleLocal.desc}>Subscription</Text>
              </View>
            </View>
          </View>
          <Text style={[styleLocal.amount, styleLocal.minusAmount]}>
            -Rp 49.000
          </Text>
        </View>
        <View style={styleLocal.userTrans}>
          <View style={styleLocal.imgName}>
            <Image
              source={require('../assets/images/sam-suhi.jpg')}
              style={{width: 62, height: 62, marginRight: 20}}
            />
            <View>
              <View>
                <Text style={styleLocal.amount}>Netflix</Text>
                <Text style={styleLocal.desc}>Subscription</Text>
              </View>
            </View>
          </View>
          <Text style={[styleLocal.amount, styleLocal.minusAmount]}>
            -Rp 149.000
          </Text>
        </View>
        <View style={styleLocal.userTrans}>
          <View style={styleLocal.imgName}>
            <Image
              source={require('../assets/images/sam-suhi.jpg')}
              style={{width: 62, height: 62, marginRight: 20}}
            />
            <View>
              <View>
                <Text style={styleLocal.amount}>Bobi Sammy</Text>
                <Text style={styleLocal.desc}>Transfer</Text>
              </View>
            </View>
          </View>
          <Text style={[styleLocal.amount, styleLocal.plusAmount]}>
            +Rp 1.150.000
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
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
    backgroundColor: SECONDARY_COLOR,
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
  minusAmount: {
    color: MINUS_AMOUNT,
  },
  plusAmount: {
    color: PLUS_AMOUNT,
  },
  seeall: {
    fontSize: 20,
    color: 'red',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  desc: {
    marginTop: 8,
    fontSize: 17,
  },
});

export default Home;
