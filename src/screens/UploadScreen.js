import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const UploadScreen = () => {
    const sellMethod = ['Full-Online', 'Half-Online', 'Offline'];
    const [method, setMethod] = useState(null);

    const brokerList = ['Broker1', 'Broker2', 'Broker3'];
    const [broker, setBroker] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.screenTitle}>UPLOAD</Text>
            </View>
            <View>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled>
                    <TextInput style={styles.inputText} placeholder="Title" />
                    <TextInput style={styles.inputText} placeholder="Tag" />
                    <Picker
                        selectedValue={method}
                        onValueChange={(value, index) => setMethod(value)}
                        mode="dropdown"
                        style={styles.picker}
                    >
                        {
                            sellMethod.map((method, index) => {
                                return (
                                    <Picker.Item key={index} label={method} value={method} />
                                )
                            })
                        }
                    </Picker>
                    <Picker
                        selectedValue={broker}
                        onValueChange={(value, index) => setBroker(value)}
                        mode="dropdown"
                        style={styles.picker}
                    >
                        {
                            brokerList.map((broker, index) => {
                                return (
                                    <Picker.Item key={index} label={broker} value={broker} />
                                )
                            })
                        }
                    </Picker>
                    <TextInput style={styles.inputText} placeholder="Data" />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    titleContainer: {
        flex: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
    },
    screenTitle: {
        color: '#fff',
        fontSize: 50,
        fontWeight: '500',
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    inputContainer: {
        backgroundColor: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 16,
        marginBottom: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        backgroundColor: 'white',
        fontSize: 18,
        padding: 15,
        width: 350,
        marginVertical: 10,
    },
    picker: {
        marginVertical: 20,
        width: 350,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white',
    },
});

export default UploadScreen;