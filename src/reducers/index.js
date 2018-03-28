import { combineReducers } from 'redux';

import { navigationReducer } from '../AppNavigation'

import segmentCoinReducer from './SegmentCoinReducer'
import segmentICOReducer from './SegmentICOReducer'
import marketcapReducer from './MarketCapReducer'
import listCoinReducer from './ListCoinReducer'

export default combineReducers({
    nav: navigationReducer,
    coinIndex: segmentCoinReducer,
    icoIndex: segmentICOReducer,
    marketCap: marketcapReducer,
    listCoin: listCoinReducer
})