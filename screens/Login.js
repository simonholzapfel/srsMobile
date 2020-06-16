import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import Colors from '../constants/Colors';

const Login = props => {
    const dispatch = useDispatch();
    const [doLogin, setLogin] = useState(true);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [unameInput, setUnameInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        if (error) {
            //todo helpful error alerts
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error])

    //login
    if (doLogin) {
        return (<KeyboardAvoidingView style={styles.root}>
            <TextInput style={styles.input} onChangeText={setEmailInput} autoCorrect={false} autoCompleteType={"email"} placeholder={"Email Adress"} placeholderTextColor="black" keyboardType="email-address" />
            <TextInput style={styles.input} onChangeText={setPasswordInput} autoCorrect={false} autoCompleteType={"password"} placeholder={"Password"} placeholderTextColor="black" secureTextEntry />
            <View style={styles.verticalView}>
                <Button title="Sign up instead" onPress={() => setLogin(!doLogin)} />
                {isLoading ? (
                    <ActivityIndicator size="small" color={Colors.primary} />) : (
                        <Button title="Login" onPress={async () => {
                            setIsLoading(true);
                            setError(null);
                            try {
                                await dispatch(authActions.signin(emailInput, passwordInput));
                                props.navigation.navigate('Srs')
                            } catch (error) {
                                setError(error);
                                setIsLoading(false);
                            }
                        }} />)}
            </View>
        </KeyboardAvoidingView>);
    }

    //signup
    return (<KeyboardAvoidingView>
        <TextInput style={styles.input} onChangeText={setUnameInput} autoCorrect={false} autoCompleteType={"username"} placeholder={"Username"} placeholderTextColor="black" keyboardType="default" />
        <TextInput style={styles.input} onChangeText={setEmailInput} autoCorrect={false} autoCompleteType={"email"} placeholder={"Email Adress"} placeholderTextColor="black" keyboardType="email-address" />
        <TextInput style={styles.input} onChangeText={setPasswordInput} autoCorrect={false} autoCompleteType={"password"} placeholder={"Password"} placeholderTextColor="black" secureTextEntry />
        <View style={styles.verticalView}>
            <Button title="Login instead" onPress={() => setLogin(!doLogin)} />
            {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />) : (
                    <Button title="Sign up" onPress={async () => {
                        setIsLoading(true);
                        setError(null);
                        try {
                            await dispatch(authActions.signup(unameInput, emailInput, passwordInput));
                            props.navigation.navigate('Srs');
                        } catch (error) {
                            setError(error);
                            setIsLoading(false);
                        }
                    }} />)}
        </View>
    </KeyboardAvoidingView>);
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    verticalView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default Login;