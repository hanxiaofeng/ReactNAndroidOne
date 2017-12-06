/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component} from 'react';
import ReactNative, {
    Alert,
    Text,
    View,
    StyleSheet,
    Platform,
    PixelRatio,
    ListView,
    RefreshControl,
    TouchableNativeFeedback,
    Image
} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';


export default class SimpleListView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.contents),
        };

    }

    componentDidMount() {
        // Alert.alert('提示','componentDidMount')
    }


    _itemClickCallback(rowData) {
        // MainPage.switchToWebViewPage(rowData);
        // Alert.alert('提示','_itemClickCallback')
        // const { navigate } = this.props.navigation;
        this.props.navigation('WebViewPage', { data: rowData })
    }

    _renderItem(rowData) {
        return (
            <View>
                <TouchableNativeFeedback onPress={this._itemClickCallback.bind(this, rowData)}>
                    {this._renderItemContent(rowData)}
                </TouchableNativeFeedback>
            </View>
        )
    }

    _renderItemContent(rowData) {
        return (
            <View style={styles.item}>
                <View style={{flex: 80, marginTop: px2dp(10)}}>
                    <Text style={styles.content}>{rowData.desc}</Text>
                    <View style={styles.infoBar}>
                        <Text style={styles.infoBarText}>{rowData.who} • {rowData.publishedAt}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {

        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
                enableEmptySections = {true}
                removeClippedSubviews={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: px2dp(0),
        backgroundColor: '#445342'
    },
    header: {
        backgroundColor: '#fff',
        height: px2dp(40),
        paddingLeft: px2dp(15),
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        width: theme.screenWidth,
        // height: px2dp(80),
        backgroundColor: '#ff5c52',
        paddingLeft: px2dp(15),
        paddingBottom:px2dp(10),
        paddingRight: px2dp(17),
        borderTopColor: '#d4d4d4',
        justifyContent:'center',
        borderTopWidth: 1 / PixelRatio.get()
    },
    content: {
        color: '#000',
        fontSize: px2dp(15),
    },
    image: {
        height: px2dp(55),
        width: px2dp(55),
        backgroundColor: '#f4f4f4',
        resizeMode: 'cover'
    },
    infoBar: {
        flexDirection: 'row',
        marginTop: px2dp(3)
    },
    infoBarText: {
        fontSize: px2dp(11),
        color: theme.grayColor
    }
});