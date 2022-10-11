import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NotificationScreen;