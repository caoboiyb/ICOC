import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native';
import CoinItem from './CoinItem';

class CoinList extends PureComponent {
    state = {}

    _keyExtractor = (item, index) => item.id

    _renderItem = ({ item }) => (
        <CoinItem 
            coin={item}
            selectedTime={this.props.selectedTime}
        />
    );

    render() {
        return (
            <FlatList
                style={{flex: 1}}
                data={this.props.data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

export default CoinList;