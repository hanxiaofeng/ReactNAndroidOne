import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Alert,
    PixelRatio,
    Image,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

import theme from '../config/theme';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Mine extends Component {

    static navigationOptions = ({navigation, screenProps}) => ( {
        headerRight: (

            <View>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Setting')}>
                    <Image style={{width: 40, height: 40, alignSelf: 'center', marginRight: 0,}}
                           source={require('../image/setting.png') }/>
                </TouchableWithoutFeedback>
            </View>
        ),
        headerLeft: (
            //空组件，为了解决添加右侧设置按钮后，标题名字不居中问题
            <View/>
        ),
    });

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>

                    <View style={styles.head}>

                        <Image
                            style={styles.logo}
                            source={require('../image/head.png')}
                        />

                        <Text style={{color: 'white', marginTop: px2dp(10)}}>寒小枫</Text>

                    </View>

                    <View style={styles.list}>
                        <Item icon="md-heart" text="我的收藏" subText="15篇" iconColor="#32cd32"
                              onPress={this._onPressCallback.bind(this, 1)}/>
                        <Item icon="md-eye" text="历史记录" subText="100条" onPress={this._onPressCallback.bind(this, 2)}/>
                        <Item icon="md-pricetag" text="未读消息" subText="9个"
                              onPress={this._onPressCallback.bind(this, 3)}/>
                    </View>

                </ScrollView>

                {/*<TouchableOpacity style={styles.button} activeOpacity={0.5}>
                 <Text style={{color: 'white'}}>我的</Text>
                 </TouchableOpacity>*/}
            </View>
        );
    }

    _onPressCallback(position) {
        switch (position) {
            case 1:  // add occupation
                this._alert();
                break;

            case 2:  //collection
                this._alert();
                break;

            case 3:  //read articles
                this._alert();
                break;
        }
    }


    _alert() {
        Alert.alert(
            '提示',
            "功能暂未开发,哈哈哈哈",
            [{
                text: '好的', onPress: () => {
                }
            }]
        );
    }
}


class Item extends Component {
    render() {
        const {icon, iconColor, text, subText, onPress} = this.props;

        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View style={styles.listItem}>
                    <Icon name={icon} size={px2dp(22)} color={iconColor}/>
                    <Text style={{color: 'black', fontSize: px2dp(15), marginLeft: px2dp(20)}}>{text}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text style={{color: "#ccc"}}>{subText}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
    head: {
        flexDirection: 'column',
        height: px2dp(200),
        backgroundColor: '#ffc3d3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        flex: 1,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        // marginTop: px2dp(15)
    },
    listItem: {
        // flex: 1,
        height: px2dp(47),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(25),
        paddingRight: px2dp(25),
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    logo: {
        width: px2dp(100),
        height: px2dp(100),
    },
});