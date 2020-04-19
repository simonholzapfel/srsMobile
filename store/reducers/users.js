import {users}from '../../data/dummy';

const initalState = {
    allUsers: users,
    following: []
}

export default (state = initalState, action) => {
    //add action handling in here
    return state;
}