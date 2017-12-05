/**
 * Created by wangdi on 13/11/16.
 */
import React, {Component} from 'react';
import ReactNative, {Text, View,Alert, StyleSheet, Platform, PixelRatio, WebView, ToastAndroid, BackAndroid, ActivityIndicator} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class WebViewPage extends Component{

    //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: '详情'
    });
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
});