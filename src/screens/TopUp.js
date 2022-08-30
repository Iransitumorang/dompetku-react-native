/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';

const TopUp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <View style={styleLocal.headerTrans}>
          <Icon onPress={() => navigation.goBack()}
            style={styleLocal.transIcon}
            name="arrowleft"
            size={30}
            color="black"
          />
          <Text style={styleLocal.transText}>Top Up</Text>
        </View>
        <View style={styleLocal.headerAct}>
          <View style={styleLocal.iconPlusView}>
            <Icon onPress={() => navigation.navigate('Payment')}
              style={styleLocal.iconplus}
              name="plus"
              size={40}
              color="black"
            />
          </View>
          <View>
            <Text style={styleLocal.virtual}>Virtual Account Number</Text>
            <Text style={styleLocal.number}>2389 081393877946</Text>
          </View>
        </View>
      </View>
      <Text style={styleLocal.howto}>How to Top-Up</Text>
      <View style={{marginHorizontal: 20}}>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>1</Text>
          <Text style={styleLocal.description}>Go to the nearest ATM or you can use E-Banking.</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>2</Text>
          <Text style={styleLocal.description}>Type your security number on the ATM or E-Banking.</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>3</Text>
          <Text style={styleLocal.description}>Select “Transfer” in the menu</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>4</Text>
          <Text style={styleLocal.description}>Type the virtual account number that we provide you at the top.</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>5</Text>
          <Text style={styleLocal.description}>Type the amount of the money you want to top up.</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>6</Text>
          <Text style={styleLocal.description}>Read the summary details</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>7</Text>
          <Text style={styleLocal.description}>Press transfer / top up</Text>
        </View>
        <View style={styleLocal.descGroup}>
          <Text style={styleLocal.listNumber}>8</Text>
          <Text style={styleLocal.description}>You can see your money in Zwallet within 3 hours.</Text>
        </View>
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
  headerAct: {
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
  iconPlusView: {
    backgroundColor: PRIMARY_COLOR,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  iconplus: {
    textAlign: 'center',
    marginTop: 5,
  },
  virtual: {
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
  howto: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 35,
  },
  descGroup: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    height: 75,
    paddingLeft: 15,
    elevation: 2,
  },
  listNumber: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 27,
    paddingRight: 25,
    fontWeight: 'bold',
  },
});

export default TopUp;
