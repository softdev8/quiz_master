import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, TextInput} from 'react-native';

const deviceWidth = Dimensions.get('window').width

export default class Invite extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    render() {
        
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg1.png')} style={{flex: 1}}>
                    <View style={{height: 27, marginTop: 40, marginLeft: 15}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={ require("../resource/close.png") } style={{width: 27, height: 27}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.container, {marginBottom: 90, alignItems: 'center', justifyContent: 'center'}]}>
                        <Text style={{color: 'white', fontSize: 40, textAlign: 'center', marginLeft: 40, marginRight: 40}}>Invite your friends to play</Text>

                        <View style={{flexDirection: 'column', height: 140, width: deviceWidth - 80, backgroundColor: 'white', marginTop: 40, borderRadius: 10}}>
                            <View style={{height: 75, justifyContent: 'center'}}>
                                <TextInput style={[styles.text_input]}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Email"
                                    placeholderTextColor = "#A09C9C"
                                    secureTextEntry={true}
                                    autoCapitalize = "none" />
                            </View>
                            <View style={{flex: 1, backgroundColor: '#E29CC2', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: 'white', fontSize: 40}}>Send</Text>
                            </View>
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
    text_input: {
        height: 40, 
        marginLeft: 16,
        marginRight: 16,
        fontSize: 26
    }
});