import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../store/actions/auth';

const Settings = props => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);


    return (
        <View style={styles.root}>
            <Button title="Logout" onPress={() => {
                dispatch(authActions.logout(token));
                props.navigation.navigate('Auth');
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {

    }
});

export default Settings;