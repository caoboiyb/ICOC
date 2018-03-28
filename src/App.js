/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk'

import { AppNavigation } from './AppNavigation'
import {
  marketcapRequestAction,
  coinRequestAction
} from './actions'

class App extends PureComponent {
  state = { isLoading: true }

  componentDidMount() {
    this.setState({
      isLoading: false,
      store: createStore(
        reducers,
        applyMiddleware(thunk)
      )
    }, () => {
      this.state.store.dispatch(marketcapRequestAction());
      this.state.store.dispatch(coinRequestAction());
    });
  }

  render() {
    return (
      this.state.isLoading ?
        <Text>...Loading</Text>
        : (<Provider store={this.state.store}>
          <View style={{ flex: 1 }}>
            <StatusBar
              barStyle="light-content"
            />
            <AppNavigation />
          </View>
        </Provider>)
    );
  }
}

export default App;

