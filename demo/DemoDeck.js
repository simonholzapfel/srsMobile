import React, {
    useState,
} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Card from '../components/Card';
import DeckFinished from '../components/DeckFinished';

const DemoDeck = props => {
    const deck = props.navigation.getParam('deck');
    const length = deck.cards.length;
    const [index, setIndex] = useState(0);
    const [scores, setScores] = useState([]);

    const cardHandler = ({ score, deckId }) => {
        if (index < length) {
            setIndex(index + 1);
            scores.push({deckId, score});
        }
    }

    if(index == length){
        return <DeckFinished onClose={() => props.navigation.pop()} deck={deck}/>;
    }

    return (
        <View style={{ ...styles.view, ...props.style }}>
            <Card cardHandler={cardHandler} data={deck.cards[index]} style={styles.card} progress={index / length} id={index}/>
        </View>);
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    view: {
        flex: 1,
    },
});

export default DemoDeck;