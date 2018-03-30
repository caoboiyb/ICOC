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
        refreshing: false,
        sortColumn: 0
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.segmentIndex === 0) {
            this.setState({
                data: nextProps.listCoin,
                displayData: nextProps.listCoin
            }, () => this.updateSortedData())
        } else if (nextProps.segmentIndex === 1) {
            this.setState({
                data: nextProps.allCoin,
                displayData: nextProps.allCoin
            }, () => this.updateSortedData())
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
        }, () => {
            this.props.updateAllCoin()
            this.props.updateTopCoin()
            this.setState({
                refreshing: false
            })
        })
    }

    _onSort = index => {
        if (this.state.sortColumn === index) {
            this.setState({
                sortColumn: -index,
                // refreshing: true
            }, () => this.updateSortedData(this.state.data))
        } else {
            this.setState({
                sortColumn: index,
                // refreshing: true
            }, () => this.updateSortedData())
        }
    }

    sort = indexCol => {
        switch (indexCol) {
            case 1:
                return this.sortByRankASC()
            case -1:
                return this.sortByRankDES()
            case 2:
                return this.sortByNameASC()
            case -2:
                return this.sortByNameDES()
            case 3:
                return this.sortByPriceASC()
            case -3:
                return this.sortByPriceDES()
            case 4:
                return this.sortByPercentASC()
            case -4:
                return this.sortByPercentDES()
            default:
                return this.sortByRankASC()
        }
    }

    sortByRankASC = () => this.state.displayData.sort((a, b) => {
        return parseInt(a.rank) - parseInt(b.rank)
    })

    sortByRankDES = () => this.state.displayData.sort((a, b) => {
        return parseInt(b.rank) - parseInt(a.rank)
    })

    sortByNameASC = () => this.state.displayData.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        return nameA < nameB ? -1 : 1
    })

    sortByNameDES = () => this.state.displayData.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()

        return nameA < nameB ? 1 : -1
    })

    sortByPriceASC = () => this.state.displayData.sort((a, b) => {
        return parseFloat(a.price_usd) - parseFloat(b.price_usd)
    })

    sortByPriceDES = () => this.state.displayData.sort((a, b) => {
        return parseFloat(b.price_usd) - parseFloat(a.price_usd)
    })

    sortByPercentASC = () => {
        switch (this.props.segmentIndex) {
            case 0:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(a.percent_change_1h) - parseFloat(b.percent_change_1h)
                })
            case 1:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(a.percent_change_24h) - parseFloat(b.percent_change_24h)
                })
            case 2:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(a.percent_change_7d) - parseFloat(b.percent_change_7d)
                })
            default:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(a.percent_change_1h) - parseFloat(b.percent_change_1h)
                })
        }
    }

    sortByPercentDES = () => {
        switch (this.props.segmentIndex) {
            case 1:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(b.percent_change_1h) - parseFloat(a.percent_change_1h)
                })
            case 2:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h)
                })
            case 3:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(b.percent_change_7d) - parseFloat(a.percent_change_7d)
                })
            default:
                return this.state.displayData.sort((a, b) => {
                    return parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h)
                })
        }
    }

    updateSortedData = () => {
        const sortedData = this.sort(this.state.sortColumn)
        this.setState({
            displayData: [...sortedData],
            // refreshing: false
        })
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
                <SortBar
                    sortedColumn={this.state.sortColumn}
                    onSort={this._onSort}
                />
                <View style={styles.content}>
                    <CoinList
                        data={this.state.displayData}
                        extraData={this.state.data}
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