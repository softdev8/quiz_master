import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, TextInput} from 'react-native';

export default class YourScore extends Component {

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
                    <View style={[styles.container, {marginBottom: 90, alignItems: 'center', justifyContent: 'center'}]}>

                        <View style={{flexDirection: 'row', height: 60, width: 150}}>
                            <Image source={ require("../resource/star.png") } style={{width: 50, height: 50, marginTop: 7}}/>
                            <Image source={ require("../resource/star.png") } style={{width: 50, height: 50}}/>
                            <Image source={ require("../resource/star.png") } style={{width: 50, height: 50, marginTop: 7}}/>
                        </View>

                        <Text style={{color: 'white', fontSize: 30, marginTop: 10}}>Your score</Text>
                        <Text style={{color: 'white', fontSize: 75}}>340</Text>
                        
                        <View style={[styles.subView, {borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 10}]}>
                            <View style={[styles.imgView, {backgroundColor: '#FB004D', borderTopLeftRadius: 10}]}>
                                <Image source={ require("../resource/correct.png") } style={{width: 37, height: 37}}/>
                            </View>    
                            <Text style={[styles.label, {color: '#FB004D'}]}>8/12</Text>                            
                        </View>

                        <View style={[styles.subView, {marginTop: 2, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}]}>
                            <View style={[styles.imgView, {backgroundColor: '#39B682', borderBottomLeftRadius: 10}]}>
                                <Image source={ require("../resource/timer.png") } style={{width: 38, height: 45}}/>
                            </View>    
                            <Text style={[styles.label, {color: '#39B682'}]}>02:35`</Text>                            
                        </View>
                        
                        <View style={{flexDirection: 'row', height: 80, width: 160, marginTop: 25}}>
                            <TouchableOpacity onPress={() => goBack()}>
                                <Image source={ require("../resource/retry.png") } style={{width: 50, height: 50, marginTop: 25}}/>
                            </TouchableOpacity>
                            
                            <Image source={ require("../resource/save.png") } style={{width: 60, height: 60}}/>
                            <Image source={ require("../resource/home.png") } style={{width: 50, height: 50, marginTop: 25}}/>
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
    },
    subView: {
        flexDirection: 'row',
        height: 75, 
        width: 225, 
        backgroundColor: 'white', 
    },
    imgView: {
        width: 75, 
        height: 75, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    label: {
        flex: 1, 
        fontSize: 30, 
        textAlign: 'center', 
        alignSelf: 'center'
    }
});