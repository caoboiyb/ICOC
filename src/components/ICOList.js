import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import ICOSection from './ICOSection'

class ICOList extends PureComponent {
  state = {  }

  _keyExtractor = (item, index) => item.name

  _renderItem = ({ item, index }) => (
      <ICOSection 
        item={item}
        backgroundColor={index % 2 === 0 ? "#FFFFFF" : "#F6F6F6"}
        listIndex={this.props.index}
      />
  )

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

export default ICOList;