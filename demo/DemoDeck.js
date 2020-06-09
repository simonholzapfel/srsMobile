import React, {} from 'react';
import {
    View,
} from 'react-native'
import Card from '../components/Card'
import {demoDecks} from '../data/dummy';


export default DemoDeck = props => {
    return(
        <View>
            <Card data={demoDecks[0].cards[0]}/>
        </View>
    )
}