import React, {} from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import { ReactReduxContext, useSelector } from 'react-redux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

//if no uid in nav params => my profile
const UserProfile = props => {
    let user = props.navigation.getParam('user');
    if(!user){
        user = useSelector(state => state.users.me);
    }

    return(
        <View style={styles.view}>
            <ScrollableTabView style={styles.tabView} tabBarUnderlineStyle={styles.tabViewUnderline} tabBarTextStyle={styles.tabViewText}>
                <FollowingUsers tabLabel="Following Users"/>
                <MyDecks tabLabel="My Decks"/>
                <FollowingDecks tabLabel="Following Decks"/>
            </ScrollableTabView>
        </View>
    );
}

UserProfile.navigationOptions =  ({navigation}) => ({
    headerRight: () => {
        if(navigation.getParam('user') == undefined){
            return( 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Search"
                        iconName="md-settings"
                        onPress={() => {
                            navigation.navigate('Settings');
                        }}
                    />
                </HeaderButtons>
            );
        }
        return;
    },
    headerTitle: () => {
        const user = navigation.getParam('user');
        if(!user){ //fallback, me
            return (
                <View>
                    <ReactReduxContext.Consumer>
                        {({ store }) => {
                            const user = store.getState().users.me;
                            return (
                                <UserTitleComponent user={user} />
                            );
                        }}
                    </ReactReduxContext.Consumer>
                </View>
            );
        }
        else{
            return (<UserTitleComponent user={user}/>);
        }
    }
});

const UserTitleComponent = props => {
    const user = props.user;
    return (
        <View style={styles.nameContainerView}>
            <Text style={styles.unameText}>{user.name}</Text>
            <Text style={styles.discriminatorText}>-{user.discriminator}</Text>
        </View>
    );
}

const MyDecks = props => {
    return (
        <View>
            <Text>MyDecks</Text>
        </View>
    );
}

const FollowingUsers = props => {
    return (
        <View>
            <Text>Following Users</Text>
        </View>
    );
}

const FollowingDecks = props => {
    return (
        <View>
            <Text>Following Decks</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
    },
    unameText: {
        fontSize: 20, 
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
    },
    discriminatorText: {
        fontSize: 20,
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
    },
    nameContainerView: {
        flexDirection: "row",
    },
    tabView: {
        flex: 1,
    },
    tabViewText:{
        color: Platform.OS === 'ios' ?  Colors.primary : Colors.dark
    },
    tabViewUnderline:{
        backgroundColor: Colors.primary
    }
});

export default UserProfile;