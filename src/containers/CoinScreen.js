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
import { createChangeSegmentCoinAction, marketcapRequestAction } from '../actions'



class CoinScreen extends PureComponent {
    state = { displayData: [] }

    componentWillReceiveProps(nextProps) {
        if (nextProps.listCoin.length !== 0) {
            if (nextProps.segmentIndex === 0) {
                this.setState({
                    displayData: nextProps.listCoin
                })
            } else if (nextProps.segmentIndex === 1) {
                this.setState({
                    displayData: nextProps.allCoin
                })
            }
        }
    }

    _onCoinSegmentChange = index => {
        this.props.changeCoinSegmentIndex(index)
    }

    _onSearch = text => {
        console.log(text)
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
                <ToggleTime />
                <SortBar />
                <View style={styles.content}>
                    <CoinList data={this.state.displayData} />
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
    changeCoinSegmentIndex: index => dispatch(createChangeSegmentCoinAction(index))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(CoinScreen);  