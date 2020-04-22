import {decks} from '../../data/dummy';

const initalState = {
    myDecks: decks,
    decks: decks,
}

export default (state = initalState, action) => {
    //add action handling in here
    return state;
}