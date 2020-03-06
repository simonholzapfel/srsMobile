import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Search from '../screens/Search';
import Settings from '../screens/Settings';

const Header = props => {
    //todo:
    // * implement Search
    // * implement Settings

    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 75,
        paddingTop: 25,
        backgroundColor: '#26d07c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: "black",
        fontSize: 18
    }
});

export default Header;