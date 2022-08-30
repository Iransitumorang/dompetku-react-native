/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {PRIMARY_COLOR} from '../styles/constant';
import {SECONDARY_COLOR} from '../styles/constant';
import {THIRD_COLOR} from '../styles/constant';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Payment = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <View style={styleLocal.headerTrans}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styleLocal.transIcon}
            name="arrowleft"
            size={30}
            color="black"
          />
          <Text style={styleLocal.transText}>Choose Your Payment</Text>
        </View>
      </View>
      <Text style={styleLocal.via}>Transfer Bank</Text>
      <View style={styleLocal.viabank}>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Bank BCA</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Bank BNI</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Bank Mandiri</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Bank BRI</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.lainnya}>Lainnya</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      </View>
      <Text style={styleLocal.via}>Agen</Text>
      <View style={styleLocal.viabank}>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Alfamart</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Indomart</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Lawson</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.texkBank}>Alfamidi</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={THIRD_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styleLocal.pilihBank}>
            <Text  style={styleLocal.lainnya}>Lainnya</Text>
            <Icon2 style={styleLocal.arrowRight} name="arrowright" size={20} color={PRIMARY_COLOR} />
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
  via: {
    marginLeft: 25,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 45,
    marginBottom: 15,
  },
  viabank: {
    marginHorizontal: 20,
    marginBottom: 25,
},
    pilihBank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 50,
        alignItems: 'center',
        marginBottom: 7,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 5,
    },
    texkBank: {
        fontSize: 25,
        fontWeight: '900',
        color: PRIMARY_COLOR,
    },
    lainnya: {
        color: THIRD_COLOR,
        fontSize: 20,
        fontWeight: '700',
    },
});

export default Payment;
