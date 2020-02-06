import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width

import LinearGradient from 'react-native-linear-gradient';

export default class Game extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onActionMenu = () => {
        this.props.navigation.navigate('Menu')
    }

    onActionResult = () => {
        this.props.navigation.navigate('YourScore')
    }

    render() {

        const {goBack} = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg2.png')} style={{flex: 1, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', height: 45, marginTop: 40, marginLeft: 13, marginRight: 13, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={ require("../resource/back.png") } style={{width: 27, height: 20}}/>
                        </TouchableOpacity>

                        <Text style={{flex: 1, color: 'white', fontSize: 30, textAlign: 'center'}}>All</Text>

                        <TouchableOpacity onPress={() => this.onActionMenu()}>
                            <Image source={ require("../resource/menu.png") } style={{width: 27, height: 23}}/>
                        </TouchableOpacity>
                    </View>

                    <Text style={{color: '#43E2FF', fontSize: 50, textAlign: 'center'}}>00:58</Text>

                    <View style={{height: 36, alignItems: 'center', marginTop: 28}}>
                        <Image source={ require("../resource/questionbg.png") } style={{width: 220, height: 36}}/>
                        <Text style={{position: 'absolute', top: 5, color: '#028BF2', fontSize: 20, paddingLeft: 55}}>Question 3 of 11</Text>
                    </View>

                    <View style={{flex: 1, marginTop: 25}}>
                        <View style={{flex: 3}} >
                            <ImageBackground source={require('../resource/question.png')} imageStyle={{borderRadius: 8}} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                                <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>Which sport team is the richest in the world ?</Text>
                            </ImageBackground>
                        </View>
                        
                        <View style={{flex: 2, flexDirection: 'row', height: 100, width: deviceWidth - 40, justifyContent: 'center', alignItems: 'center'}} >
                            
                            <TouchableOpacity onPress={() => this.onActionResult()}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 2, y: 0}} colors={['#FF5D9A', '#FFA76C']} style={styles.linearGradient}>
                                    <Text style={styles.label}>Manchester United</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.onActionResult()}>
                                <LinearGradient start={{x: -0.5, y: 0}} end={{x: 1, y: 0}} colors={['#CCF8AB', '#74D030']} style={[styles.linearGradient, {marginLeft: 10}]}>
                                    <Text style={styles.label}>Real Madrid</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'center'}} >
                            <Image source={ require("../resource/help.png") } style={{width: 78, height: 78}}/>
                        </View>
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
    parentView: {
        flexDirection: 'row', 
        height: 100, 
        width: deviceWidth - 40
    },
    label: {
        fontSize: 26, 
        color: 'white',
        textAlign: 'center',
    },
    linearGradient: {
        // flex: 1,
        borderRadius: 10, 
        width: (deviceWidth - 50) / 2,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
});