import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// screens
import ReduxScreen from './src/screens/ReduxScreen';
import LoginScreen from './src/screens/LoginScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import HomeScreen from './src/screens/HomeScreen';
import DataScreen from './src/screens/DataScreen';
import test from './src/screens/test';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="Data"
                component={DataScreen}
                options={{
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
};

const HomeTab = () => {
    return(
        <Tab.Navigator
            initialRouteName='HomeStack'
            backBehavior='none'
        >
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({focused}) => (
                        <Icon name="notifications-outline" color={!focused?'grey':'#0D72C0'} size={20} />
                    ),
                }}
             />
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Icon name="home-outline" color={!focused?'grey':'#0D72C0'} size={20} />
                    ),
                }}
             />
            <Tab.Screen
                name="MyPage"
                component={MyPageScreen}
                options={{
                    headerShown: true,
                    tabBarIcon: ({focused}) => (
                        <Icon name="person-outline" color={!focused?'grey':'#0D72C0'} size={20} />
                    ),
                }}
             />
        </Tab.Navigator>
    );
};

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='test'
                    component={test}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="HomeTab"
                    component={HomeTab}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
