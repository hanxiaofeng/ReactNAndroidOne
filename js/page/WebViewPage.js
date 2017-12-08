/**
 * Created by wangdi on 13/11/16.
 */
import React, {Component} from 'react';
import ReactNative, {Text, View,Alert, StyleSheet, Platform, PixelRatio, WebView, ToastAndroid, BackAndroid, ActivityIndicator} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class WebViewPage extends Component{

    //接收上一个页面传过来的title显示出来
    /*static navigationOptions = ({ navigation }) => ({
        title: '详情'
    });*/
    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: ''+navigation.state.params.data.desc,
            //设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},

            //是否开启手势滑动返回，android 默认关闭 ios打开
            // gesturesEnabled: true,

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


    // 点击返回上一页方法
    backVC(){
        //返回首页方法
        this.props.navigation.goBack();
    }

    componentDidMount() {
    }

    constructor(props){
        super(props);
        this.state = {

        };

    }

    render(){
        const data = this.props.navigation.state.params.data;
        return(
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: data.url}}
                    style={styles.webView}
                    renderLoading={this._renderLoading.bind(this)}
                    startInLoadingState={true}
                    onLoad={this._showTips.bind(this, 'load')}
                    onError={this._showTips.bind(this, 'error')}
                />
            </View>
        );
    }

    _showTips(msg){
        //ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    _renderLoading(){
        return(
            <View style={{justifyContent: 'center', paddingTop: px2dp(20)}}>
                <ActivityIndicator color={theme.themeColor} size="large"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
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