/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR} from '../styles/constant';
import {SECONDARY_COLOR} from '../styles/constant';

const Receiver = ({navigation}) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // const [text, setText] = useState('')

  // const handleSearchInput = (text) => {
  //   if(!text){
  //     setText('')
  //   } else {
  //     setText(text)
  //   }
  // }

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setRefreshing(true);
    return fetch('http://192.168.8.101:3000/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setRefreshing(false);
      })
      .catch(error => {
        setRefreshing(false);
      });
  };
  return (
    <View
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getData} />
      }>
      <View style={styleLocal.header}>
        <View style={styleLocal.headerTrans}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styleLocal.transIcon}
            name="arrow-back"
            size={37}
            color="black"
          />
          <Text style={styleLocal.transText}>Find Receiver</Text>
        </View>
        <View style={styleLocal.searchBar}>
          <Icon
            style={{paddingHorizontal: 20}}
            name="search-outline"
            size={25}
            color="black"
          />
          <TextInput
            style={{height: 50, fontSize: 22}}
            placeholderStyle={{color: 'red', fontSize: 18}}
            placeholder="Search receiver here"
            // handleSearchInput={handleSearchInput}
          />
        </View>
      </View>

      <View style={styleLocal.transaction}>
        <Text style={styleLocal.contacts}>Contacts</Text>
        <Text style={styleLocal.founds}>17 Contact Founds</Text>
      </View>
      <FlatList
        style={{marginBottom: 50}}
        data={data}
        // onEndReached={() => getData()} // ini untuk infinite scroll
        // onEndReachedThreshold={10} // ini untuk batas maksimal
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AmountInput')}
            style={styleLocal.userTrans}>
            <View style={styleLocal.imgName}>
              <Image
                source={{uri: item.avatar}}
                style={{width: 80, height: 80, marginRight: 20}}
              />
              <View style={styleLocal.username}>
                <Text style={styleLocal.amount}>{item.title}</Text>
                <Text style={styleLocal.desc}>{item.author}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
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
    marginBottom: 20,
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
