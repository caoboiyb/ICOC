import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import currencyFormatter from 'currency-formatter';
import PercentChange from './PercentChange'

class CoinItem extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={{width: 30, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.text}>{this.props.coin.rank}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.text, {paddingLeft: 10}]}>{this.props.coin.name} - {this.props.coin.symbol}</Text>
                </View>
                <View style={{ flex: 0.5 }}>
                    <Text style={styles.text}>{currencyFormatter.format(this.props.coin.price_usd, { code: 'USD' })}</Text>
                </View>
                <View style={{ flex: 0.4 }}>
                    <PercentChange change={this.props.coin.percent_change_24h} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#312F46",
        borderBottomWidth: 2,
        backgroundColor: "#242233",
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        flex: 1
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: '500'
    }
})
export default CoinItem;