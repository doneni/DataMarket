import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button,
} from 'react-native';

const DataScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => Alert.alert('Broker Profile')}>
                <Text style={styles.text}>Broker1</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.metaContainer}>
            <Text style={styles.text}>   Here comes MetaData...</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button
                title="PURCHASE"
                onPress={() => Alert.alert('on purchasing...')}
                color='#B64747'
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 50,
    },
    profileContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        width: 370,
        justifyContent: 'center',
        alignItems: 'center'
    },
    metaContainer: {
        flex: 10,
        backgroundColor: 'white',
        marginVertical: 15,
        width: 370,
    },
    buttonContainer: {
          flex: 1,
          justifyContent: 'flex-end',
          width: 400,
    },
    text: {
        fontSize: 20,
    },
});

export default DataScreen;