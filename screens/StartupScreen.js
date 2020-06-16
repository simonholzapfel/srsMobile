import React, { useEffect } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import Backend from '../constants/Backend';
import * as authActions from '../store/actions/auth';

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const startupTask = async () => {
            const introDone = await AsyncStorage.getItem("introDone");

            if (!introDone) {
                props.navigation.navigate('Intro');
                return;
            }

            const authRaw = await AsyncStorage.getItem("userData");

            if (!authRaw) {
                props.navigation.navigate('Login');
                return;
            }
            const localData = JSON.parse(authRaw);

            const response = await fetch(Backend + "/v1/user/me", {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + localData.token
                }
            });
            const data = await response.json();

            if (response.ok) {
                props.navigation.navigate('Srs');
                dispatch(authActions.authenticate(localData.token, data.user.username, data.user.discriminator, localData.email))
                return;
            }
            props.navigation.navigate('Login')
            return;
        }

        startupTask();
    }, [])

    return (
        <View>
            <ActivityIndicator color={Colors.primary} />
        </View>);
}

export default StartupScreen;