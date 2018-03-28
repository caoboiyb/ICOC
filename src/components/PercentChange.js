import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class PercentChange extends PureComponent {
  state = {}
  render() {
    return (
      <Text style={[
        styles.text,
        this.props.change >= 0
          ? styles.up
          : styles.down
      ]}>{this.props.change >= 0 && "+"}{this.props.change}%
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '500'
  },
  up: {
    color: "#63D39E"
  },
  down: {
    color: "#fc2a19"
  }
})
export default PercentChange;