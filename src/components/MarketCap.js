import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import currencyFormatter from 'currency-formatter';

class MarketCap extends PureComponent {

    componentDidMount() {

    }

    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>Market Cap: </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{currencyFormatter.format(this.props.marketCap, { code: 'USD' })} </Text>
                    </View>
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
        padding: 10
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: '500'
    }
})

export default MarketCap;