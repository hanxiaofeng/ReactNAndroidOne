/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, RefreshControl, Alert} from 'react-native';
import theme from '../config/theme';
import ListViewForOtherTab from '../component/SimpleListView';

export default class HomeFragment extends Component {

    static navigationOptions = {
        title: '首页',//对页面的配置
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataBlob: [],

        };

    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['red','#ffd500','#0080ff','#99e600']}
                            tintColor={theme.themeColor}
                            title="Loading..."
                            titleColor={theme.themeColor}
                        />
                    }>
                    <ListViewForOtherTab navigation={navigate} contents={this.state.dataBlob} />
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        this._fetchData();
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }



    _fetchData() {
        var url = 'http://gank.io/api/data/Android/20/1';
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                let results = responseData.results;
                // Alert.alert( 'Alert Title',''+responseData.results)
                var dataBlob = [];

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
                    dataBlob.push(info);
                }

                if (dataBlob.length !== 0) {
                    this.setState({
                        dataBlob: dataBlob,
                        refreshing: false,
                    });
                }
            }).done();
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
    }
});