import React, { } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const UserListItem = props => {
    return <TouchableOpacity style={styles.root} onPress={props.onPress}>
        <Text>{props.userInfo.name}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    root: {

    }
});

export default UserListItem;