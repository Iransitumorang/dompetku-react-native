import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const TopUp = () => {
  return (
    <ScrollView>
      <View style={styleLocal.header}>
        <View style={styleLocal.headerTrans}>
          <Icon
            style={styleLocal.transIcon}
            name="arrowleft"
            size={30}
            color="black"
          />
          <Text style={styleLocal.transText}>Top Up</Text>
        </View>
        <View style={styleLocal.suhi}>
          <View>
            <Text style={styleLocal.samuel}>Samuel Suhi</Text>
            <Text style={styleLocal.number}>+62 813-8492-9994</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    paddingVertical: 45,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  suhi: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    elevation: 2,
    paddingLeft: 15,
    height: 80,
    borderRadius: 15,
  },
  continueBtn: {
    marginVertical: 80,
    backgroundColor: 'skyblue',
    height: 60,
    borderRadius: 20,
  },
  continueText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 18,
  },
});

export default TopUp;
