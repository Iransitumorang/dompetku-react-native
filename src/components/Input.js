/* eslint-disable prettier/prettier */
import {TextInput, View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({placeholder, icon}) => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={20} />
        </View>
      <View>
        <TextInput
          placeholder={placeholder}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        flexDirection: 'row',
        height: 50,
    },
    iconWrapper: {
      // height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Input;
