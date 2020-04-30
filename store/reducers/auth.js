import {LOGIN, SIGNUP, AUTHENTICATE} from '../actions/auth';

const initalState = {

}

export default (state = initalState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                token: action.token,
                username: action.username,
                discriminator: action.discriminator,
                email: action.email,
            }
        case SIGNUP:{
            return {
                token: action.token,
                username: action.username,
                discriminator: action.discriminator,
                email: action.email
            }
        }
        case AUTHENTICATE:{
            return {
                token: action.token,
                username: action.username,
                discriminator: action.discriminator,
                email: action.email
            }
        }
        default:
            return state;
    }
}