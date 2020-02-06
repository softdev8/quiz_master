import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import HomeItem from '../components/HomeItem';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onActionNew = () => {
        this.props.navigation.navigate("New")
    }

    onActionScore = () => {
        this.props.navigation.navigate('Score')
    }

    onActionDaily = () => {
        this.props.navigation.navigate('Daily')
    }

    onActionInvite = () => {
        this.props.navigation.navigate('Invite')
    }

    render() {
        
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg1.png')} style={{flex: 1}}>

                    <Text style={styles.title}>Quiz</Text>

                    <View style={[styles.container, {marginBottom: 105, alignItems: 'center', justifyContent: 'center'}]}>
                        <TouchableOpacity onPress={() => this.onActionNew()}>
                            <HomeItem title={"New Quiz"} img={ require("../resource/new.png")} bgColor={"#43E2FF"} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop: 35}} onPress={() => this.onActionScore()}>
                            <HomeItem title={"High Score"} img={ require("../resource/score.png")} bgColor={"#6FD9AD"}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop: 35}} onPress={() => this.onActionDaily()}>
                            <HomeItem title={"Daily challenge"} img={ require("../resource/rate.png")} bgColor={"#E0DEA2"}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop: 35}} onPress={() => this.onActionInvite()}>
                            <HomeItem title={"Invite your friends"} img={ require("../resource/invite.png")} bgColor={"#E29CC2"}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 80, 
        color: 'white', 
        textAlign: 'center', 
        marginTop: 75
    }
});