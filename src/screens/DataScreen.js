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
            <Text style={styles.text}>Here comes MetaData...</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button
                title="PURCHASE"
                onPress={() => Alert.alert('on purchasing...')}
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
    },
    profileContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 10,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center'
    },
    metaContainer: {
        flex: 10,
        backgroundColor: 'white',
        marginVertical: 15,
        width: 350,
    },
    buttonContainer: {
          flex: 1,
          justifyContent: 'space-between',
          width: 400,
    },
    text: {
        fontSize: 20,
    },
});

export default DataScreen;