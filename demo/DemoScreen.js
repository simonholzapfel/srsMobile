import React, {
    useEffect
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import DemoDeckOverview from './DemoDeckOverview';

const DemoScreen = props => {
    return (
        <View style={{ ...styles.root, ...props.style }}>
            <DemoDeckOverview navigation={props.navigation} style={styles.overview} />
        </View>
    )
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