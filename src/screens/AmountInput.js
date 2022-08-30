/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import { PRIMARY_COLOR } from '../styles/constant';
import { SECONDARY_COLOR } from '../styles/constant';

const AmountInput = ({ navigation }) => {
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
          <Text style={styleLocal.transText}>Transfer</Text>
        </View>
        <View style={styleLocal.suhi}>
          <Image
            source={require('../assets/images/sam-suhi.jpg')}
            style={{width: 62, height: 62, marginRight: 20}}
          />
          <View>
            <Text style={styleLocal.samuel}>Samuel Suhi</Text>
            <Text style={styleLocal.number}>+62 813-8492-9994</Text>
          </View>
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        <TextInput
          style={{fontSize: 60, fontWeight: '700', marginVertical: 25}}
          placeholderStyle={{color: '#A9A9A9', fontSize: 18}}
          placeholder="0.00"
        />
      </View>
      <Text style={{height: 50, fontSize: 22, textAlign: 'center'}}>
        Rp 120.000 Available
      </Text>
      <View style={styleLocal.noteBar}>
        <Icon2
          style={{paddingHorizontal: 20}}
          name="pencil"
          size={25}
          color="#A9A9A9"
        />
        <TextInput
          style={{fontSize: 22}}
          placeholderStyle={{color: '#A9A9A9', fontSize: 18}}
          placeholder="Add some notes"
        />
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('Confirmation')} style={styleLocal.continueBtn}>
            <Text style={styleLocal.continueText}>Continue</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  noteBar: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    marginTop: 25,
    borderBottomWidth: 2,
    marginHorizontal: 20,
    borderBottomColor: '#A9A9A9',
  },
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
    continueBtn: {
    marginVertical: 80,
    marginHorizontal: 20,
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

export default AmountInput;
