import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import Card from '../components/Card'
import {demoDecks} from '../data/dummy';
import DemoDeckOverview from './DemoDeckOverview';

const DemoScreen = props => {
    return (
        <View style={{ ...styles.root, ...props.style }}>
            <DemoDeckOverview navigation={props.navigation} style={styles.overview}/>
        </View>
    )

    //<Card data={demoDecks[0].cards[0]} deckHandler={console.log}/>
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    overview: {
        flex: 1
    },  
});

export default DemoScreen;