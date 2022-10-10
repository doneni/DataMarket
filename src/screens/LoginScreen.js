import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Button,
    Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.screenTitle}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
                <KeyboardAvoidingView style={styles.idContainer} behavior="padding" enabled>
                    <TextInput style={styles.inputText} placeholder="ID" />
                    <TextInput style={styles.inputText} placeholder="PW" />
                </KeyboardAvoidingView>
            </View>
            <View style={styles.loginButtonContainer}>
                <Button
                    title = "LOGIN"
                    onPress={() => navigation.navigate('Category')}
                    color="black"

                />
                <Button
                    title = "SIGN UP"
                    onPress={() => Alert.alert("Sign up...")}
                />
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
    idContainer: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 16,
        marginBottom: 5,
        flexDirection: 'column',
    },
    inputText: {
        fontSize: 18,
        padding: 15,
        color: '#000',
        width: 100,
    },
    loginButtonContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
});

export default LoginScreen;