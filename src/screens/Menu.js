import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    goAction = (index) => {
        var router = "";

        switch(index) {
            case 0:
                router = "New";
                break;
            case 1:
                router = "Score";
                break;
            case 2:
                router = "Daily";
                break;
            case 3:
                router = "Rate";
                break;
            case 4:
                router = "Invite";
                break;
        }

        this.props.navigation.navigate(router)
    }

    render() {
        
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg1.png')} style={{flex: 1}}>

                    <Text style={{position: 'absolute', top: 40, textAlign: 'center', color: 'white', fontSize: 22, alignSelf: 'center'}}>90 points</Text>
                    <View style={{height: 27, width: 27, marginTop: 40, marginLeft: 15, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={ require("../resource/close.png") } style={{width: 27, height: 27}}/>
                        </TouchableOpacity>                        
                    </View>

                    <View style={[styles.container, {marginBottom: 90, alignItems: 'center', justifyContent: 'center'}]}>
                        <TouchableOpacity onPress={() => this.goAction(0)}>
                            <Text style={styles.menu}>New Quiz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.goAction(1)}>
                            <Text style={styles.menu}>High Score</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.goAction(2)}>
                            <Text style={styles.menu}>Daily Challenge</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.goAction(3)}>
                            <Text style={styles.menu}>Rate Us</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.goAction(4)}>
                            <Text style={styles.menu}>Invite your friends</Text>
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
    text_input: {
        height: 40, 
        marginLeft: 16,
        marginRight: 16,
        fontSize: 26
    },
    menu: {
        color: 'white',
        fontSize: 36,
        marginTop: 25
    }
});