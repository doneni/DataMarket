import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

const MyPageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity onPress={() => Alert.alert('Profile...')}>
                    <Text style={styles.text}>   UserName</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sellContainer}>
                <TouchableOpacity onPress={() => Alert.alert('SellHistory...')}>
                    <Text style={styles.text}>   SellHistory</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buyContainer}>
                <TouchableOpacity onPress={() => Alert.alert('buyHistory...')}>
                    <Text style={styles.text}>   BuyHistory</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 50,
    },
    profileContainer: {
        marginVertical: 10,
    },
    sellContainer: {
        marginVertical: 10,
    },
   buyContainer: {
       marginVertical: 10,
   },
   text: {
        fontSize: 25,
   }
});

export default MyPageScreen;