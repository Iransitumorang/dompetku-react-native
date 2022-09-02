/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
// import React from 'react';

const ApiVanilla = () => {
  const [dataUser, setDataUser] = useState({
      avatar: '',
      email: '',
      firstName: '',
      Lastname: '',
  });
  useEffect(() => {
  fetch('https://reqres.in/api/users/2')
  .then(response => response.json())
  .then(json => console.log(json));

  const dataForAPI = {
      'name': 'morpheus',
      'job': 'leader',
  };

  fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'aplication-json',
      },
      body: JSON.stringify(dataForAPI),
  });
  }, []);

  const getData = () => {
      fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        //   console.log(json);
          setDataUser(json.data);
      });
  };

  return (
    <View style={styleLocal.container}>
        <Text style={styleLocal.textTitle}>Api Vanilla Js </Text>
        {/* <TouchableOpacity style={styleLocal.postdata} onPress={getData}>
            <Text style={styleLocal.pdtext}>Get Data</Text>
        </TouchableOpacity> */}
        <View>{getData}</View>
        <Image source={{uri: dataUser.avatar}} style={{width: 100, height:100}}/>
        <Text> {`${dataUser.firstName} ${dataUser.Lastname}`} </Text>
        <Text> {dataUser.email} </Text>
        <TouchableOpacity style={styleLocal.postdata} onPress={getData}>
            <Text style={styleLocal.pdtext}>Post Data</Text>
        </TouchableOpacity>
    </View>
  );
};

const styleLocal = StyleSheet.create({
    container: {padding: 20},
    textTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: 'red',
    },
    postdata: {
        backgroundColor: 'skyblue',
    },
    pdtext: {
      textAlign: 'center',
    },
    });
export default ApiVanilla;
