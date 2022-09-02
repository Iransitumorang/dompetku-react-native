/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, RefreshControl, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { PRIMARY_COLOR } from '../../styles/constant';
import { SECONDARY_COLOR } from '../../styles/constant';

const Test = (navigation) => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
      setRefreshing(true);
        return fetch('http://192.168.8.101:3000/posts')
          .then(response => response.json())
          .then(json => {
            setData(json);
            console.log(json);
            setRefreshing(false);
          })
          .catch(error => {
            console.error(error);
            setRefreshing(false);
          });
      };

  return (
        <View style={{flex: 1, backgroundColor: 'grey', paddingTop: 15}} >
          <Text style={{textAlign: 'center', color: 'black', backgroundColor: 'skyblue',fontSize: 25, elevation: 2, margin: 10, paddingVertical: 15}}>Test json server</Text>
          <FlatList
            data={data}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={getData}/>
                }
                renderItem={({item}) => (
                  <>
                <View style={{backgroundColor: 'green', elevation: 2, margin: 20, padding: 15, flex: 1}}>
                    <Image source={{uri: item.avatar}} style={{width: 80, height: 80, marginRight: 20}} />
                    <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>{item.title}</Text>
                    <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>{item.author}</Text>
                </View>
                <View>
            <TouchableOpacity onPress={() => navigation.navigate('AmountInput')} style={styleLocal.userTrans}>
                <View style={styleLocal.imgName}>
                <Image source={{uri: item.avatar}} style={{width: 50, height: 50, marginRight: 20, resizeMode: 'center'}} />
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
                <Image source={{uri: item.avatar}} style={{width: 50, height: 50, marginRight: 20, resizeMode: 'center'}} />
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
                <Image source={{uri: item.avatar}} style={{width: 50, height: 50, marginRight: 20, resizeMode: 'center'}} />
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
                <Image source={{uri: item.avatar}} style={{width: 50, height: 50, marginRight: 20, resizeMode: 'center'}} />
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
                <Image source={{uri: item.avatar}} style={{width: 50, height: 50, marginRight: 20, resizeMode: 'center'}} />
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
                <Image source={{uri: item.avatar}} style={{width: 50, height: 50, marginRight: 20, resizeMode: 'center'}} />
                    <View>
                        <View>
                            <Text style={styleLocal.amount}>Dody Besari</Text>
                            <Text style={styleLocal.desc}>+62 0812-4334-3561</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
               </View>
            </>
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

export default Test;
