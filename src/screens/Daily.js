import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, TextInput, Platform, ImageBackground, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Daily extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onActionMenu = () => {
        this.props.navigation.navigate('Menu')
    }

    onActionAnswer = (index) => {
        this.props.navigation.navigate('Result', {index: index})
    }

    render() {
        
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg3.png')} style={{flex: 1}}>
                    <View style={{flexDirection: 'row', height: 45, marginTop: 40, marginLeft: 13, marginRight: 13, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={ require("../resource/back.png") } style={{width: 27, height: 20}}/>
                        </TouchableOpacity>

                        <Text style={{flex: 1, color: 'white', fontSize: 30, textAlign: 'center'}}>Daily Challenge</Text>

                        <TouchableOpacity onPress={() => this.onActionMenu()}>
                            <Image source={ require("../resource/menu.png") } style={{width: 27, height: 23}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignItems: 'center', marginTop: 25}}>
                        <View style={{width: 140, height: 125, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={ require("../resource/dominos.png") } style={{width: 112, height: 112}}/>
                        </View>

                        <View style={{height: 36, alignItems: 'center', marginTop: 20}}>
                            <Image source={ require("../resource/questionbg.png") } style={{resizeMode: 'stretch', width: 260, height: 40}}/>
                            <Text style={{position: 'absolute', top: 7, color: '#028BF2', fontSize: 20, paddingLeft: 55}}>This is the logo of ...</Text>
                        </View>
                    </View>
                    
                    <View style={{flex: 1, marginTop: 70, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.onActionAnswer(0)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 2, y: 0}} colors={['#FF5D9A', '#FFA76C']} style={styles.linearGradient}>
                                <Text style={styles.label}>KFC</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onActionAnswer(1)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 2, y: 0}} colors={['#62C1CE', '#B8E8EF']} style={styles.linearGradient}>
                                <Text style={styles.label}>Dominos</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onActionAnswer(2)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 2, y: 0}} colors={['#7BCE62', '#B9E2B3']} style={styles.linearGradient}>
                                <Text style={styles.label}>Pizza Hut</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onActionAnswer(3)}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 2, y: 0}} colors={['#F09858', '#E8AF76']} style={styles.linearGradient}>
                                <Text style={styles.label}>McDonld</Text>
                            </LinearGradient>
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
    },
    label: {
        fontSize: 26, 
        color: 'white',
        textAlign: 'center',
    },
    linearGradient: {
        borderRadius: 10, 
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
});