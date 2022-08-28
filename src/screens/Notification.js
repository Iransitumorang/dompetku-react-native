/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/Octicons';

const Notification = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={styleLocal.header}>
        <Icon name="arrow-left" size={20} color="black" />
        <Text style={styleLocal.headerFont}>Notification</Text>
      </TouchableOpacity>
      <Text style={styleLocal.today}>Today</Text>
      <View style={styleLocal.mainGroup}>
        <Icon name="arrow-down" size={20} color="#4CEDB3" style={{marginHorizontal: 20}} />
        <View>
            <Text style={styleLocal.mainText}>Transfered from Joshua Lee</Text>
            <Text style={styleLocal.amount}>Rp 220.000</Text>
        </View>
      </View>
      <View style={styleLocal.mainGroup}>
        <Icon name="arrow-up" size={20} color="#FF5B37" style={{marginHorizontal: 20}} />
        <View>
            <Text style={styleLocal.mainText}>Netflix subscription</Text>
            <Text style={styleLocal.amount}>Rp. 149.000</Text>
        </View>
      </View>
      <Text style={styleLocal.today}>This Week</Text>
      <View style={styleLocal.mainGroup}>
        <Icon name="arrow-up" size={20} color="#FF5B37" style={{marginHorizontal: 20}} />
        <View>
            <Text style={styleLocal.mainText}>Transfer to Jessica Lee</Text>
            <Text style={styleLocal.amount}>Rp. 100.000</Text>
        </View>
      </View>
      <View style={styleLocal.mainGroup}>
        <Icon name="arrow-down" size={20} color="#4CEDB3" style={{marginHorizontal: 20}} />
        <View>
            <Text style={styleLocal.mainText}>Top up from BNI E-Banking</Text>
            <Text style={styleLocal.amount}>Rp. 300.000</Text>
        </View>
      </View>
      <View style={styleLocal.mainGroup}>
        <Icon name="arrow-up" size={20} color="#FF5B37" style={{marginHorizontal: 20}} />
        <View>
            <Text style={styleLocal.mainText}>Transfer to Mama Mia</Text>
            <Text style={styleLocal.amount}>Rp. 50.000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#CA955C',
    paddingVertical: 45,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerFont: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 15,
  },
  today: {
    fontSize: 18,
    fontWeight: '400',
    marginVertical: 25,
    marginLeft: 20,
  },
  mainGroup: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    elevation: 3,
    borderRadius: 15,
  },
  mainText: {
    fontSize: 15,
    fontWeight: '400',
  },
  amount: {
    marginTop: 7,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Notification;
