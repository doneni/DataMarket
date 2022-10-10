import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReduxScreen from './src/screens/ReduxScreen';

const App = () => {
  return (
    <Provider store={store}>
        <ReduxScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
