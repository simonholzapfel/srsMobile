import {decks} from '../../data/dummy';

const initalState = {
    myDecks: decks,
    allDecks: decks,
    lastUsed: {
        name: decks[0].name,
        id: decks[0].id,
        thumb: "",
    },
}

export default (state = initalState, action) => {
    //add action handling in here
    return state;
}