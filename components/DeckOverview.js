import React from 'react';
import { StyleSheet, FlatList, Dimensions} from 'react-native';
import DeckPreview from './DeckPreview';

const DeckOverview = props => {
    const data = [
        {
            id: "1",
        },
        {
            id: "2"
        },
        {
            id: "3",
        },
        {
            id: "4",
        },
        {
            id: "5"
        },
        {
            id: "6"
        },
        {
            id: "7"
        },
        {
            id: "8"
        },
        {
            id: "9"
        },
        {
            id: "10"
        },
        {
            id: "11"
        },
        {
            id: "12"
        },
        {
            id: "13"
        },
        {
            id: "156"
        }
    ]

    const renderGridItem = itemData =>{
        return <DeckPreview
        id={itemData.item.id}
        style={styles.item}
        navigation={props.navigation}/>
    }

    return (
        <FlatList numColumns={4} style={{...props.style, ...styles.root}}
                keyExtractor={(item, index) => item.id}
                data={data}
                renderItem={renderGridItem}
      />
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 2,
        alignContent: "flex-start"
    },
    item: {
        width: Dimensions.get('window').height/6.8,
        margin: Dimensions.get('window').height/270,
    }
});

export default DeckOverview;