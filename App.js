import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// screens
import ReduxScreen from './src/screens/ReduxScreen';
import LoginScreen from './src/screens/LoginScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import UploadScreen from './src/screens/UploadScreen';
import PayScreen from './src/screens/PayScreen';
import HomeScreen from './src/screens/HomeScreen';
import DataScreen from './src/screens/DataScreen';

const App = () => {
  return (
    <Provider store={store}>
        <DataScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
