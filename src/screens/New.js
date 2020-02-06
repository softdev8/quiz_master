import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width

export default class New extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    onActionMenu = () => {
        this.props.navigation.navigate('Menu')
    }

    onActionGame = (index) => {
        this.props.navigation.navigate('Game', {index: index})
    }

    render() {

        const {goBack} = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg1.png')} style={{flex: 1}}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image source={ require("../resource/back.png") } style={{position: 'absolute', left: 13, top: 48, width: 27, height: 20}}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onActionMenu()}>
                        <Image source={ require("../resource/menu.png") } style={{position: 'absolute', top: 49.5, right: 13, width: 27, height: 23}}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>Quiz</Text>

                    <View style={[styles.container, {marginBottom: 90, alignItems: 'center', justifyContent: 'center'}]}>
                        <View style={styles.parentView}>
                            <TouchableOpacity onPress={() => this.onActionGame(0)}>
                                <View style={styles.category}>
                                    <Text style={styles.label}>All</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.onActionGame(1)}>
                                <View style={[styles.category, {marginLeft: 10}]}>
                                    <Text style={styles.label}>Science</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.parentView, {marginTop: 10}]}>
                            <TouchableOpacity onPress={() => this.onActionGame(2)}>
                                <View style={styles.category}>
                                    <Text style={styles.label}>Sport</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.onActionGame(3)}>
                                <View style={[styles.category, {marginLeft: 10}]}>
                                    <Text style={styles.label}>Geek</Text>
                                </View>
                            </TouchableOpacity>
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
    title: {
        fontSize: 80, 
        color: 'white', 
        textAlign: 'center', 
        marginTop: 75
    },
    parentView: {
        flexDirection: 'row', 
        height: 100, 
        width: deviceWidth - 40
    },
    category: {
        height: 100, 
        width: (deviceWidth - 50) /2, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white',
        borderRadius: 10
    }, 
    label: {
        fontSize: 37, 
        color: '#3587FF'
    }
});