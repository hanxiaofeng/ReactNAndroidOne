/**
 * Created by wangkeke on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    RefreshControl,
    ListView,
    TouchableNativeFeedback,
    PixelRatio,
    Alert
} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';
// import ListViewForOtherTab from '../component/SimpleListView';

export default class Type extends Component {

    static navigationOptions = {
        title: '首页',//对页面的配置
    };

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            refreshing: false,
            dataSource: ds.cloneWithRows([]),
            pageNo: 1,
            dataBlob: [],
            showFooter: true,
        };

        this._fetchData = this._fetchData.bind(this)
        this._renderFooter = this._renderFooter.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['red', '#ffd500', '#0080ff', '#99e600']}
                            tintColor={theme.themeColor}
                            title="Loading..."
                            titleColor={theme.themeColor}
                        />
                    }
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderItem.bind(this)}
                    enableEmptySections={true}
                    onEndReachedThreshold={5}
                    onEndReached={this._onEndReached.bind(this)}
                    renderFooter={this._renderFooter}
                />
            </View>
        );
    }

    _renderFooter() {

        if(this.state.pageNo === 1){
            return null;
        }

        if (!this.state.showFooter) {
            return <View
                style={{height: 40, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.state.pageNo > 3?'无更多数据了啦！':'开始加载···'}</Text>
            </View>
        }
        return (
            <View style={{height: 40, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
                <Text>正在加载更多···</Text>
            </View>
        )
    }

    _onEndReached() {

        var curThis = this;

        //react native setState之后的state值不能立即使用，setState之后，需要走完RN生命周期，也就是走到render时，state的值才会变成setState的值，要立即使用state的值，需要直接更改，也即this.state.something = 'now';
        this.setState({
            showFooter: true,
        });

        // this.state.showFooter = true;
        this.state.pageNo = curThis.state.pageNo + 1;
        this._fetchData();
    }


    componentDidMount() {
        this._fetchData();
    }

    _onRefresh() {
        this.state.showFooter = false;
        this.state.pageNo = 1;
        this.state.dataBlob = [];
        this.state.refreshing = true;
        this._fetchData();
    }

    _fetchData() {
        var url = 'http://gank.io/api/data/all/20/' + this.state.pageNo;
        // Alert.alert('提示',''+url)
        // var dataBlob = [];
        var curthis = this;
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                let results = responseData.results;
                // Alert.alert( 'Alert Title',''+responseData.results)


                for (let i in results) {
                    let info = {
                        _id: results[i]._id,
                        createdAt: results[i].createdAt,
                        desc: results[i].desc,
                        publishedAt: results[i].publishedAt,
                        source: results[i].source,
                        type: results[i].type,
                        url: results[i].url,
                        used: results[i].used,
                        who: results[i].who,
                    }
                    curthis.state.dataBlob.push(info);
                }

                if (curthis.state.dataBlob.length !== 0) {

                    curthis.setState({
                        dataSource: curthis.state.dataSource.cloneWithRows(curthis.state.dataBlob),
                        refreshing: false,
                        showFooter: false,
                    });
                } else {
                    curthis.setState({
                        refreshing: false,
                        showFooter: false,
                    });
                }
            }).done();
    }


    _itemClickCallback(rowData) {
        // MainPage.switchToWebViewPage(rowData);
        // Alert.alert('提示','_itemClickCallback')
        const {navigate} = this.props.navigation;

        // Alert.alert('提示',''+navigate)

        navigate('WebViewPage', {data: rowData})
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

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    headerHeight: {
        height: 30
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    },
    listView: {
        marginTop: px2dp(0)
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
        backgroundColor: '#ffffff',
        paddingLeft: px2dp(15),
        paddingBottom: px2dp(10),
        paddingRight: px2dp(17),
        borderTopColor: '#d4d4d4',
        justifyContent: 'center',
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
    },
    footer: {
        height: px2dp(35),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4e4f4',
    }
});