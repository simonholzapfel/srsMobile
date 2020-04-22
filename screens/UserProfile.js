import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

//if no uid in props => my profile
const UserProfile = props => {
    UserProfile.navigationOptions =  {
        headerRight: () => {
            if(!props.navigation.getParam('id'))
            return <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Search"
                iconName="md-settings"
                onPress={() => {
                  props.navigation.navigate('Settings');
                }}
                />
            </HeaderButtons>
        }
    }

    return(
        <View style={styles.view}>
            <Text>Pls implement me, my name is UserProfile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red',
        flex:1
    }
});

export default UserProfile;