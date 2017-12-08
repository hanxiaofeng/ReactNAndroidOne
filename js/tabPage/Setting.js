import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    Alert,
    Switch,
    Button,
    PixelRatio,
    ToastAndroid
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';

export default class Setting extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: '设置',
            //设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},

            //是否开启手势滑动返回，android 默认关闭 ios打开
            gesturesEnabled: true,
            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle: null,
            //导航栏的样式
            headerStyle: styles.headerStyle,
            //导航栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //返回按钮的颜色
            headerTintColor: 'white',

            //隐藏顶部导航栏
            // header: null,

            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
            headerRight: (<View/>),

            //设置导航栏左边的视图
            // headerLeft: (<View/>),

        }

    );

    constructor(props) {
        super(props);

        this.state = {
            value: false,
        };
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    flexDirection: 'row',
                    height: px2dp(50),
                    padding: 20,
                    alignItems: 'center',
                    marginBottom:px2dp(200),
                    backgroundColor: '#fdfdfe',
                    borderBottomColor: '#c4c4c4',
                    borderBottomWidth: 1 / PixelRatio.get()
                }}>
                    <Text style={{flex: 1, fontSize: 16}}>消息推送</Text>
                    <Switch style={{marginLeft: 20}} value={this.state.value} onTintColor='red' tintColor='blue'
                            thumbTintColor='black' onValueChange={(value) => {
                        this.setState({
                            value: value,
                        })

                        ToastAndroid.show(value ? '打开了消息推送的开关！' : '关闭了消息推送的开关！', ToastAndroid.SHORT);
                    }}/>
                </View>


                <Button title='返回'
                        onPress={() => {
                            this.backHome();
                        }}/>

            </View>
        );
    }

    backHome(){
        this.props.navigation.goBack();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
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
    },
    headerStyle: {
        backgroundColor: '#cf2ceb',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
});