/**
 * Created by wangkeke on 2017/12/7.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal,
    BackHandler,
    Alert,
    Platform
} from 'react-native';

import px2dp from '../../util/px2dp';
import theme from '../../config/theme';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class ImageZoom extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: '详情',
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
    backVC() {
        //返回首页方法
        this.props.navigation.goBack();
    }


    componentDidMount() {

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentWillMount() {
        var curThis = this;
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.setModalVisible(false)
            return true;
        });
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', () => {
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            showImage: true,
            modalVisible: false
        };

    }

    render() {
        const data = this.props.navigation.state.params.data;
        let images = [{url: data.url}];
        return (
            <View style={styles.rootView}>
                <Modal visible={this.state.modalVisible} transparent={true} onRequestClose={() => {

                    this.setState({
                        modalVisible: false
                    })
                }}>
                    <ImageViewer imageUrls={images}/>
                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    webView: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    headerStyle: {
        backgroundColor: '#EB3695',
    },
    rootView: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
});