/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, StyleSheet, Image} from 'react-native';
import React, { Component } from 'react';
import { StackActions } from '@react-navigation/native';
import {PRIMARY_COLOR} from '../styles/constant';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'));
        }, 2500);
    }

render() {
  return (
    <View style={styleLocal.splash} >
       <Image
            source={require('../assets/images/dompetku.png')} style={{width: 300, height: 100, marginBottom: 20}}
            resizeMode="contain"
        />
       <Image
            source={require('../assets/images/dompetku2.png')} style={{width: 250, height: 35}}
        />
    </View>
  );
}
}

const styleLocal = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        // backgroundColor: '#B1D7B4',
    },
});

export default SplashScreen;
