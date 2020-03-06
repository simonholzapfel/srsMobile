import React from 'react';
import { StyleSheet, Text, FlatList, ScrollView, SafeAreaView, List, View} from 'react-native';
import DeckPreview from './DeckPreview';

const DeckOverview = props => {
    const data = [ // to be replaced with props.elements?
        {
            id: "1"
        },
        {
            id: "2"
        },
        {
            id: "3",
        },
        {
            id: "4",
        }
    ]

    return (
        <FlatList style={{...props.style, ...styles.root}}
                keyExtractor={(item, index) => item.id}
                data={data}
                renderItem={itemData => 
            <DeckPreview
                id={itemData.item.id}
                onPress={console.log}
                style={styles.item}
            />
        }
      />
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        height: 100,
        width: 75,
        padding: 5,
    }
});

export default DeckOverview;