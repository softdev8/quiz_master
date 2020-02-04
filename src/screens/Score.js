import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, FlatList} from 'react-native';

const deviceWidth = Dimensions.get('window').width

const list = [
    {
        index: 1,
        name: "Atef",
        score: "1200"   
    },
    {
        index: 2,
        name: "Emily",
        score: "1000"   
    },
    {
        index: 3,
        name: "Mykhailo",
        score: "900"   
    },
    {
        index: 4,
        name: "John",
        score: "850"   
    },
    {
        index: 5,
        name: "Rock",
        score: "625"   
    },
    {
        index: 6,
        name: "Flow",
        score: "500"   
    } 
]

export default class Score extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cashes: list
        }
    }

    static navigationOptions = {
        header: null
    }

    onActionMenu = () => {
        this.props.navigation.navigate('Menu')
    }

    renderItem(item) {
        
        return (
            <TouchableOpacity onPress={() => this.pushScreen(item.index)}>
                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <Text style={[styles.listTitle, {color: '#4B4848'}]}>{item.name}</Text>
                    <Text style={[styles.listTitle, {color: '#4B4848'}]}>{item.score}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {

        const {goBack} = this.props.navigation;

        let val = deviceWidth - 40;
        
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../resource/bg1.png')} style={{flex: 1}}>
                    <View style={{flexDirection: 'row', height: 45, marginTop: 40, marginLeft: 13, marginRight: 13, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={ require("../resource/back.png") } style={{width: 27, height: 20}}/>
                        </TouchableOpacity>

                        <Text style={{flex: 1, color: 'white', fontSize: 30, textAlign: 'center'}}>Score</Text>

                        <TouchableOpacity onPress={() => this.onActionMenu()}>
                            <Image source={ require("../resource/menu.png") } style={{width: 27, height: 23}}/>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.container, {marginBottom: 105, alignItems: 'center', justifyContent: 'center'}]}>
                        <View style={{flexDirection: 'column', height: 375, width: val, marginLeft: 20, marginRight: 20, backgroundColor: 'white', borderRadius: 10}}>
                            <View style={{flexDirection: 'row', height: 65, backgroundColor: '#6DD5AA', borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.listTitle}>Name</Text>
                                <Text style={[styles.listTitle]}>Score</Text>
                            </View>

                            <View style={styles.container}>
                                <FlatList
                                    data={this.state.cashes}
                                    keyExtractor={(item, index) => item.index}
                                    renderItem={({item}) => this.renderItem(item)}
                                />
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
    title: {
        fontSize: 80, 
        color: 'white', 
        textAlign: 'center', 
        marginTop: 75
    },
    listTitle: {
        width: (deviceWidth - 40) / 2,
        color: 'white', 
        fontSize: 21, 
        textAlign: 'center'
    }
});