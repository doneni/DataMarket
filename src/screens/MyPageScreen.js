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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('Profile...')}
                >
                    <Text style={styles.text}>   UserName</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sellContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('SellHistory...')}
                >
                    <Text style={styles.text}>   SellHistory</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buyContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('buyHistory...')}
                >
                    <Text style={styles.text}>   BuyHistory</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    profileContainer: {
        marginVertical: 10,
        marginTop: 30,
        alignItems: 'center'
    },
    sellContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
   buyContainer: {
       marginVertical: 10,
       alignItems: 'center'
   },
   text: {
        fontSize: 20,
   },
   button: {
        backgroundColor: 'white',
        padding: 10,
        width: 370,
   }
});

export default MyPageScreen;