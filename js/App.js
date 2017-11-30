import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

var { NativeModules } = require('react-native');
export default class navigation extends Component {

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    真是不容易啊
                </Text>
            </View>
        );
    }
}

class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#239786',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
})