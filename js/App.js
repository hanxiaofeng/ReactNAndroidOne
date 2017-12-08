import {AppRegistry,Text} from 'react-native';
import React, {Component} from 'react';

// export default class RNOneHelp extends Component {
//     render() {
//         return (
//             <Navigation/>
//         );
//     }
// }


import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';

import WebViewPage from './js/page/WebViewPage';
import HomePage from './js/page/HomeFragment';


// StackNavigator配置，默认显示HomePage页面
const ReactNativeDemo = StackNavigator(
    {
        WebViewPage: {
            screen: WebViewPage,
            /*navigationOptions: {
                headerTitle: 'Home',   //headerTitle和title效果相同 设置导航栏标题，推荐用这个方法
                headerTitleStyle: {color: 'red', backgroundColor: 'white', alignSelf: 'center'},   //标题栏文字样式 设置居中
                headerStyle: {backgroundColor: 'green'},  //导航栏的样式
                //header: null                              //隐藏导航栏
                headerRight: <Text onPress={() => {
                    alert('i am right');
                }
                }>right</Text>,                          //标题栏左右的按钮
                headerLeft: <Text style={{marginLeft: 10}}>left</Text>,           //最好定义在组件内部
            },*/

        },
        HomePage: {screen: HomePage },
    },
    {
        initialRouteName: 'HomePage',//默认路由，就是第一个要显示的页面
        /*navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            header: {  // 导航栏相关设置项
                backTitle: '返回',  // 左上角返回键文字
                style: {
                    backgroundColor: '#fff',
                },
                titleStyle: {
                    color: 'white',
                }
            },
            cardStack: {
                gesturesEnabled: true,
            }
        },*/
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
        onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调

    }
);


AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);