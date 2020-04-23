import {users}from '../../data/dummy';

const initalState = {
    allUsers: users,
    following: [users[1], users[2]],
    myUser: {},
}

export default (state = initalState, action) => {
    //add action handling in here
    return state;
}