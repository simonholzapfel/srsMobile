import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';

const DemoDeck = props => {
    const deck = props.navigation.getParam('deck');
    const [index, setIndex] = useState(0);

    return (
    <View style={{ ...styles.view, ...props.style }}>
        <Card cardHandler={console.log} data={deck.cards[index]} style={styles.card}/>
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