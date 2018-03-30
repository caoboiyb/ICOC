import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Header from '../components/Header';
import MarketCap from '../components/MarketCap';
import ToggleTime from '../components/ToggleTime';
import SortBar from '../components/SortBar';
import CoinItem from '../components/CoinItem';
import CoinList from '../components/CoinList';

import { connect } from 'react-redux'
import { 
    createChangeSegmentCoinAction,
    coinRequestAction,
    allRequestAction
 } from '../actions'



class CoinScreen extends PureComponent {
    state = { 
        data: [],
        displayData: [],
        changeTimeIndex: 1,
        refreshing: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.listCoin.length !== 0) {
            if (nextProps.segmentIndex === 0) {
                this.setState({
                    data: nextProps.listCoin,
                    displayData: nextProps.listCoin,
                    refreshing: false
                })
            } else if (nextProps.segmentIndex === 1) {
                this.setState({
                    data: nextProps.allCoin,
                    displayData: nextProps.allCoin,
                    refreshing: false
                })
            }
        }
    }

    _onCoinSegmentChange = index => {
        this.props.changeCoinSegmentIndex(index)
    }

    _onSearch = text => {
        var searchData = this.state.data.filter(item => {
            return item.name.toLowerCase().includes(text.toLowerCase()) 
                || item.symbol.toLowerCase().includes(text.toLowerCase())
        })
        this.setState({
            displayData: searchData
        })
    }

    _onChangeTimeIndex = index => {
        this.setState({
            changeTimeIndex: index
        })
    }

    _onRefresh = () => {
        this.setState({
            refreshing: true
        })
        this.props.updateAllCoin()
        this.props.updateTopCoin()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    titleArray={["Top 100", "All"]}
                    widthSegment={200}
                    selectedIndex={this.props.segmentIndex}
                    onSegmentChange={this._onCoinSegmentChange}
                    hasSearch={true}
                    onSearch={this._onSearch}
                />
                <MarketCap marketCap={this.props.marketCap} />
                <ToggleTime 
                    selectedTime={this.state.changeTimeIndex}
                    onChangeTimeIndex={this._onChangeTimeIndex}    
                />
                <SortBar />
                <View style={styles.content}>
                    <CoinList 
                        data={this.state.displayData}
                        selectedTime={this.state.changeTimeIndex}
                        onRefresh={this._onRefresh}
                        refreshing={this.state.refreshing}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#242233"
    }
})

const mapAppStateToProps = state => {
    return {
        segmentIndex: state.coinIndex,
        marketCap: state.marketCap,
        listCoin: state.listCoin,
        allCoin: state.allCoin
    }
}

const mapDispatchToProps = dispatch => ({
    changeCoinSegmentIndex: index => dispatch(createChangeSegmentCoinAction(index)),
    updateTopCoin: () => dispatch(coinRequestAction()),
    updateAllCoin: () => dispatch(allRequestAction())
})

export default connect(mapAppStateToProps, mapDispatchToProps)(CoinScreen);  