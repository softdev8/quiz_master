import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native';

const deviceWidth = Dimensions.get('window').width

export default class HomeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            img: props.img,
            bgColor: props.bgColor
        };
    }

    render() {
        
        return (
            <View style={styles.item_view}>
                <Text style={styles.textLabel}>{this.state.title}</Text>

                <View style={{width: 60, height: 60, backgroundColor: this.state.bgColor, borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={ this.state.img } style={{width: 32, height: 35}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item_view: {
        flexDirection: 'row', 
        height: 60, 
        width: deviceWidth - 68, 
        backgroundColor: 'white', 
        borderRadius: 10
    },
    textLabel: {
        flex: 1, 
        color: '#3587FF', 
        fontSize: 30, 
        textAlign: 'center', 
        alignSelf: 'center'
    }
});