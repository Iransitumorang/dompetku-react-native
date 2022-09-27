/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as React from 'react';
import styles from '../styles/globals';
import Input from '../components/Input';
import {THIRD_COLOR} from '../styles/constant';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { LoginAuth } from '../redux/actions/Auth';

const Login = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false),
        [params, setParams] = useState({});
  const dispatch = useDispatch(params);

  const { isLogin } = useSelector(state => state.auth);

    useEffect(() => {
        if (isLogin) {
            navigation.navigate('Home');
        }
    }, [dispatch, isLogin]);

const handleSubmit = () => {
  dispatch(LoginAuth(params));
};
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
            <Image
              source={require('../assets/images/dompetku2.png')} style={{width: 300, height: 55}}
             />
        </View>
        <View style={styles.article}>
          <View  style={styles.content}>
            <Text style={styles.mainFont1}>Login</Text>
            <Text style={styles.mainFont2}>Login to your existing account to access {'\n'}
                  all the features in Dompetku.</Text>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your e-mail" icon="envelope" type="email-address"
                onChangeText={(text) => setParams(prevData => ({ ...prevData, email: text }))}
              />
            </View>
            <View  style={styleLocal.inputWrapper}>
              <Input placeholder="Enter your password" icon="lock" secure={true}
                onChangeText={(text) => setParams(prevData => ({ ...prevData, password: text }))}
              />
            </View>
          </View>
        <Text style={styles.forgotPass} onPress={() => navigation.navigate('ForgotPassword')}>Forgot password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={styles.buttonLogin}  >
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Don’t have an account? Let’s <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styleLocal.textSignup}> Sign Up</Text></TouchableOpacity></Text>
        </View>
    </ScrollView>
  );
};

const styleLocal = StyleSheet.create({
  inputWrapper: {
    marginBottom: 30,
  },
  flex: {
    flex: 1,
  },
  textSignup: {
    fontWeight: '700',
    fontSize: 15,
    color: THIRD_COLOR,
    borderBottomWidth: 1,
  },
});

export default Login;
