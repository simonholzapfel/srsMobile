import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Statistic = props => {
    return(
        <Text>Statistic data here: {props.data}</Text>
)};

const styles = StyleSheet.create({

});

export default Statistic;