import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    Alert
} from 'react-native';

export default class ShopCar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                    () => {
                        this.requestCameraPermission();
                    }
                }>
                    <Text style={{color: 'white'}}>消息</Text>
                </TouchableOpacity>
            </View>
        );
    }

    requestCameraPermission() {
        Alert.alert('','你好')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});