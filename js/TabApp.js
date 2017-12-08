/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 *
 * 三方库搜索工具：https://js.coach/
 *
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Text
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';

import Home from './tabPage/Home';
import Type from './tabPage/Type';
import ShopCar from './tabPage/Message';
import Mine from './tabPage/Mine';
import Details from './tabPage/Details';
import WebViewPage from './page/WebViewPage';
import ImageZoom from './tabPage/img/ImageZoom';
import Setting from './tabPage/Setting';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const Tab = TabNavigator({
    //每一个页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    Type: {
        screen: Type,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '文章',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '文章',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_type.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    ShopCar: {
        screen: ShopCar,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '消息',

            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_shop_car.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',

            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#cf2ceb'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {

    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#cf2ceb',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});
/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
    Tab: {
        screen: Tab,
    },
    Details: {
        screen: Details,
    },
    WebViewPage: {
        screen: WebViewPage,
    },
    Setting: {
        screen: Setting,
    },
    /*ImageZoom: {
        screen: ImageZoom,
    },*/

},{
    //自定义界面跳转左右切换动画
    transitionConfig:()=>({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
});