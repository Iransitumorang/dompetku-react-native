/* eslint-disable prettier/prettier */
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({placeholder, icon, type, secure, onChange, value, defaultValue }) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={20} color="#F1A661" />
        </View>
      <View style={styles.inputWrapper}>
        <TextInput placeholder={placeholder} keyboardType={type} secureTextEntry={!showText} onChangeText={onChange} value={value} defaultValue={defaultValue} />
      </View>
      {secure && (
        <TouchableOpacity style={styles.iconWrapper} onPress={() => setShow(!showText)}>
        <View>
          <Icon name={showText ? 'eye-slash' : 'eye'} size={20} color="#F1A661" />
      </View>
        </TouchableOpacity>
      )}
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
    inputWrapper: {
      flex: 1,
    },
    iconWrapper: {
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Input;
