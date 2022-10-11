import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const PayScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Pay</Text>
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

export default PayScreen;