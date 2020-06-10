import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';

const DemoDeck = props => {
    const deck = props.navigation.getParam('deck');
    const [index, setIndex] = useState(0);

    return (
    <View style={styles.view}>
        <Card cardHandler={cardHandler} data={deck.cards[index]} style={styles.card}/>
    </View>);
}

const cardHandler = res => {
    console.log(res);
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    view: {
        
    },
});

export default DemoDeck;