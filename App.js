/* eslint-disable prettier/prettier */
// import React from 'react';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import PinSuccess from './src/screens/PinSuccess';
import ConfirmOtp from './src/screens/ConfirmOtp';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPass from './src/screens/ResetPass';
import Home from './src/screens/Home';
import TransactionDetail from './src/screens/TransactionDetail';
import History from './src/screens/History';
import Receiver from './src/screens/Receiver';
import AmountInput from './src/screens/AmountInput';
import Confirmation from './src/screens/Confirmation';
import PinConfirmation from './src/screens/PinConfirmation';
import TransferSuccess from './src/screens/TransferSuccess';
import TransferFailed from './src/screens/TransferFailed';
import TopUp from './src/screens/TopUp';
import Profile from './src/screens/Profile';
import ChangePassword from './src/screens/ChangePassword';
import ChangePin from './src/screens/ChangePin';
import AddNumberPhone from './src/screens/AddNumberPhone';
import ManageNumber from './src/screens/ManageNumber';
import Notification from './src/screens/Notification';

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="PinSuccess" component={PinSuccess} />
          <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Receiver" component={Receiver} />
          <Stack.Screen name="AmountInput" component={AmountInput} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="PinConfirmation" component={PinConfirmation} />
          <Stack.Screen name="TransferSuccess" component={TransferSuccess} />
          <Stack.Screen name="TransferFailed" component={TransferFailed} />
          <Stack.Screen name="TopUp" component={TopUp} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ChangePin" component={ChangePin} />
          <Stack.Screen name="AddNumberPhone" component={AddNumberPhone} />
          <Stack.Screen name="ManageNumber" component={ManageNumber} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
