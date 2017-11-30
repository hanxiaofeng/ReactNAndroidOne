import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './js/App';
import Navigation from './js/config/entry';

export default class ReactNativeDemo extends Component {
    render() {
        return (
            <Navigation/>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);