import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, TextInput, Platform, ImageBackground, Dimensions} from 'react-native';

export default class Result extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    render() {
        
        const {goBack} = this.props.navigation;

        const {navigation} = this.props
        let index = navigation.state.params.index

        let title = (index == 1) ? "Too bad" : "Congratulation"
        let desc = (index == 1) ? "You can try again tomorrow" : "You are rewarded with 50 points"

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg1.png')} style={{flex: 1}}>

                    <View style={{height: 27, marginTop: 40, marginLeft: 15}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={ require("../resource/close.png") } style={{width: 27, height: 27}}/>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>{title}</Text>
                    <View style={{height: 148, alignItems: 'center', marginTop: 25}}>
                        <Image source={ (index == 1) ? require("../resource/wrong.png") : require("../resource/success.png") } style={{width: 148, height: 148}}/>
                    </View>
                    <Text style={{fontSize: 40, color: 'white', textAlign: 'center',  margin: 25}}>{desc}</Text>

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
        fontSize: 40, 
        color: 'white', 
        textAlign: 'center', 
        marginTop: 75
    }
});