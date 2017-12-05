/**
 * Created by wangdi on 4/11/16.
 *
 *
 *
 * import {
  StackNavigator,
} from 'react-navigation';

 const App = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});
 */
'use strict';

import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import { StackNavigator} from 'react-navigation';
import HomeFragmentPage from '../page/HomeFragment';

export default class Navigation extends Component{

    render(){
        return(
        <Navigator
            initialRoute={{component: HomeFragmentPage}}
            renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }

}