import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import { connect } from 'react-redux';

import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import SVGImage from 'react-native-svg-image';

import CoinScreen from './containers/CoinScreen'
import ICOScreen from './containers/ICOScreen'

const AppNavigator = TabNavigator(
  {
    Coin: {
      screen: CoinScreen
    },
    ICO: {
      screen: ICOScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconURL;
        if (routeName === 'Coin') {
          return (<Image
            source={require('./images/ic_insert_chart_white_48pt.png')}
            style={{ width: 30, height: 30, tintColor: tintColor }}
          >
          </Image>)
        } else if (routeName === 'ICO') {
          return (<Image
            source={require('./images/ic_alarm_white_48pt.png')}
            style={{ width: 30, height: 30, tintColor: tintColor }}
          >
          </Image>)
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (<Image
          source={require('./images/ic_insert_chart_white_48pt.png')}
          style={{ width: 30, height: 30, tintColor: tintColor }}
        >
        </Image>)
      },
    }),
    tabBarOptions: {
      activeTintColor: '#63D39E',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#18141F',
      }
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
  }
);

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Coin")
);

export const navigationReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

const middleWare = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const addListener = createReduxBoundAddListener("root");

class AppWithNavigation extends PureComponent {
  state = {}
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

const mapAppStateToProps = state => {
  return {
    nav: state.nav
  }
}

export const AppNavigation = connect(mapAppStateToProps)(AppWithNavigation);