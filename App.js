import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Home from "./src/screens/Home";
import New from "./src/screens/New";
import Score from "./src/screens/Score";
import Daily from "./src/screens/Daily";
import Invite from "./src/screens/Invite";

import Game from "./src/screens/Game";
import Menu from "./src/screens/Menu";
import Result from "./src/screens/Result";
import Rate from "./src/screens/Rate";
import YourScore from "./src/screens/YourScore";

const Navigation = createStackNavigator({

    Home: { screen: Home },
    New: { screen: New },
    Score: { screen: Score },
    Daily: { screen: Daily },
    Invite: { screen: Invite },
    Game: { screen: Game },
    Menu: { screen: Menu },
    Result: { screen: Result },
    Rate: { screen: Rate },
    YourScore: { screen: YourScore },

}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#fbf1dc'
        },
        header: null, 
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    },
});

const App = createAppContainer(Navigation);

export default App;
