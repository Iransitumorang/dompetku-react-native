/* eslint-disable prettier/prettier */
import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Pin = () => {
  return (
    <View style={styleLocal.inputGroup}>
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
        <TextInput
        style={styleLocal.input}
        // onChangeText={onChangeNumber}
        // value={number}
        keyboardType="numeric"
      />
    </View>
  );
};

const styleLocal = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        width: 45,
        height: 60,
        borderWidth: 1,
        marginHorizontal: 9,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      inputGroup: {
        flexDirection: 'row',
        marginHorizontal: 10,
      },
});

export default Pin;
