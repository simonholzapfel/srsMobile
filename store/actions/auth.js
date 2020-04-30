import {AsyncStorage} from 'react-native';
import jwtDecode from 'jwt-decode';

import Backend from '../../constants/Backend';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (token, username, discriminator, email) => {
    saveDataToStorage(token, username, discriminator, email);
    return {type: AUTHENTICATE, token: token, username: username, discriminator: discriminator, email: email}
}

export const signup = (username, email, password) => {
    return async dispatch => {
        const response = await fetch(Backend + "/v1/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    email,
                    password,
                    remember_me: true,
                }
            })
        });

        if(!response.ok){
            //todo helpful errors
            throw new Error("Something went wrong!");
        }

        const resData = await response.json();
        dispatch({type: SIGNUP, token: resData.user.token, username: resData.user.username, discriminator: resData.user.discriminator});

        saveDataToStorage(resData.user.token, resData.user.username, resData.user.discriminator, resData.user.email,)
    };
}

export const signin = (email, password) => {
    return async dispatch => {
        const response = await fetch(Backend + "/v1/auth/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email,
                    password,
                    remember_me: true,
                }
            })
        });

        if(!response.ok){
            message = "Something went wrong!";

            //todo helpful errors

            throw new Error(message);
        }


        const resData = await response.json();

        dispatch({type: SIGNIN, token: resData.user.token, username: resData.user.username, discriminator: resData.user.discriminator, email: resData.user.email});

        /*const expirationDate = new Date(
            new Date().getTime() + parseInt(jwtDecode(resData.user.token).exp *1000)
        );*/

        saveDataToStorage(resData.user.token, resData.user.username, resData.user.discriminator, resData.user.email)
    }
}

export const logout = (token) => {

    fetch(Backend + "/v1/auth/logout", { //todo fix path when implemented
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    AsyncStorage.removeItem('userData');

    return {type: LOGOUT}
}

const saveDataToStorage = (token, username, discriminator, email, ) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token,
        username,
        discriminator,
        email,
    }))
};