import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Header from '../components/Header'
import MarketCap from '../components/MarketCap'
import ToggleTime from '../components/ToggleTime'

import { connect } from 'react-redux'
import { createChangeSegmentCoinAction, marketcapRequestAction } from '../actions'

class CoinScreen extends PureComponent {
    state = {}

    componentDidMount() {
    }

    _onCoinSegmentChange = index => {
        this.props.changeCoinSegmentIndex(index)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    titleArray={["All", "Favorites"]}
                    widthSegment={200}
                    selectedIndex={this.props.segmentIndex}
                    onSegmentChange={this._onCoinSegmentChange}
                    hasSearch={true}
                />
                <MarketCap marketCap={this.props.marketCap} />
                <ToggleTime />
                <View style={styles.content}>
                    <Text>ABC</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#242233"
    }
})

const mapAppStateToProps = state => {
    return {
        segmentIndex: state.coinIndex,
        marketCap: state.marketCap
    }
}

const mapDispatchToProps = dispatch => ({
    changeCoinSegmentIndex: index => dispatch(createChangeSegmentCoinAction(index)),
    marketcapGetRequest: () => dispatch(marketcapRequestAction())
})

export default connect(mapAppStateToProps, mapDispatchToProps)(CoinScreen);  